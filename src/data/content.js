export const RESTAURANT = {
  name: 'Pelham St. Grill',
  tagline: 'Fire. Flavor. Fonthill.',
  phone: '(905) 555-0142',
  phoneHref: 'tel:+19055550142',
  address: '1507 Pelham St, Fonthill, ON L0S 1E3',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=1507+Pelham+St+Fonthill+ON+L0S+1E3',
  appleMapsHref: 'https://maps.apple.com/?q=1507+Pelham+St,+Fonthill,+ON+L0S+1E3',
  mapEmbedSrc:
    'https://www.google.com/maps?q=1507+Pelham+St,+Fonthill,+ON+L0S+1E3&output=embed',
};

// 0 = Sunday .. 6 = Saturday. `close` of 24 means "midnight".
export const HOURS = [
  { day: 'Sunday', open: 11, close: 21 },
  { day: 'Monday', open: null, close: null },
  { day: 'Tuesday', open: 16, close: 22 },
  { day: 'Wednesday', open: 16, close: 22 },
  { day: 'Thursday', open: 16, close: 22 },
  { day: 'Friday', open: 11, close: 23 },
  { day: 'Saturday', open: 11, close: 23 },
];

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=70',
    alt: 'Steak searing over open flame',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=70',
    alt: 'Plated ribeye with charred vegetables',
  },
  {
    src: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=900&q=70',
    alt: 'Warm dining room interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=70',
    alt: 'Grilled burger close up',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=70',
    alt: 'Chef plating a dish',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=70',
    alt: 'Cocktails on the bar',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=70',
    alt: 'Restaurant exterior at dusk',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=900&q=70',
    alt: 'Dessert plate with torched sugar',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Jordan M.',
    rating: 5,
    quote:
      'The ribeye was cooked exactly to temp and the smoke flavor was incredible. Best steak I’ve had in the Niagara region.',
  },
  {
    name: 'Priya S.',
    rating: 5,
    quote:
      'Cozy but still feels upscale. The smoked old fashioned alone is worth the drive to Fonthill.',
  },
  {
    name: 'Dave K.',
    rating: 4,
    quote: 'Great BBQ chicken, generous portions, and the staff remembered our anniversary booking.',
  },
  {
    name: 'Alicia R.',
    rating: 5,
    quote: 'The charred corn elote might be the best appetizer I’ve had all year. Can’t wait to go back.',
  },
];

export const CHEF_STATS = [
  { label: 'Years Open', value: 8 },
  { label: 'Dishes Served', value: 240000, suffix: '+' },
  { label: 'Hand-Cut Steaks Weekly', value: 500, suffix: '+' },
  { label: 'Local Farm Partners', value: 12 },
];
