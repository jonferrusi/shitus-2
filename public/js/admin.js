function fmtDuration(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h === 0) return `${m}m`;
  return `${h}h ${m}m`;
}

function avatarUrl(user) {
  if (!user.avatar) return `https://cdn.discordapp.com/embed/avatars/0.png`;
  return `https://cdn.discordapp.com/avatars/${user.discord_id || user.id}/${user.avatar}.png?size=64`;
}

let cachedRoles = [];
let cachedShiftTypes = [];

async function init() {
  const meRes = await fetch("/api/me");
  if (!meRes.ok) {
    location.href = "/index.html";
    return;
  }
  const me = await meRes.json();
  document.getElementById("username").textContent = me.username;
  document.getElementById("avatar").src = avatarUrl(me);

  document.getElementById("logout").addEventListener("click", async () => {
    await fetch("/auth/logout", { method: "POST" });
    location.href = "/index.html";
  });

  if (!me.isAdmin) {
    document.getElementById("denied").style.display = "block";
    return;
  }
  document.getElementById("admin-content").style.display = "block";

  await loadRoles();
  await Promise.all([loadRoster(), loadShiftTypes(), loadQuotas(), loadPermissions()]);

  document.getElementById("shifttype-form").addEventListener("submit", onAddShiftType);
  document.getElementById("quota-form").addEventListener("submit", onSetQuota);
  document.getElementById("admin-role-add").addEventListener("click", () => onGrantPermission("admin"));
  document.getElementById("addtime-role-add").addEventListener("click", () => onGrantPermission("add_time"));
}

async function loadRoles() {
  const res = await fetch("/api/admin/roles");
  cachedRoles = await res.json();

  const shifttypeRoleSelect = document.getElementById("shifttype-role");
  shifttypeRoleSelect.innerHTML =
    `<option value="">Anyone can start it</option>` +
    cachedRoles.map((r) => `<option value="${r.id}">${r.name}</option>`).join("");

  for (const id of ["admin-role-select", "addtime-role-select"]) {
    document.getElementById(id).innerHTML = cachedRoles.map((r) => `<option value="${r.id}">${r.name}</option>`).join("");
  }
}

function roleName(id) {
  return cachedRoles.find((r) => r.id === id)?.name ?? "Unknown role";
}

