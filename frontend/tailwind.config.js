/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brown-dark": "#a4835c",
        "brown-light": "#b37a68",
        "brown-bold": "#b37a68",
      },
    },
  },
  plugins: [],
};
