/** @type {import('tailwindcss').Config} */
// const colors = require("./constants/Colors");
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,ts,tsx}",
    "./components/**/*.{ts,tsx,ts,tsx}",
    "./pages/**/*.{ts,tsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
        },
        white: {
          DEFAULT: "#fff",
          primary: "#f8f8f8",
          secondary: "#e8e8e8",
          placeholder: "#999999",
        },
        green: {
          DEFAULT: "#0d831f",
          primary: "#0C831F",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
      fontSize: {
        "text-xs": "12px",
      },
    },
  },
  plugins: [],
};
