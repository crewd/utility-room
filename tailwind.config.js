/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#87CEEB",
      },
      fontFamily: {
        sans: ["Noto Sans KR", 'sans-serif']
      }
    },
  },
  plugins: [],
} 