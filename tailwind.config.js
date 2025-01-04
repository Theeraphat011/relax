/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeInAnimation 1.5s ease-out', // การใช้ keyframe 'fadeInAnimation'
      },
      keyframes: {
        fadeInAnimation: {
          '0%': {
            opacity: '0', // เริ่มจากการซ่อน
            transform: 'translateY(40px)', // ขยับลงมาจากด
          },
          '100%': {
            opacity: '1', // ปรากฏเต็มที่
            transform: 'translateY(0px)', // ขยับลงมาจากด
          },
        },
      },    
    },
  },
  plugins: [],
}