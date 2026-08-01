import { motion } from 'framer-motion';
import EmberParticles from './EmberParticles.jsx';
import { RESTAURANT } from '../data/content.js';

const letters = RESTAURANT.name.split('');

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1800&q=75')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/60 to-charcoal-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-ember-600/10 via-transparent to-transparent" />

      <EmberParticles />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="uppercase tracking-[0.35em] text-amber-400 text-xs sm:text-sm mb-4"
        >
          Grill &middot; Fire &middot; Fonthill
        </motion.p>

        <h1 className="font-display flex flex-wrap justify-center text-6xl sm:text-7xl md:text-8xl text-cream leading-none">
          {letters.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.05 * i, duration: 0.6, ease: 'easeOut' }}
              className={ch === ' ' ? 'w-4 sm:w-6' : ''}
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-5 font-serif italic text-xl sm:text-2xl text-amber-200/90"
        >
          {RESTAURANT.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-9 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#reservations"
            className="bg-amber-600 hover:bg-amber-500 text-charcoal-950 font-semibold uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors animate-pulseGlow"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="border border-cream/40 hover:border-amber-400 hover:text-amber-400 text-cream uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors"
          >
            View Menu
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/70 hover:text-amber-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 4v16m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  );
}
