/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10a28e',
        background: '#111527',
      },
      fontFamily: {
        'bevietnam': ['BeVietnamPro-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

