/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      backgroundImage: {
        mainbg: "url('../public/images/mainbg.png')",
      },
    },
  },
  daisyui: {
    themes: ["corporate"],
  },
};
