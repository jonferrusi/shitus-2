import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { RESTAURANT } from '../data/content.js';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={RESTAURANT.phoneHref}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 bg-amber-600 hover:bg-amber-500 text-cream font-semibold uppercase tracking-wider text-sm px-6 py-3.5 rounded-full shadow-lg shadow-charcoal-900/20 animate-pulseGlow"
        >
          Call {RESTAURANT.phone}
        </motion.a>
      )}
    </AnimatePresence>
  );
}
