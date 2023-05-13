/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu'],
        inter: ['Inter'],
        heebo: ['Heebo']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

