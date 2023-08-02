/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        beige: {
          50: "#FCF7F3",
          100: "#F8EDE3",
          200: "#F3EDE7",
          300: "#F1DCC7",
          400: "#EACAAC",
          500: "#DBB999",
          600: "#CD9E72",
          700: "#92887f",
          800: "#403d39",
        },
      },
      dropShadow: {
        "3xl": "0 3px 10px rgba(0, 0, 0, 0.10)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
        default: ["var(--font-montserrat)", ...fontFamily.sans],
        p: ["var(--font-montserrat)", ...fontFamily.sans],
        head: ["var(--font-noto-sans)", ...fontFamily.sans],
        base: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      animation: {
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
};
