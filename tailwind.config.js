export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        violetDeep: '#000000',
        royalPurple: '#9333EA',
        indigoInk: '#7E22CE',
        lavenderMist: '#C084FC',
        goldMetal: '#A855F7',
      },
      boxShadow: {
        glow: '0 0 40px rgba(168, 85, 247, 0.34)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.62)',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
