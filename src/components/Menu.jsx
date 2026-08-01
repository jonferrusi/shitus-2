import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { CATEGORIES, MENU_ITEMS } from '../data/menu.js';

const FILTERS = ['All', ...CATEGORIES, 'Vegetarian'];

export default function Menu() {
  const [active, setActive] = useState('All');

  const items = useMemo(() => {
    if (active === 'All') return MENU_ITEMS;
    if (active === 'Vegetarian') return MENU_ITEMS.filter((i) => i.tags.includes('Vegetarian'));
    return MENU_ITEMS.filter((i) => i.category === active);
  }, [active]);

  return (
    <section id="menu" className="relative bg-charcoal-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.3em] text-amber-400 text-xs mb-4">The Menu</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream mb-4">
            Straight From the <span className="text-amber-500">Fire</span>
          </h2>
          <p className="text-cream/70">
            A living menu built around seasonal, fire-forward cooking. Prices and dishes shown
            below are illustrative — swap in your own.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wider border transition-colors ${
                active === f
                  ? 'bg-amber-600 border-amber-600 text-charcoal-950 font-semibold'
                  : 'border-cream/25 text-cream/70 hover:border-amber-400 hover:text-amber-400'
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative bg-charcoal-900 rounded-sm overflow-hidden border border-charcoal-700/60"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_50%,rgba(232,137,43,0.25),transparent_70%)]" />
                  {item.tags.includes("Chef's Pick") && (
                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-charcoal-950/80 text-amber-400 border border-amber-500/50 shimmer-text animate-shimmer">
                      Chef&rsquo;s Pick
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3 mb-1.5">
                    <h3 className="font-serif text-lg text-cream">{item.name}</h3>
                    <span className="font-display text-amber-500 text-lg shrink-0">${item.price}</span>
                  </div>
                  <p className="text-sm text-cream/60 leading-relaxed">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="text-center mt-14">
          <a
            href="#"
            className="inline-block border border-cream/30 hover:border-amber-400 hover:text-amber-400 text-cream uppercase tracking-wider text-sm px-7 py-3 rounded-sm transition-colors"
          >
            Download Full PDF Menu
          </a>
        </Reveal>
      </div>
    </section>
  );
}
