/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tailwindkocolor: "#0F172A",
      },
      animation: {
        scaleAndIncreaseOpacity: "scaleAndIncreaseOpacity 0.4s ease-in",
      },
      keyframes: {
        scaleAndIncreaseOpacity: {
          "0%": { transform: "scale(0.4)", opacity: 0 },
          "50%": { transform: "scale(0.8)", opacity: 0.7 },
          "70%": { transform: "scale(0.9)", opacity: 0.8 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
