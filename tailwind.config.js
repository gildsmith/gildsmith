const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./resources/**/*.{blade.php,js,vue}",
      "./node_modules/@gildsmith/**/*.{blade.php,js,vue}",
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
            'deep': 'rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(0, 0, 0, 0.1) 0px 0px 30px -15px',
        },
    },
  },
  plugins: [],
}

