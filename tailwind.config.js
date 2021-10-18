module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '2290px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    }
  },
  variants: {
  },
  plugins: [],
};
