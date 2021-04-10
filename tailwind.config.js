const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
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
