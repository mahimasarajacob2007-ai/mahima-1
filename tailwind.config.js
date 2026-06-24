export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        violetDeep: '#000000',
        royalPurple: '#6f2dbd',
        indigoInk: '#25245f',
        lavenderMist: '#e5d4ff',
        goldMetal: '#00e5ff',
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 229, 255, 0.22)',
        glass: '0 24px 80px rgba(10, 5, 30, 0.38)',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
