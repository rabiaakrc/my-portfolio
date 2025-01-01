/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      
      colors: {
        'custom-purple': '#4832D3',
        'custom-yellow': '#FFE86E', // Sarı renk için örnek hex kodu
      },
    },
  },
  plugins: [],
}