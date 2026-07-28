/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1E382B',
          50: '#f3f6f4',
          100: '#e2ebe6',
          200: '#c2d4cb',
          300: '#97b3a4',
          400: '#688d79',
          500: '#466f5a',
          600: '#345746',
          700: '#1E382B',
          800: '#172b21',
          900: '#0f1d17',
        },
        gold: {
          DEFAULT: '#C49A45',
          50: '#fbf6ea',
          100: '#f5ead0',
          200: '#ecd49c',
          300: '#e0bb6a',
          400: '#d4a853',
          500: '#C49A45',
          600: '#a07c33',
          700: '#7e6128',
          800: '#5d471d',
          900: '#3d2e13',
        },
        cream: {
          DEFAULT: '#FAF8F5',
          50: '#ffffff',
          100: '#FAF8F5',
          200: '#f3eee5',
          300: '#e8dfd1',
          400: '#d6c8b3',
        },
      },
      fontFamily: {
        sans: ['Tajawal', 'system-ui', 'sans-serif'],
        display: ['Amiri', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(30, 56, 43, 0.18)',
        card: '0 4px 24px -8px rgba(30, 56, 43, 0.12)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'slide-in': 'slide-in 0.3s ease-out both',
      },
    },
  },
  plugins: [],
};
