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
        primary: "#f00",

        black: {
          DEFAULT: "#000",
          primary: "#f00",
        },

        white: {
          DEFAULT: "#fff",
          primary: "#f8d8d8",
        },
        green: {
          DEFAULT: "#0d831f",
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
