/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0d0a08',
          900: '#151110',
          800: '#1f1917',
          700: '#2b2320',
        },
        amber: {
          400: '#f5a742',
          500: '#e8892b',
          600: '#c96a1a',
        },
        ember: {
          500: '#c4361f',
          600: '#a02615',
        },
        cream: '#f4ead9',
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Oswald"', 'ui-serif', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        ember: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(-110vh) translateX(var(--drift, 20px))', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(232,137,43,0.55)' },
          '50%': { boxShadow: '0 0 0 14px rgba(232,137,43,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        sear: {
          '0%': { opacity: '0', letterSpacing: '0.3em', filter: 'blur(6px)' },
          '100%': { opacity: '1', letterSpacing: '0.02em', filter: 'blur(0)' },
        },
        bounceSm: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        ember: 'ember linear infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        sear: 'sear 1.2s ease-out forwards',
        bounceSm: 'bounceSm 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
