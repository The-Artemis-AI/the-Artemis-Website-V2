/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/404.html",
  ],
  theme: {
    extend: {
      colors:{
        blacky:"#262626"
      },
      screens:{
        phone:"450px",
        bigphone:"650px",
        tablet:"860px"
      }
    },
  },
  plugins: [],
}

