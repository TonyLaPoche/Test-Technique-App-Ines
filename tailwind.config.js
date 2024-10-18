/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat Alternates"', 'sans-serif'],
      },
      screens: {
        tablet: "640px",
      }
    },
  },
  plugins: [],
}

