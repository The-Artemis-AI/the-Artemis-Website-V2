/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blacky:"#262626"
      },
      screens:{
        phones:"450px",
        bigphone:"650px",
        tablet:"860px"
      }
    },
  },
  plugins: [],
}

