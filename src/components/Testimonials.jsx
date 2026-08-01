import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { TESTIMONIALS } from '../data/content.js';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative bg-white py-24 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_50%_0%,#e8892b,transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="uppercase tracking-[0.3em] text-amber-600 text-xs mb-8">What Guests Say</p>
        </Reveal>

        <div className="min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    className={i < t.rating ? 'text-amber-500' : 'text-charcoal-200'}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="font-serif italic text-xl sm:text-2xl text-charcoal-800 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-amber-700 uppercase tracking-wider text-sm">{t.name}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-amber-500' : 'w-1.5 bg-charcoal-200 hover:bg-charcoal-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
