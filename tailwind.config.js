/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        signature: '#5CE0E5',
        background: '#020203',
      },
    },
  },
  plugins: [],
}

