/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**.jsx', './src/components/**.jsx', './src/Pages/**.jsx'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'gradient-primary': '#FFBB0E',
        'gradient-secondary' : '#EF821D',
        'gradient-button-primary': '#FAAC16',
        'gradient-button-secondary': '#FFBB0B',
        'gradient-button-light': '#F1C553',
      }
    },
  },
  plugins: [],
}

