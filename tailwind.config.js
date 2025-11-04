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
        white: '#ffffff',
      },
      fontFamily: {
        'bevietnam-regular': ['BeVietnamPro-Regular', 'sans-serif'],
        'bevietnam-bold': ['BeVietnamPro-Bold', 'sans-serif'],
      },
      fontSize: {
        'home-title-desktop': '4rem',
        'home-title-tablet': '2.5rem',
        'home-title-mobile': '1.75rem',
        'home-title-xs': '1.65rem',
      },
      lineHeight: {
        'home-title-desktop': '1.2',
        'home-title-mobile': '1.3',
      },
      maxWidth: {
        'home-title-desktop': '43vw',
        'home-title-mobile': '90vw',
        'home-title-xs': '85vw',
      },
      spacing: {
        'home-title-desktop': '2vh',
        'home-title-mobile': '1vh',
      },
    },
  },
  plugins: [],
}

