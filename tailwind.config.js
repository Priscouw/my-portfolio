/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      "colors": {
        "purple": "rgb(130,87,234)"
      },
      "backgroundImage": {
        "hero-pattern": "url('/img/seongsu-bridge.webp')"
      },
    },
  },
  plugins: [],
};

