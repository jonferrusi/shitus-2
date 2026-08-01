import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { GALLERY_IMAGES } from '../data/content.js';

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % GALLERY_IMAGES.length)),
    []
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex, close, next, prev]);

  return (
    <section id="gallery" className="relative bg-charcoal-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.3em] text-amber-400 text-xs mb-4">Gallery</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream">
            A Taste of the <span className="text-amber-500">Room</span>
          </h2>
        </Reveal>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05} className="break-inside-avoid">
              <button
                onClick={() => setOpenIndex(i)}
                className={`group relative block w-full overflow-hidden rounded-sm ${
                  img.tall ? 'h-80' : 'h-56'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-cream text-sm">{img.alt}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-charcoal-950/95 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={close}
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 text-cream/80 hover:text-amber-400 text-3xl leading-none"
              onClick={close}
            >
              &times;
            </button>
            <button
              aria-label="Previous"
              className="absolute left-3 sm:left-8 text-cream/70 hover:text-amber-400 text-4xl"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              &#8249;
            </button>
            <button
              aria-label="Next"
              className="absolute right-3 sm:right-8 text-cream/70 hover:text-amber-400 text-4xl"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              &#8250;
            </button>

            <motion.img
              key={openIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              src={GALLERY_IMAGES[openIndex].src}
              alt={GALLERY_IMAGES[openIndex].alt}
              className="max-h-[85vh] max-w-full rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
