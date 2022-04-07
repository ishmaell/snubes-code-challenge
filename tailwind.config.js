module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/images/big-hero.png')",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        "snubes-dark-gray": "#445566",
      }
    },
  },
  plugins: [],
}
