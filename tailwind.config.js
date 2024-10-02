/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
