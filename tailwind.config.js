/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1240px',
      '2xl': '1240px'
    },
    extend: {
      colors: {
        primary: '#4318FF',
        second: '#1B2559'
      }
    },
    container: {
      center: true,
      padding: '1rem', // Optional: Add horizontal padding
      maxWidth: '1140px', // Set the default width
    },
  },
  plugins: [],
}

