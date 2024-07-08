/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-blue': '#3AA39F',
        'footer-gray': '#323334'
      },
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(3px)',
    },
  },
  plugins: [],
}

