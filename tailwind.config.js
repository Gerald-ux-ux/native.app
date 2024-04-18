/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#161622",
        secondary: "#FFA300",
        input: "#1E1E2D",
      },
      textColor: {
        secondary: "#FF8E01",
        primary: "#161622",
      },
      borderColor: {
        primary: "#161622",
        secondary: "#FFA300",
        input: "#232533",
      },
    },
  },
  plugins: [],
};
