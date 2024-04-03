/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Poppins']
    },
    extend: {
      fontSize: {
        'sm': '0.5rem'
      }
    },
  },
  plugins: [],
}