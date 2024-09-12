/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        frame: {
          '0%': {  transform: 'translateX(100%)' },
          '20%': { transform: 'translateX(0%)' },
          '40%': {  transform: 'translateX(-100%)' },
          '60%': {  transform: 'translateX(-200%)' },
          '80%': {  transform: 'translateX(-300%)' },
          '100%': {  transform: 'translateX(-400%)' }
        },
        motion: {
          '0%': {  content: 'url("/image/Rectangle 299 (2).png")' },
          '50%': { content: 'url("/image/Rectangle 300.png")' },
          '100%': {  content: 'url("/image/Rectangle 301.png")' }
        }
      },
      animation: {
        'slide-show': 'frame 20s infinite',
        'motion-slide': 'motion 6s ease-in-out infinite'
      },
      backgroundImage: {
        'img1': 'url("/image/Rectangle 230.png")',
        'img2': 'url("/image/Rectangle 231.png")',
        'img3': 'url("/image/Rectangle 232.png")',
        'img4': 'url("/image/Rectangle 233.png")',
        'img5': 'url("/image/Rectangle 242.png")',
        'upcoming-bg': 'url("image/Rectangle 91.png")'
      }
    },
    colors: {
      start: '#4693ED',
      middle: '#79C2D2',
      end: '#C056097D'
    }
  },
  plugins: [],
}