/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: '#00C203',
          HOVER: '#1c721c'
        },
        bg: {
          DEFAULT: '#232323'
        }
      }
    },
  },
  plugins: [],
}

