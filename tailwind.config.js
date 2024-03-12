/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#b99a56",
      },
      // container: {
      //   padding: "1rem",
      //   center: true,
      // },
      backgroundImage: {
        "home-pattern": "url('./public/image/main.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
    // screens: {
    //   xs: "576px",
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1300px",
    //   xl: "1780px",
    // },
  },
  plugins: [],
};
