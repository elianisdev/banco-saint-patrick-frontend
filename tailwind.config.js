export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          olive: "#B4BF89",
          forest: "#2f3b29",
          accent: "#3d5c3a",
        },
        surface: {
          base: "#f7f7ee",
          card: "#ffffff",
          outline: "#e0e0d3",
        },
      },
    },
  },
  plugins: [],
}
