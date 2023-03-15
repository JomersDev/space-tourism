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
        'tablet-home': "url(/home/background-home-tablet.jpg)",
        'desktop-home': "url(/home/background-home-desktop.jpg)",
        'mobile-destination': "url(/destination/background-destination-mobile.jpg)",
        'tablet-destination': "url(/destination/background-destination-tablet.jpg)",
        'desktop-destination': "url(/destination/background-destination-desktop.jpg)",
      },
      colors: {
        'primary': '#FFFFFF',
        'secondary': "#D0D6F9",
        'dark': '#0B0D17',
        'nav': '#161924'
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
