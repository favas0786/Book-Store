/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primery':'#FFCE1A',
        'secondary':'#0d0842',
        'blackBG':'#f3f3f3',
        'Favorite':'#ff5841'
      },
      fontFamily:{
        'primery':["Montserrat", "sans-serif"],
        'secondary':["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

