/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Mooli', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'card-bg': "url('/T_G Logo white.png')",
      },
    },
  },
  plugins: [],
})
