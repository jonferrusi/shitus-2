import heroInterior from '../assets/photos/hero-homepage.jpg';
import meal from '../assets/photos/meal.jpg';
import eggsBenedict from '../assets/photos/breakfast.jpg';
import perogies from '../assets/photos/dinner.jpg';
import fishAndChips from '../assets/photos/fish-and-chips.jpg';
import chickenWrap from '../assets/photos/lunch.jpg';
import burgerAndFries from '../assets/photos/dinner-plate.jpg';
import omeletPlate from '../assets/photos/breakfast-alt.jpg';

export const PHOTOS = {
  heroInterior,
  meal,
  eggsBenedict,
  perogies,
  fishAndChips,
  chickenWrap,
  burgerAndFries,
  omeletPlate,
};

export const RESTAURANT = {
  name: 'The Pelham Street Grille',
  shortName: 'Pelham Street Grille',
  tagline: 'A Little Taste of Home',
  phone: '(289) 897-9191',
  phoneHref: 'tel:+12898979191',
  email: 'pelhamstreetgrille@gmail.com',
  address: '1507 Pelham Street, Fonthill, ON L0S 1E0',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=1507+Pelham+Street+Fonthill+ON+L0S+1E0',
  appleMapsHref: 'https://maps.apple.com/?q=1507+Pelham+Street,+Fonthill,+ON+L0S+1E0',
  mapEmbedSrc:
    'https://www.google.com/maps?q=1507+Pelham+Street,+Fonthill,+ON+L0S+1E0&output=embed',
};

// 0 = Sunday .. 6 = Saturday. Each day has one or more [open, close] ranges
// in 24h decimal hours; an empty array means closed.
export const HOURS = [
  { day: 'Sunday', ranges: [[8, 15]] },
  { day: 'Monday', ranges: [[8, 15]] },
  { day: 'Tuesday', ranges: [[8, 15]] },
  { day: 'Wednesday', ranges: [[8, 15]] },
  { day: 'Thursday', ranges: [[8, 15]] },
  { day: 'Friday', ranges: [[8, 15], [16.5, 20]] },
  { day: 'Saturday', ranges: [[8, 15]] },
];

export const GALLERY_IMAGES = [
  {
    src: heroInterior,
    alt: 'Warm, cozy dining room at The Pelham Street Grille',
    tall: true,
  },
  {
    src: meal,
    alt: 'Classic breakfast plate: two eggs, bacon, home fries, toast and fresh fruit',
  },
  {
    src: eggsBenedict,
    alt: 'Eggs Benedict with home fries and a fresh orange slice',
  },
  {
    src: perogies,
    alt: 'Loaded homemade perogies with bacon, peppers and a side salad',
    tall: true,
  },
  {
    src: fishAndChips,
    alt: 'Friday Fish & Chips with coleslaw and tartar sauce',
  },
  {
    src: chickenWrap,
    alt: 'Chicken Caesar Wrap with a side garden salad',
    tall: true,
  },
  {
    src: burgerAndFries,
    alt: 'Banquet Burger with bacon and cheddar, served with fries',
  },
  {
    src: omeletPlate,
    alt: 'Omelet with home fries, toast and a fresh orange slice',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Local Regular',
    rating: 5,
    quote:
      'Feels like eating at grandma’s table. The all-day breakfast is the real deal and the staff remember your order.',
  },
  {
    name: 'Sunday Regular',
    rating: 5,
    quote:
      'Best Eggs Benedict in Niagara, hands down. Portions are huge and everything tastes homemade.',
  },
  {
    name: 'Friday Regular',
    rating: 5,
    quote: 'We plan our Fridays around their fish & chips. Fresh haddock, crispy batter, never greasy.',
  },
  {
    name: 'Prime Rib Night Regular',
    rating: 5,
    quote:
      'The last-Saturday prime rib dinner is a Fonthill tradition for our family now. Book early, it fills up.',
  },
];

export const HIGHLIGHTS = [
  { label: 'Family Owned & Operated', detail: 'Serving downtown Fonthill for years, one home-cooked plate at a time.' },
  { label: 'All-Day Breakfast', detail: 'A local favourite — breakfast served every day we’re open, 8AM to 3PM.' },
  { label: 'Vegan Menu Available', detail: 'Dedicated vegan breakfast and lunch options, not an afterthought.' },
  { label: 'Prime Rib Night', detail: 'The last Saturday of every month. Reservations required — it fills up fast.' },
];
