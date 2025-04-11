/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        purple: {
          600: '#7c4dff',
          500: '#9876ff',
          400: '#b399ff',
          300: '#d1bfff'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}