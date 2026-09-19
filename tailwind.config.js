/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        ink: "#0b0c0f",
        panel: "#131419",
        line: "#22242b",
        teal: "#4fd1c5",
        amber: "#f0b429",
      },
    },
  },
  plugins: [],
};
