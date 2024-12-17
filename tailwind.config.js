/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg-image.jpeg')",
        heroMobile: "url('/bg-image-mobile.jpeg')",
        gradient: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      },
      boxShadow: {
        heroBoxShadow:
          "inset 0 -100px 50px -30px rgba(0, 0, 0, 0.6),inset 0 100px 50px -30px rgba(0, 0, 0, 0.6)",
        projectCardShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      },
      textShadow: {
        sm: "0 1px 2px #000000",
        DEFAULT: "0 2px 4px #000000",
        lg: "0 0 16px #000000",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
