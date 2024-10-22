/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        customTeal: '#0FB3BD',
        customBlue: '#1B5AA9',
        customGreen: '#B8D033'
      }
    },
  },
  plugins: [],
}
