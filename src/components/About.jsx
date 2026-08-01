import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { CHEF_STATS } from '../data/content.js';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-charcoal-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=75"
            alt="Pelham St. Grill dining room"
            className="rounded-sm shadow-2xl shadow-black/50 w-full h-[420px] object-cover"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="uppercase tracking-[0.3em] text-amber-400 text-xs mb-4">Our Story</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-6 text-cream">
            Open Flame, <span className="text-amber-500">Honest Food</span>
          </h2>
          <p className="text-cream/75 leading-relaxed mb-4">
            Pelham St. Grill opened its doors in Fonthill with one idea: cook everything the way
            it's meant to be cooked — over real fire. Our chefs hand-select cuts, char vegetables
            until they blister, and build a menu around what the grill does best.
          </p>
          <p className="text-cream/75 leading-relaxed mb-10">
            From weeknight dinners to celebrations, the room is built to feel like your kitchen —
            just with better smoke.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {CHEF_STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl text-amber-500">
                  <Counter value={s.value} suffix={s.suffix ?? ''} />
                </p>
                <p className="text-sm text-cream/60 uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
