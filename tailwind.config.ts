/** @type {import('tailwindcss').Config} */
const colors = require("./constants/Colors");
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
          DEFAULT: colors.black,
        },
        white: {
          DEFAULT: colors.white,
          primary: colors.whitePrimary,
          secondary: colors.whiteSecondary,
        },
        green: {
          DEFAULT: colors.green,
          primary: colors.greenPrimary,
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
