/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayIconBg: "#DDD",
        middleMenuTextBlack: "#171717",
        buttonOrange: "#F78E2F",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Fontu tanımla
      },
    },
  },
  plugins: [],
};
