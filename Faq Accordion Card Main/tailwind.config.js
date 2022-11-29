/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Soft-violet": "hsl(273, 75%, 66%)",
        "Soft-blue": "hsl(240, 73%, 65%)",
        "Very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
        "Soft-red" : "hsl(14, 88%, 65%)",
        "Light-grayish-blue": "hsl(240, 5%, 91%)",
        "Dark-grayish-blue": "hsl(240, 6%, 50%)"
      }
    },
    fontFamily: {
      KumbhSans: "Kumbh Sans, sans-serif"
    }
  },
  plugins: [],
}
