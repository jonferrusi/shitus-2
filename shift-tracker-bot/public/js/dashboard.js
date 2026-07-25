let activeStartTime = null;
let activeBreakStart = null;
let activeTotalBreakSeconds = 0;
let tickerInterval = null;

function fmtDuration(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h === 0) return `${m}m`;
  return `${h}h ${m}m`;
}

function fmtClock(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${h}:${m}:${sec}`;
}

function avatarUrl(user) {
  if (!user.avatar) {
    return `https://cdn.discordapp.com/embed/avatars/${Number(BigInt(user.id) % 5n)}.png`;
  }
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=64`;
}

async function init() {
  const meRes = await fetch("/api/me");
  if (!meRes.ok) {
    location.href = "/index.html";
    return;
  }
  const me = await meRes.json();
  document.getElementById("username").textContent = me.username;
  document.getElementById("avatar").src = avatarUrl(me);
  if (me.isAdmin) document.getElementById("admin-link").style.display = "";

  document.getElementById("logout").addEventListener("click", async () => {
    await fetch("/auth/logout", { method: "POST" });
    location.href = "/index.html";
  });

  if (me.canAddTime) {
    document.getElementById("log-time-section").style.display = "block";
    await populateManualForm();
    document.getElementById("manual-form").addEventListener("submit", onSubmitManual);
  }

  await loadSummary();
  await loadHistory();
}

async function populateManualForm() {
  const res = await fetch("/api/shifttypes/mine");
  const types = await res.json();
  const select = document.getElementById("manual-type");
  select.innerHTML = types.length
    ? types.map((t) => `<option value="${t.id}">${t.name}</option>`).join("")
    : `<option value="">No shift types available to your roles</option>`;
  document.getElementById("manual-date").value = new Date().toISOString().slice(0, 10);
}

async function onSubmitManual(e) {
  e.preventDefault();
  const shiftTypeId = Number(document.getElementById("manual-type").value);
  const date = document.getElementById("manual-date").value;
  const hours = Number(document.getElementById("manual-hours").value);
  const msg = document.getElementById("manual-message");

  const res = await fetch("/api/shifts/manual", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ shiftTypeId, date, hours }),
  });

  msg.style.display = "block";
  if (res.ok) {
    msg.style.color = "var(--good)";
    msg.textContent = `Added ${hours}h. Your totals below are updated.`;
    document.getElementById("manual-hours").value = "";
    await loadSummary();
    await loadHistory();
  } else {
    const data = await res.json().catch(() => ({}));
    msg.style.color = "var(--warn)";
    msg.textContent =
      data.error === "not_allowed"
        ? "You don't have permission to add time."
        : data.error === "role_required"
        ? "You don't have the role required for that shift type."
        : "Couldn't add that entry — check the values and try again.";
  }
}

// --------------------------------------------------------------- ticket + controls

async function loadSummary() {
  const res = await fetch("/api/summary");
  const data = await res.json();

  const ticket = document.getElementById("ticket");
  const label = document.getElementById("ticket-label");
  const type = document.getElementById("ticket-type");
  const timer = document.getElementById("ticket-timer");

  if (tickerInterval) clearInterval(tickerInterval);
  ticket.classList.remove("on", "break");

  if (data.active) {
    const onBreak = !!data.active.break_start;
    activeStartTime = data.active.start_time;
    activeBreakStart = data.active.break_start;
    activeTotalBreakSeconds = data.active.total_break_seconds || 0;

    ticket.classList.add(onBreak ? "break" : "on");
    label.textContent = onBreak
      ? "On break since " + new Date(activeBreakStart * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : "On shift since " + new Date(activeStartTime * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    type.innerHTML = `${data.active.shift_type_name}${onBreak ? '<span class="break-pill">On Break</span>' : ""}`;

    const tick = () => {
      const now = Math.floor(Date.now() / 1000);
      // Time on break doesn't count — freeze the working timer while on break.
      const workedSeconds = activeBreakStart
        ? activeBreakStart - activeStartTime - activeTotalBreakSeconds
        : now - activeStartTime - activeTotalBreakSeconds;
      timer.textContent = fmtClock(workedSeconds);
    };
    tick();
    tickerInterval = setInterval(tick, 1000);
  } else {
    label.textContent = "Not on shift";
    type.textContent = "—";
    timer.textContent = "00:00:00";
  }

  renderControls(data.active);
  renderQuotas(data.totals, data.quotas);
  renderAllTime(data.allTimeTotals);
}

async function renderControls(active) {
  const container = document.getElementById("controls");
  container.innerHTML = "";

  if (!active) {
    const res = await fetch("/api/shifttypes/mine");
    const types = await res.json();
    if (types.length === 0) {
      container.innerHTML = '<p style="font-size:13px; color: var(--muted);">None of your roles are set up to start a shift here. Ask an admin.</p>';
      return;
    }

    const select = document.createElement("select");
    select.id = "start-type-select";
    select.innerHTML = types.map((t) => `<option value="${t.id}">${t.name}</option>`).join("");

    const button = document.createElement("button");
    button.className = "btn btn-accent";
    button.textContent = "Start Shift";
    button.addEventListener("click", () => onStartShift(select.value, button));

    container.appendChild(select);
    container.appendChild(button);
    return;
  }

  const onBreak = !!active.break_start;

  const breakBtn = document.createElement("button");
  breakBtn.className = "btn btn-ghost";
  breakBtn.textContent = onBreak ? "End Break" : "Start Break";
  breakBtn.addEventListener("click", () => (onBreak ? onEndBreak(breakBtn) : onStartBreak(breakBtn)));

  const endBtn = document.createElement("button");
  endBtn.className = "btn btn-danger-solid";
  endBtn.textContent = "End Shift";
  endBtn.addEventListener("click", () => onEndShift(endBtn));

  container.appendChild(breakBtn);
  container.appendChild(endBtn);
}

async function withButtonDisabled(button, fn) {
  button.disabled = true;
  const original = button.textContent;
  try {
    await fn();
  } finally {
    button.disabled = false;
    button.textContent = original;
  }
}

async function onStartShift(shiftTypeId, button) {
  await withButtonDisabled(button, async () => {
    const res = await fetch("/api/shift/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shiftTypeId: Number(shiftTypeId) }),
    });
    if (res.ok) {
      await loadSummary();
    } else {
      const data = await res.json().catch(() => ({}));
      alert(
        data.error === "role_required"
          ? "You don't have the role required for that shift type."
          : "Couldn't start that shift — refresh and try again."
      );
    }
  });
}

async function onStartBreak(button) {
  await withButtonDisabled(button, async () => {
    const res = await fetch("/api/shift/break/start", { method: "POST" });
    if (res.ok) await loadSummary();
  });
}

async function onEndBreak(button) {
  await withButtonDisabled(button, async () => {
    const res = await fetch("/api/shift/break/end", { method: "POST" });
    if (res.ok) await loadSummary();
  });
}

async function onEndShift(button) {
  await withButtonDisabled(button, async () => {
    const res = await fetch("/api/shift/end", { method: "POST" });
    if (res.ok) {
      await loadSummary();
      await loadHistory();
    } else {
      alert("Couldn't end that shift — refresh and try again.");
    }
  });
}

function renderAllTime(allTimeTotals) {
  const section = document.getElementById("alltime-section");
  const container = document.getElementById("alltime");
  if (!allTimeTotals || allTimeTotals.length === 0) {
    section.style.display = "none";
    return;
  }
  section.style.display = "block";
  container.innerHTML = allTimeTotals
    .map(
      (t) => `
      <div class="quota-row-head" style="margin-bottom: 10px;">
        <span class="name">${t.shift_type_name}</span>
        <span class="value">${fmtDuration(t.total_seconds)}</span>
      </div>`
    )
    .join("");
}

function renderQuotas(totals, quotas) {
  const container = document.getElementById("quotas");
  container.innerHTML = "";

  const quotaByType = new Map(quotas.map((q) => [q.shift_type_id, q.hours_required]));
  let overallSeconds = 0;

  if (totals.length === 0) {
    container.innerHTML = '<div class="empty">No shift types configured yet.</div>';
    return;
  }

  for (const t of totals) {
    overallSeconds += t.total_seconds;
    container.appendChild(buildQuotaRow(t.shift_type_name, t.total_seconds, quotaByType.get(t.shift_type_id)));
  }

  const overallQuota = quotaByType.get(null);
  if (overallQuota) {
    const divider = document.createElement("div");
    divider.style.cssText = "border-top: 1px solid var(--hairline); margin: 18px 0 18px;";
    container.appendChild(divider);
    container.appendChild(buildQuotaRow("Overall", overallSeconds, overallQuota, true));
  }
}

function buildQuotaRow(name, seconds, quotaHours, emphasized) {
  const row = document.createElement("div");
  row.className = "quota-row";

  const hours = seconds / 3600;
  const pct = quotaHours ? Math.min(100, (hours / quotaHours) * 100) : 0;
  const met = quotaHours && hours >= quotaHours;

  row.innerHTML = `
    <div class="quota-row-head">
      <span class="name" style="${emphasized ? "font-family: var(--font-display); text-transform: uppercase; letter-spacing: .03em;" : ""}">${name}</span>
      <span class="value">
        ${fmtDuration(seconds)}${quotaHours ? ` / ${quotaHours}h` : ""}
        ${quotaHours ? `<span class="pill ${met ? "good" : "warn"}" style="margin-left:8px;">${met ? "Quota met" : "Below quota"}</span>` : ""}
      </span>
    </div>
    ${quotaHours ? `<div class="bar-track"><div class="bar-fill ${met ? "met" : ""}" style="width:${pct}%"></div></div>` : ""}
  `;
  return row;
}

async function loadHistory() {
  const res = await fetch("/api/history");
  const shifts = await res.json();
  const body = document.getElementById("history-body");
  const empty = document.getElementById("history-empty");
  body.innerHTML = "";

  if (shifts.length === 0) {
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  for (const s of shifts) {
    const tr = document.createElement("tr");
    const started = new Date(s.start_time * 1000);
    tr.innerHTML = `
      <td>${s.shift_type_name}${s.source === "manual" ? '<span class="pill neutral" style="margin-left:8px;">Manual</span>' : ""}</td>
      <td>${started.toLocaleDateString([], { month: "short", day: "numeric" })} · ${started.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</td>
      <td class="mono">${fmtDuration(s.duration_seconds)}</td>
    `;
    body.appendChild(tr);
  }
}

init();
