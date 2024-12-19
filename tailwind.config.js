/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      "colors": {
        "purple": "rgb(146 109 237)"
      },
      "backgroundImage": {
        "hero-pattern": "url('/img/seongsu-bridge.webp')"
      },
      "boxShadow": {
        violetBlur: "0 0 20px 5px rgb(146 109 237)",
      }
    },
  },
  plugins: [],
};

