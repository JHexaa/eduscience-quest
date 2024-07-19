/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00C203'
        },
        bgnav:{
          DEFAULT: '#232323'
        }
      }
    },
  },
  plugins: [],
}

