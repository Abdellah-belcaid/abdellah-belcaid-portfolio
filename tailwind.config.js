/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Dark Mode
        circularDark:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.4) 1px, #131424 6px, #131424 100px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.4) 1px, #131424 6px, #131424 80px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.4) 1px, #131424 6px, #131424 60px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(255, 255, 255, 0.4) 1px, #131424 6px, #131424 40px)",

        // Light Mode
        circularLight:
          "repeating-radial-gradient(rgba(0, 0, 0, 1) 1px, hsl(198, 15%, 67%) 6px, hsl(198, 15%, 67%) 100px)",
        circularLightLg:
          "repeating-radial-gradient(rgba(0, 0, 0, 1) 1px, hsl(198, 15%, 67%) 6px, hsl(198, 15%, 67%) 80px)",
        circularLightMd:
          "repeating-radial-gradient(rgba(0, 0, 0, 1) 1px, hsl(198, 15%, 67%) 6px, hsl(198, 15%, 67%) 60px)",
        circularLightSm:
          "repeating-radial-gradient(rgba(0, 0, 0, 1) 1px, hsl(198, 15%, 67%) 6px, hsl(198, 15%, 67%) 40px)",

        // Other gradients
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
      colors: {        
        DarkModeCol: "#131424",
        LightModeCol: "hsl(198, 15%, 67%)",
        content: "hsl(210 40% 98%)",
        primary: "#131424",
        secondary: "#393A47",
        accent: "#F13024",       
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: "class",
};
