/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "new-dark-grey": '#333333',
        'new-light-grey': '#808080',
        'new-yellow': '#FFB612',
        'new-red': '#dc0a17',
        'new-green': '#2FC022'
      }
    },
  },
  plugins: [],
}