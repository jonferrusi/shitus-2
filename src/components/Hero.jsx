import { motion } from 'framer-motion';
import EmberParticles from './EmberParticles.jsx';
import { RESTAURANT, PHOTOS } from '../data/content.js';

const words = RESTAURANT.shortName.split(' ');

export default function Hero() {
  let letterIndex = 0;

  return (
    <section id="top" className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${PHOTOS.heroInterior})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-cream/30 to-cream" />
      <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent" />

      <EmberParticles />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <div className="max-w-2xl bg-cream/80 backdrop-blur-md rounded-lg px-6 py-10 sm:px-12 sm:py-12 shadow-xl shadow-charcoal-900/10 border border-white/60">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="uppercase tracking-[0.35em] text-amber-700 text-xs sm:text-sm mb-4"
          >
            Family Owned &middot; Downtown Fonthill
          </motion.p>

          <h1 className="font-display flex flex-wrap justify-center gap-x-4 text-5xl sm:text-7xl md:text-8xl text-charcoal-900 leading-none">
            {words.map((word, wi) => (
              <span key={wi} className="inline-flex whitespace-nowrap">
                {word.split('').map((ch) => {
                  const i = letterIndex++;
                  return (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ delay: 0.04 * i, duration: 0.6, ease: 'easeOut' }}
                    >
                      {ch}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-5 font-serif italic text-xl sm:text-2xl text-amber-700"
          >
            {RESTAURANT.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-3 text-charcoal-700 max-w-md mx-auto"
          >
            Home-cooked breakfast &amp; lunch, served all day, every day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-9 flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#menu"
              className="bg-amber-600 hover:bg-amber-500 text-cream font-semibold uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors animate-pulseGlow"
            >
              View Menu
            </a>
            <a
              href={RESTAURANT.phoneHref}
              className="border border-charcoal-300 hover:border-amber-500 hover:text-amber-700 text-charcoal-800 uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors"
            >
              Call {RESTAURANT.phone}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-charcoal-600 hover:text-amber-600"
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
