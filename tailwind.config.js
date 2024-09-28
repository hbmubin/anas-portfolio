/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nameFont: ["Gowun Batang", "serif"],
        pageFont: ["Lato", "sans-serif"],
        logoFont: ["Anton", "sans-serif"],
      },
      colors: {
        bodyBlack: "#292e33",
        bodyGray: "#d8ccbe",
        textGray: "#8e7e6e",
        textBlack: "#111111",
      },
    },
  },
  plugins: [],
};
