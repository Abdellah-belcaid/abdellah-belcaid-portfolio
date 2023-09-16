/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.4) 1px, #131424 6px, #131424 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.4) 1px, #131424 6px, #131424 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.4) 1px, #131424 6px, #131424 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.4) 1px, #131424 6px, #131424 40px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        border: "border 4s ease infinite",
      },
      keyframes: {
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
    colors: {
      ...colors,
      primary: "#131424",
      secondary: "#393A47",
      accent: "#F13024",
      // Update the color names
      neutral: colors.trueGray, // trueGray renamed to neutral
      gray: colors.coolGray, // coolGray renamed to gray
      slate: colors.blueGray, // blueGray renamed to slate
    },
  },
  plugins: [],
};
