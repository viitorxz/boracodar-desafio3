/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#130F1E',
      },
      fontFamily: {
        'default': 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
