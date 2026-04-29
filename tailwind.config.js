/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0e27",
        secondary: "#1a1f3a",
        accent: {
          1: "#00d4ff",
          2: "#12f7d6",
          3: "#ff006e",
        },
        text: {
          primary: "#e0e0e0",
          secondary: "#a0a0a0",
        },
        border: {
          DEFAULT: "#2a2f4a",
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(0, 212, 255, 0.5)" },
          "50%": { textShadow: "0 0 20px rgba(0, 212, 255, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(0, 212, 255, 0.3)", boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)" },
          "50%": { borderColor: "rgba(0, 212, 255, 0.8)", boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" },
        },
      },
      backdropBlur: {
        xl: "20px",
      },
    },
  },
  plugins: [],
};
