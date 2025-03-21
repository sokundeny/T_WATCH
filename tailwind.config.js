/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "black",
      },
      backgroundColor:{
        primary: "white",
        secondary: "#EDEDED",
      },
    },
  },
  plugins: [],
}
