/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Strong-Cyan": "hsl(171, 66%, 44%)",
        "Light-Blue": "hsl(233, 100%, 69%)",
        "Dark-Grayish-Blue": "hsl(210, 10%, 33%)",
        "Grayish-Blue": "hsl(201, 11%, 66%)"
      },
      backgroundImage: {
        hero: "URL('/images/bg-header-desktop.png')"
      }
    },
    fontFamily: {
      BaiJamJuree: "Bai Jamjuree, sans-serif",
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: "1440px",
        xl: "1440px",
        '2xl': "1440px",

      }
    }
  },
  plugins: [],
}
