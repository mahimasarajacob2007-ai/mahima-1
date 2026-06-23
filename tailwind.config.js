export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        violetDeep: '#190a34',
        royalPurple: '#6f2dbd',
        indigoInk: '#25245f',
        lavenderMist: '#e5d4ff',
        goldMetal: '#d9ad4f',
      },
      boxShadow: {
        glow: '0 0 40px rgba(217, 173, 79, 0.22)',
        glass: '0 24px 80px rgba(10, 5, 30, 0.38)',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
