/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brown-primary": "#6e4f37",
        "brown-background": "#a1815e",
        "brown-regular": "#a1815e",
      },
    },
  },
  plugins: [],
};
