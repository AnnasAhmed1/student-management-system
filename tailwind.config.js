/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        color1: '#f8f8f8', // gray
        color2: '#FFFFFF', // white
        color3: '#0000ff', // Blue
        hovcolor1:'#d4d6db',
        colorNav:'#1d2733',
        textcol: '#000000', // black
        textcol1: '#e54e50', // red
        textcol2: '#ad6555', //brown
        focuscol:'#c9ead7'
      },
    },
  },
  plugins: [],
}