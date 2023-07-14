/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        xl: "0rem",
      },
      center: true,
      screens: {
        default: "100%",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "11400px",
        "2xl": "1140px",
      },
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
