/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'bprimary': '#004755',
      'fprimary':'#DBE6E9',
      'fsecondary':'#53A7BC',
      'border-primary':'#4B91A1',
    },
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

