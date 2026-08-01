import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { RESTAURANT, HOURS } from '../data/content.js';

function getEasternNow() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Toronto',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(new Date());

  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  const weekdayIndex = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(map.weekday);
  return { day: weekdayIndex, hour: Number(map.hour), minute: Number(map.minute) };
}

function formatHour(h) {
  const wholeHour = Math.floor(h);
  const hour12 = wholeHour % 12 === 0 ? 12 : wholeHour % 12;
  const suffix = wholeHour >= 12 ? 'PM' : 'AM';
  const minutes = h % 1 === 0.5 ? ':30' : '';
  return `${hour12}${minutes}${suffix}`;
}

function useOpenStatus() {
  const [status, setStatus] = useState(() => computeStatus());

  function computeStatus() {
    const { day, hour, minute } = getEasternNow();
    const decimalHour = hour + minute / 60;
    const today = HOURS[day];

    const openRange = today.ranges.find((r) => decimalHour >= r[0] && decimalHour < r[1]);
    if (openRange) {
      return { open: true, label: `Open until ${formatHour(openRange[1])}` };
    }
    return { open: false, label: nextOpenLabel(day, decimalHour) };
  }

  function nextOpenLabel(day, decimalHour) {
    for (let offset = 0; offset < 8; offset++) {
      const idx = (day + offset) % 7;
      const entry = HOURS[idx];
      const upcoming = entry.ranges.find((r) => offset > 0 || decimalHour < r[0]);
      if (!upcoming) continue;
      if (offset === 0) return `Opens today at ${formatHour(upcoming[0])}`;
      if (offset === 1) return `Opens tomorrow at ${formatHour(upcoming[0])}`;
      return `Opens ${entry.day} at ${formatHour(upcoming[0])}`;
    }
    return 'Closed';
  }

  useEffect(() => {
    const id = setInterval(() => setStatus(computeStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}

export default function Location() {
  const status = useOpenStatus();

  return (
    <section id="location" className="relative bg-charcoal-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
        <Reveal>
          <p className="uppercase tracking-[0.3em] text-amber-400 text-xs mb-4">Find Us</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream mb-6">
            Visit <span className="text-amber-500">Fonthill</span>
          </h2>

          <div className="flex items-center gap-3 mb-8">
            <span
              className={`inline-flex h-2.5 w-2.5 rounded-full ${
                status.open ? 'bg-green-500 animate-pulse' : 'bg-ember-500'
              }`}
            />
            <span className={`font-semibold uppercase tracking-wide text-sm ${status.open ? 'text-green-400' : 'text-ember-500'}`}>
              {status.open ? "We're open now" : "We're closed"}
            </span>
            <span className="text-cream/60 text-sm">&middot; {status.label}</span>
          </div>

          <div className="space-y-5 mb-10">
            <a
              href={RESTAURANT.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 text-cream/80 hover:text-amber-400 transition-colors group"
            >
              <PinIcon />
              <span>
                {RESTAURANT.address}
                <span className="block text-xs text-cream/50 group-hover:text-amber-400/80 mt-0.5">
                  Tap for directions (Google or Apple Maps)
                </span>
              </span>
            </a>
            <a
              href={RESTAURANT.phoneHref}
              className="flex items-center gap-3 text-cream/80 hover:text-amber-400 transition-colors"
            >
              <PhoneIcon />
              {RESTAURANT.phone}
            </a>
            <a
              href={`mailto:${RESTAURANT.email}`}
              className="flex items-center gap-3 text-cream/80 hover:text-amber-400 transition-colors"
            >
              <MailIcon />
              {RESTAURANT.email}
            </a>
          </div>

          <table className="w-full text-sm">
            <tbody>
              {HOURS.map((h) => (
                <tr key={h.day} className="border-b border-charcoal-700/60 last:border-0">
                  <td className="py-2.5 text-cream/70 align-top">{h.day}</td>
                  <td className="py-2.5 text-right text-cream/90">
                    {h.ranges.length === 0
                      ? 'Closed'
                      : h.ranges.map((r) => `${formatHour(r[0])} – ${formatHour(r[1])}`).join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-cream/40 mt-4">
            Friday evenings: Fish &amp; Chips, dine-in and take-out, 4:30PM – 8PM.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative h-[420px] lg:h-[560px] rounded-sm overflow-hidden border border-charcoal-700/60">
            <iframe
              title="The Pelham Street Grille location map"
              src={RESTAURANT.mapEmbedSrc}
              className="absolute inset-0 h-full w-full grayscale-[0.3] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.3 }}
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full"
            >
              <PinIcon large />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PinIcon({ large = false }) {
  const size = large ? 44 : 20;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 text-amber-500 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
    >
      <path
        fill="currentColor"
        d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 text-amber-500">
      <path
        fill="currentColor"
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 text-amber-500">
      <path
        stroke="currentColor"
        strokeWidth="1.8"
        d="M4 6h16v12H4V6Z"
      />
      <path stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
    </svg>
  );
}
