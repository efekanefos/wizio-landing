/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayIconBg: "#DDD",
        middleMenuTextBlack: "#171717",
        buttonOrange: "#F78E2F",
        blackContentColor: "#1A1A1A",
        darkBlue: "#0069FF",
        textDarkBlue: "#0060E6",
      },
      width: {
        fill: "stretch",
      },
      height: {
        fill: "stretch",
      },
      fontSize: {
        base: ["14px", "1.5"],
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Fontu tanımla
      },
    },
  },
  plugins: [],
};
