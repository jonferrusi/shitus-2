import Reveal from './Reveal.jsx';
import { HIGHLIGHTS, PHOTOS } from '../data/content.js';

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <img
            src={PHOTOS.meal}
            alt="Classic breakfast plate at The Pelham Street Grille"
            className="rounded-sm shadow-lg shadow-charcoal-900/10 w-full h-[420px] object-cover"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="uppercase tracking-[0.3em] text-amber-600 text-xs mb-4">Our Story</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-6 text-charcoal-900">
            A Little Taste of <span className="text-amber-600">Home</span>
          </h2>
          <p className="text-charcoal-700 leading-relaxed mb-4">
            We're a family owned and operated restaurant in downtown Fonthill, and we take pride
            in everything we cook and serve. Our award-winning breakfasts and lunches are made to
            order, from scratch, the way home cooking should be.
          </p>
          <p className="text-charcoal-700 leading-relaxed mb-10">
            Our all-day breakfast is a favourite with locals and anyone passing through. Come in,
            relax, and enjoy!
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="border-l-2 border-amber-500 pl-4">
                <p className="font-serif text-charcoal-900 text-base">{h.label}</p>
                <p className="text-sm text-charcoal-600 mt-1 leading-relaxed">{h.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
