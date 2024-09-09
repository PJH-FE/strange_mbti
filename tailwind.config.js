/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      star: ['StarFont', 'sans-serif']
    },
    extend: {
      animation: {
        circle01: 'psycho 2s linear infinite',
        circle02: 'psycho 2s linear 0.1s infinite',
        circle03: 'psycho 2s linear 0.25s infinite'
      },
      keyframes: {
        psycho: {
          '0%': {
            transform: 'rotate(0deg) scale(1) translate(0, 0)'
          },
          '33%': {
            transform: 'rotate(360deg) scale(1) translate(10px, 10px)'
          },
          '66%': {
            transform: 'rotate(720deg) scale(1) translate(-10px, -10px)'
          },
          '100%': {
            transform: 'rotate(1080deg) scale(1) translate(0, 0)'
          }
        }
      }
    }
  },
  plugins: []
};
