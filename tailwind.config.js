const defaultTheme = require('tailwindcss/defaultTheme')
const colors = 'tailwindcss/colors.js'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.{blade.php,js,vue}',
        './node_modules/@gildsmith/**/*.{blade.php,js,vue}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['"Figtree"', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                base: ['18px', '150%'],
            },
            boxShadow: {
                'flat': 'rgba(50, 50, 93, 0.05) 0px 13px 25px -10px, rgba(0, 0, 0, 0.05) 0px 7px 15px -7px, rgba(0, 0, 0, 0.05) 0px 0px 7px -5px',
                'shallow': 'rgba(50, 50, 93, 0.075) 0px 25px 50px -10px, rgba(0, 0, 0, 0.075) 0px 15px 30px -15px, rgba(0, 0, 0, 0.075) 0px 0px 15px -10px',
                'deep': 'rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(0, 0, 0, 0.1) 0px 0px 30px -15px',
            },
            colors: {
                primary: colors.emerald,
                secondary: colors.amber,
            },
        },
    },
    plugins: [],
}

