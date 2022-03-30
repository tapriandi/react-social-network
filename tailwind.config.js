module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1366px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "450px" },
      xxs: { max: "320px" },
    },
    extend: {
      colors: {
        main: '#006D38',
        lightgreen: '#C1DFC4',
      }
    },
  },
  plugins: [],
};
