/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lastica: ['Lastica', 'sans-serif'],
        mokoto: ['Mokoto', 'sans-serif'],
        savedbyzero: ['Savedbyzero', 'sans-serif']
      },
      keyframes: {
        animate: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        animateReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        scrollX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: 'animate var(--t) linear infinite',
        scrollReverse: 'animateReverse var(--t) linear infinite',
        scrollX: "scrollX 100s linear infinite",
      },
    },
  },
  plugins: [],
}