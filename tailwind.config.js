/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                'LilitaOne': ['Lilita One', 'cursive'],
                'Oswald': ['Oswald', 'sans-serif'],
            },
            colors: {
                'primary': '#05445E', // Navy Blue
                'secondary': '#189AB4', // Blue Grotto
                'primary-contrast': '#75E6DA', // Blue Green
                'secondary-contrast': '#D4F1F4', // Baby Blue
            }
        }
    },
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    plugins: [
        function ({addComponents}) {
            addComponents({
                '.small-container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '500px',
                    },
                    '@screen md': {
                        maxWidth: '700px',
                    },
                    '@screen lg': {
                        maxWidth: '900px',
                    },
                    '@screen xl': {
                        maxWidth: '1100px',
                    },
                }
            })
        }
    ],
}
