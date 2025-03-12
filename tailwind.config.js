module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveTopToCenter: "moveTopToCenter 10s linear infinite",
        moveCenterToBottom: "moveCenterToBottom 10s linear infinite",
        moveBottomToTop: "moveBottomToTop 10s linear infinite",
        marquee: "marquee 10s linear infinite",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      keyframes: {
        moveTopToCenter: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        moveCenterToBottom: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        moveBottomToTop: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marquee: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
