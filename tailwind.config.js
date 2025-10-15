/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'kg-corner': ['KGCorneroftheSky', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      colors: {
        'title-cream': '#FFE5B4',
        'text-brown': '#88615d',
        'button-brown': '#88615d',
        'button-brown-hover': '#7a5551',
      }
    },
  },
  plugins: [],
};