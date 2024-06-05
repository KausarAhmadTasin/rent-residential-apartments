/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { "dm-serif": ["DM Serif Display", "serif"] },
    },
  },
  plugins: [require("daisyui")],
};
