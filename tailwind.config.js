/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "1E3A8A",
        secondary: "E0F7FA",
        whiteblue: "#E8F9FF",
        whiteblue2: "#D4F6FF",
        offwhite: "#F5F5F5",
      },
      backgroundImage: {
        "login": "url('./assets/background.jpg')",
        "gradient-primary": "linear-gradient(to left, #1E3A8A, #E0F7FA)",
        "gradient-secondary": "linear-gradient(13deg, rgba(228,236,238,1) 17%, rgba(16,165,212,1) 60%, rgba(234,245,247,1) 91%)",
      }
    },
  },
  plugins: [],
}