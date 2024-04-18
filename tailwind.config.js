/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#161622",
        secondary: "#FFA300",
      },
      textColor: {
        secondary: "#FF8E01",
        primary: "#161622",
      },
    },
  },
  plugins: [],
};
