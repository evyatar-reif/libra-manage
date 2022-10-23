/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#283618",
        secondaryGreen: "#606C38",
        white: "#FEFAE0",
        primaryOrange: "#BC6C25",
        secondaryOrange: "#DDA15E",
        error: "#df4759",
        success: "#42ba96",
        lightRed: "#FFCCCB",
        lightGreen: "#90EE90.",
      },
    },
  },
  plugins: [],
};
