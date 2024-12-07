/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pri: ['Poppins', 'sans-serif'],
        sec: ['Lato', 'sans-serif'],
        ter: ['Audiowide', 'sans-serif']
      },
      colors: {
        pri: '#346083',
        sec: '#4C95B8',
        ter: '#204A7A',
      }
    },
  },
  plugins: [],
}

