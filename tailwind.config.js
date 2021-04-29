const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.tsx', './pages/*.tsx', './components/**/*.tsx', './utils/**/*.{ts, tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      height: {
        'player': '30rem'
      },
      colors: {
        "gang-green": "#039c00",
        "cart": "#8c009c",
        "elprimoninja": "#f5e400",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
