/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        colors: {
            'bprimary': '#004755',
            'fprimary': '#DBE6E9',
            'fsecondary': '#53A7BC',
            'border-primary': '#4B91A1',
            'chip-wizard': '#9C95DC',
            'chip-species': '#C64191',
            'chip-house':'#53A7BC',
            'gradient-start': '#1B1B27',
            'gradient-end': '#132D32',
            'white': '#FFFFFF'
        },
        extend: {
            backgroundImage: {
                'gradient-overlay': 'linear-gradient(180deg, rgba(27, 27, 39, 0) 0%, #132D32 100%)',
            },
            fontFamily: {
                montserratAlt: ['"Montserrat Alternates"', 'sans-serif'],
                montserrat: ['"Montserrat"', 'sans-serif'],
            },
            screens: {
                tablet: "640px",
                desktop: "1024px",
            }
        },
    },
    plugins: [],
}

