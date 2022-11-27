/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Very-Dark-Grayish-Blue": "hsl(217, 19%, 35%)",
        "Desaturated-Dark-Blue": "hsl(214, 17%, 51%)",
        "Grayish-Blue": "hsl(212, 23%, 69%)",
        "Light-Grayish-Blue": "hsl(210, 46%, 95%)"
      }
    },
  },
  plugins: [],
}
