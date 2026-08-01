import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { RESTAURANT } from '../data/content.js';

export default function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="reservations" className="relative py-24 md:py-32 bg-charcoal-950 grain">
      <div className="absolute inset-0 bg-gradient-to-b from-ember-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="uppercase tracking-[0.3em] text-amber-400 text-xs mb-4">Join Us</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream mb-4">
            Reserve Your <span className="text-amber-500">Table</span>
          </h2>
          <p className="text-cream/70 mb-10 max-w-xl mx-auto">
            Book directly below, or reserve through OpenTable. Ordering pickup or delivery?
            Use the button underneath the form.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-charcoal-900 border border-amber-600/40 rounded-sm p-10"
            >
              <p className="font-serif text-2xl text-amber-400 mb-2">Request received!</p>
              <p className="text-cream/70">
                We&rsquo;ll confirm your table by phone or email shortly. Thanks for choosing
                Pelham St. Grill.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid sm:grid-cols-2 gap-4 bg-charcoal-900 border border-charcoal-700/60 rounded-sm p-6 sm:p-8 text-left"
            >
              <Field label="Name" type="text" required />
              <Field label="Phone" type="tel" required />
              <Field label="Date" type="date" required />
              <Field label="Time" type="time" required />
              <div className="sm:col-span-2">
                <Field label="Party Size" type="number" min={1} max={20} defaultValue={2} required />
              </div>
              <button
                type="submit"
                className="sm:col-span-2 mt-2 bg-amber-600 hover:bg-amber-500 text-charcoal-950 font-semibold uppercase tracking-wider py-3.5 rounded-sm transition-colors"
              >
                Request Reservation
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="border border-cream/30 hover:border-amber-400 hover:text-amber-400 text-cream uppercase tracking-wider text-sm px-7 py-3 rounded-sm transition-colors"
          >
            Book via OpenTable
          </a>
          <a
            href="#"
            className="bg-charcoal-800 hover:bg-charcoal-700 text-cream uppercase tracking-wider text-sm px-7 py-3 rounded-sm transition-colors"
          >
            Order Online
          </a>
        </Reveal>

        <p className="text-cream/50 text-sm mt-8">
          Prefer to call? Reach us at{' '}
          <a href={RESTAURANT.phoneHref} className="text-amber-400">
            {RESTAURANT.phone}
          </a>
        </p>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm text-cream/70">
      {label}
      <input
        {...props}
        className="bg-charcoal-950 border border-charcoal-700 focus:border-amber-500 outline-none rounded-sm px-3.5 py-2.5 text-cream placeholder:text-cream/30"
      />
    </label>
  );
}
