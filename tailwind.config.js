/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        futureBlue: "#0077FF",
        bellGold: "#FFD700",
        royalDark: "#001F4D",
      },
      boxShadow: {
        blueGlow: "0 0 30px rgba(0,119,255,0.6)",
        goldGlow: "0 0 20px rgba(255,215,0,0.8)",
      },
      backgroundImage: {
        royalGradient: "linear-gradient(135deg, #001F4D 0%, #003C99 100%)",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
