import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESTAURANT } from '../data/content.js';
import logoWhite from '../assets/photos/logo-white.png';

const LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#location', label: 'Location' },
  { href: '#reservations', label: 'Visit Us' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-charcoal-950/90 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center">
          <img src={logoWhite} alt={RESTAURANT.name} className="h-8 md:h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-sans text-sm uppercase tracking-wider text-cream/80">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-amber-400 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={RESTAURANT.phoneHref}
          className="hidden md:inline-block bg-amber-600 hover:bg-amber-500 text-charcoal-950 font-semibold text-sm uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors"
        >
          Call {RESTAURANT.phone}
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-cream p-2"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="block w-6 h-0.5 bg-cream mb-1.5" />
          <span className="block w-6 h-0.5 bg-cream mb-1.5" />
          <span className="block w-6 h-0.5 bg-cream" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-charcoal-950/95 backdrop-blur-md"
          >
            <div className="flex flex-col px-5 pb-6 pt-2 gap-4 font-sans uppercase tracking-wider text-cream/90">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a
                href={RESTAURANT.phoneHref}
                onClick={() => setMenuOpen(false)}
                className="bg-amber-600 text-charcoal-950 font-semibold text-center px-5 py-3 rounded-sm"
              >
                Call {RESTAURANT.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
