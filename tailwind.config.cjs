/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-home': "url(/home/background-home-mobile.jpg)",
        'mobile-tablet': "url(/home/background-home-tablet.jpg)",
        'mobile-desktop': "url(/home/background-home-desktop.jpg)",
      },
      colors: {
        'primary': '#FFFFFF',
        'secondary': "#D0D6F9",
        'dark': '#0B0D17',
        'gray': '#979797'
      },
      fontFamily: {
        'barlow-condensed' : ['Barlow Condensed', 'sans-serif'],
        'barlow' : ['Barlow', 'sans-serif'],
        'bellefair' : ['Bellefair', 'serif']
      }
    },
  },
  plugins: [],
}
