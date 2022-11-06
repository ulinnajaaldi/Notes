/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(51 65 85);",
        secondary: "rgb(226 232 240);",
      },
    },
  },
  plugins: [],
};
