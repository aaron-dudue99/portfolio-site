/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black' : '#0b0605',
      'dark' : '#1e1c1b',
      'green-900' : '#1c2324',
      'green-700' : '#106359',
      'green-500' : '#0abab5',
      'green-300' : '#9bf1e3',
      'green-100'  : '#e6fdf9',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Bitter', 'serif'],
    },
    extend: {
      spacing: {
        '200': '80rem',
      }
    },
  },
  plugins: [],
}
