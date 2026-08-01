import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESTAURANT } from '../data/content.js';

const SOCIALS = [
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'Facebook', href: '#', icon: FacebookIcon },
  { label: 'TikTok', href: '#', icon: TiktokIcon },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  }

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-2xl text-cream mb-3">
            Pelham St. <span className="text-amber-500">Grill</span>
          </p>
          <p className="text-cream/60 text-sm leading-relaxed mb-5">{RESTAURANT.address}</p>
          <div className="flex gap-4">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                className="h-10 w-10 flex items-center justify-center rounded-full border border-charcoal-700 text-cream/70 hover:text-amber-400 hover:border-amber-500 transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <p className="uppercase tracking-wider text-sm text-cream/80 mb-4">Quick Links</p>
          <ul className="space-y-2 text-cream/60 text-sm">
            {['Menu', 'About', 'Gallery', 'Location', 'Reservations'].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-amber-400 transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="uppercase tracking-wider text-sm text-cream/80 mb-4">Stay in the Loop</p>
          <p className="text-cream/60 text-sm mb-4">
            Specials, events, and new menu drops — straight to your inbox.
          </p>
          <AnimatePresence mode="wait">
            {subscribed ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-amber-400 text-sm"
              >
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.path
                    d="M4 12.5l5 5L20 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.svg>
                You&rsquo;re on the list!
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex gap-2"
                exit={{ opacity: 0 }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 min-w-0 bg-charcoal-900 border border-charcoal-700 focus:border-amber-500 outline-none rounded-sm px-3.5 py-2.5 text-sm text-cream placeholder:text-cream/30"
                />
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-500 text-charcoal-950 font-semibold text-sm px-4 rounded-sm transition-colors shrink-0"
                >
                  Join
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-charcoal-800 text-center text-xs text-cream/40">
        &copy; {new Date().getFullYear()} Pelham St. Grill. All rights reserved.
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.65 15.4 3.5 14.25 3.5c-2.4 0-4.05 1.45-4.05 4.15V9.9H7.5V13h2.7v8Z" />
    </svg>
  );
}
function TiktokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.5 2h2.6c.2 1.5 1.2 3 2.9 3.4v2.7c-1.2 0-2.3-.35-3.2-1v6.8a5.1 5.1 0 1 1-4.4-5v2.7a2.4 2.4 0 1 0 2.1 2.4V2Z" />
    </svg>
  );
}
