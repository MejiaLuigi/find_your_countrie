module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-base-light',
    'bg-base-dark',
    'text-text-light',
    'text-text-dark',
    'bg-element-light',
    'bg-element-dark',
    'text-muted',
  ],
  theme: {
    extend: {
      colors: {
        'base-light': '#fafafa',
        'base-dark': '#202c37ff',       // #ff0000 rojo test
        'element-light': '#ffffff',
        'element-dark': '#2b3945',
        'text-light': '#111517',
        'text-dark': '#ffffff',
        'muted': '#858585',
      },
    },
  },
  plugins: [],
};
