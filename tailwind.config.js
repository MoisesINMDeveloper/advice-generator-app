/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      // Primary COLORS
      colors: {
        LightCyan: "hsl(193, 38%, 86%)",
        NeonGreen: "#52ffa8",
        // Neutral COLORS

        GrayishBlue: "hsl(217, 19%, 38%)",
        DarkGrayishBlue: "hsl(217, 19%, 24%)",
        DarkBlue: "hsl(218, 23%, 16%)",
      },
    },
    extend: {},
  },
  plugins: [],
};
