/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
      keyframes: {
        ring: {
          '0%': { transform: 'rotate(135deg)', strokeDashoffset: '-122.52' },
          '15%': { transform: 'rotate(90deg)', strokeDashoffset: '-122.52' },
          '35%': { transform: 'rotate(297.5deg)', strokeDashoffset: '-65.34' },
          '55%': { transform: 'rotate(505deg)', strokeDashoffset: '-122.52' },
          '70%': { transform: 'rotate(490deg)', strokeDashoffset: '-122.52' },
          '85%, 100%': { transform: 'rotate(497.5deg)', strokeDashoffset: '-122.52' },
        },
        ball1: {
          '0%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-7deg)' },
          '60%': { transform: 'rotate(399deg)' },
          '75%': { transform: 'rotate(361deg)' },
          '90%, 100%': { transform: 'rotate(374deg)' },
        },
        ball2: {
          '0%': { transform: 'rotate(-21deg)' },
          '25%': { transform: 'rotate(-47deg)' },
          '60%': { transform: 'rotate(364deg)' },
          '75%': { transform: 'rotate(326deg)' },
          '90%, 100%': { transform: 'rotate(339deg)' },
        },
      },
      animation: {
        ring: 'ring 2s ease-in-out infinite',
        ball1: 'ball1 2s ease-in-out infinite',
        ball2: 'ball2 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};