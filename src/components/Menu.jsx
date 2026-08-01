import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { CATEGORIES, MENU_ITEMS } from '../data/menu.js';
import { RESTAURANT } from '../data/content.js';

export default function Menu() {
  const [active, setActive] = useState('Breakfast');

  const items = useMemo(() => MENU_ITEMS.filter((i) => i.category === active), [active]);

  return (
    <section id="menu" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.3em] text-amber-600 text-xs mb-4">The Menu</p>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal-900 mb-4">
            Home-Cooked, <span className="text-amber-600">Every Day</span>
          </h2>
          <p className="text-charcoal-600">
            Breakfast served all day, every day. Full menu below — ask your server about daily
            specials.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wider border transition-colors ${
                active === c
                  ? 'bg-amber-600 border-amber-600 text-cream font-semibold'
                  : 'border-charcoal-300 text-charcoal-600 hover:border-amber-500 hover:text-amber-700'
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="border-b border-charcoal-200 pb-4"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-lg text-charcoal-900">{item.name}</h3>
                  <span className="font-display text-amber-700 text-base shrink-0 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                {item.description && (
                  <p className="text-sm text-charcoal-600 leading-relaxed mt-1">{item.description}</p>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="text-center mt-14">
          <p className="text-charcoal-500 text-sm mb-4">
            Dine-in &amp; take-out. Prices subject to change without notice.
          </p>
          <a
            href={RESTAURANT.phoneHref}
            className="inline-block border border-charcoal-300 hover:border-amber-500 hover:text-amber-700 text-charcoal-800 uppercase tracking-wider text-sm px-7 py-3 rounded-sm transition-colors"
          >
            Call to Order Ahead
          </a>
        </Reveal>
      </div>
    </section>
  );
}
