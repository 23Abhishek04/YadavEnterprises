/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E7452C', // Add your custom color here
      },
      fontFamily: {
        maratSmallCaps: [
          '"CarroisGothicSC-Regular"',
          'sans-serif',
          'Marat Sans Medium Small Caps',
        ], // Custom font
      },
      keyframes: {
        popPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        mergefade: {
          '0%, 70%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(-60%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        popPulse: 'popPulse 1s ease-in-out infinite',
        mergeFade: 'mergefade 1s ease-in-out 1.2s forwards',
        slideInRight: 'slideInRight 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
