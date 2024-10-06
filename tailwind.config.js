/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#036AE6", // Your desired color hex code
        black: "#000000",
      },
      screens: {
        mf: "1200px",
      },
    },
  },
  plugins: [],
};
