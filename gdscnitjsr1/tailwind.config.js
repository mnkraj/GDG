/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {fontFamily: {
      'Patric': ["Patrick Hand SC", "cursive"],
      'Lato': ["Lato", "sans-serif"],
      'Patrick': ["Patrick Hand","cursive"],
    }
    },
  },
  plugins: [],
}


