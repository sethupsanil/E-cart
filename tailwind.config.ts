/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,ts,tsx}",
    "./components/**/*.{ts,tsx,ts,tsx}",
    "./pages/**/*.{ts,tsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
          200: "#f00",
        },
        white: {
          100: "#fff",
          200: "#e6e6e6",
          300: "#cccccc",
          400: "#b3b3b3",
          500: "#999999",
          600: "#808080",
          700: "#666666",
          800: "#4c4c4c",
        },
        green: {
          100: "#0d831f",
          200: "rgb(49, 134, 22)",
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