async function loadRoster() {
  const res = await fetch("/api/admin/roster");
  const data = await res.json();
  const body = document.getElementById("roster-body");
  const empty = document.getElementById("roster-empty");
  body.innerHTML = "";

  if (data.roster.length === 0) {
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  for (const person of data.roster) {
    const hours = person.total_seconds / 3600;
    const met = data.quotaHours ? hours >= data.quotaHours : null;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="display:flex; align-items:center; gap:10px;">
        <img class="avatar" style="width:22px;height:22px;" src="${avatarUrl(person)}" alt="" />
        ${person.username}
      </td>
      <td class="mono">${fmtDuration(person.total_seconds)}</td>
      <td>${
        data.quotaHours == null
          ? `<span class="pill neutral">No quota set</span>`
          : met
          ? `<span class="pill good">Met (${data.quotaHours}h)</span>`
          : `<span class="pill warn">${(data.quotaHours - hours).toFixed(1)}h short</span>`
      }</td>
    `;
    body.appendChild(tr);
  }
}

async function loadShiftTypes() {
  const res = await fetch("/api/admin/shifttypes");
  cachedShiftTypes = await res.json();
  const body = document.getElementById("shifttypes-body");
  body.innerHTML = "";

  for (const t of cachedShiftTypes) {
    const tr = document.createElement("tr");
    const restrictOptions =
      `<option value="">Anyone</option>` +
      cachedRoles.map((r) => `<option value="${r.id}" ${r.id === t.required_role_id ? "selected" : ""}>${r.name}</option>`).join("");

    tr.innerHTML = `
      <td>${t.name}</td>
      <td><select data-name="${t.name}" class="restrict-select">${restrictOptions}</select></td>
      <td style="text-align:right;"><button class="btn btn-ghost btn-danger" data-name="${t.name}">Remove</button></td>
    `;
    tr.querySelector("button").addEventListener("click", () => onRemoveShiftType(t.name));
    tr.querySelector(".restrict-select").addEventListener("change", (e) => onRestrictShiftType(t.name, e.target.value));
    body.appendChild(tr);
  }

  const select = document.getElementById("quota-type");
  select.innerHTML = `<option value="">Overall (all shift types)</option>`;
  for (const t of cachedShiftTypes) {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = t.name;
    select.appendChild(opt);
  }
}

async function loadQuotas() {
  const res = await fetch("/api/admin/quotas");
  const quotas = await res.json();
  const body = document.getElementById("quotas-body");
  body.innerHTML = "";

  for (const q of quotas) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${q.shift_type_name ?? "Overall"}</td><td class="mono">${q.hours_required}h</td>`;
    body.appendChild(tr);
  }
}

async function loadPermissions() {
  const res = await fetch("/api/admin/permissions");
  const data = await res.json();
  renderPermissionList("admin-roles-list", data.admin, "admin");
  renderPermissionList("addtime-roles-list", data.add_time, "add_time");
}

function renderPermissionList(containerId, roleIds, type) {
  const container = document.getElementById(containerId);
  if (!roleIds || roleIds.length === 0) {
    container.innerHTML = `<span style="font-size:13px; color: var(--muted);">No roles granted here yet.</span>`;
    return;
  }
  container.innerHTML = "";
  for (const roleId of roleIds) {
    const pill = document.createElement("span");
    pill.className = "pill neutral";
    pill.style.marginRight = "8px";
    pill.style.marginBottom = "8px";
    pill.style.display = "inline-flex";
    pill.style.alignItems = "center";
    pill.style.gap = "6px";
    pill.innerHTML = `${roleName(roleId)} <button style="background:none;border:none;color:inherit;cursor:pointer;font-weight:700;padding:0;">×</button>`;
    pill.querySelector("button").addEventListener("click", () => onRevokePermission(roleId, type));
    container.appendChild(pill);
  }
}

async function onAddShiftType(e) {
  e.preventDefault();
  const input = document.getElementById("shifttype-name");
  const roleSelect = document.getElementById("shifttype-role");
  const name = input.value.trim();
  if (!name) return;

  await fetch("/api/admin/shifttypes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, requiredRoleId: roleSelect.value || null }),
  });
  input.value = "";
  roleSelect.value = "";
  await loadShiftTypes();
}

async function onRemoveShiftType(name) {
  if (!confirm(`Remove shift type "${name}"? Past shifts logged under it are kept.`)) return;
  await fetch(`/api/admin/shifttypes/${encodeURIComponent(name)}`, { method: "DELETE" });
  await Promise.all([loadShiftTypes(), loadQuotas(), loadRoster()]);
}

async function onRestrictShiftType(name, roleId) {
  await fetch(`/api/admin/shifttypes/${encodeURIComponent(name)}/restrict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ roleId: roleId || null }),
  });
}

async function onSetQuota(e) {
  e.preventDefault();
  const typeSelect = document.getElementById("quota-type");
  const hoursInput = document.getElementById("quota-hours");
  const shiftTypeId = typeSelect.value ? Number(typeSelect.value) : null;
  const hours = Number(hoursInput.value);
  if (Number.isNaN(hours)) return;

  await fetch("/api/admin/quotas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ shiftTypeId, hours }),
  });
  hoursInput.value = "";
  await Promise.all([loadQuotas(), loadRoster()]);
}

async function onGrantPermission(type) {
  const select = document.getElementById(type === "admin" ? "admin-role-select" : "addtime-role-select");
  const roleId = select.value;
  if (!roleId) return;

  await fetch("/api/admin/permissions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ roleId, type }),
  });
  await loadPermissions();
}

async function onRevokePermission(roleId, type) {
  await fetch("/api/admin/permissions", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ roleId, type }),
  });
  await loadPermissions();
}

init();
