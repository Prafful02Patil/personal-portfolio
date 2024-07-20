/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode:"class",
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1024px' },
      // => @media (max-width: 1024px) { ... }

      'md': { 'max': '768px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '450px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors:{
        'light-theme':"#19B09D"
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
      width:{
        'w22':'22rem',
        'w25':'25rem',
      },
      height:{
        'custom-screen-md':"30rem",
        'custom-screen-lg':"40rem"
      }
    },
  },
  plugins: [],
}