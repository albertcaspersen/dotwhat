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
        'description-text': 'rgb(183, 184, 184)',
      },
      fontFamily: {
        'bevietnam': ['BeVietnamPro-Regular', 'sans-serif'],
        'bevietnam-bold': ['BeVietnamPro-Bold', 'sans-serif'],
      },
      fontSize: {
        'home-title': '4rem',           // Desktop title
        'home-title-md': '2.5rem',      // Tablet title  
        'home-title-mobile': '1.75rem', // Mobile title
        'home-title-sm': '1.65rem',     // iPhone 15 title
        'desc': '1.2rem',               // Desktop description
        'desc-md': '1.1rem',            // Tablet description
        'desc-mobile': '1rem',          // Mobile description
        'desc-sm': '0.95rem',           // iPhone 15 description
      },
      maxWidth: {
        'home-title': '43vw',
        'home-desc': '37.5rem',  // 600px converted to rem
      },
      spacing: {
        '5.5': '1.375rem',      // 5.5rem spacing
        '20': '5rem',           // Already exists in Tailwind
        '80': '20rem',          // Already exists in Tailwind
      },
      margin: {
        'home-top': '25vh',
        'home-bottom': '27vh',
        'home-top-tablet': '20vh',
        'home-bottom-tablet': '20vh',
        'home-bottom-mobile': '15vh',
        'desc-top-mobile': '20rem',
        'desc-bottom-mobile': '5.5rem',
      },
      padding: {
        'title-bottom': '2vh',
        'title-bottom-mobile': '1vh',
      },
      inset: {
        '50vh': '50vh',
      },
      gridColumn: {
        'span-12': 'span 12 / span 12',
        '1-13': '1 / 13',
        '1-11': '1 / 11',
      },
      gridRow: {
        '2': '2',
        '3': '3',
      },
    },
  },
  plugins: [],
}

