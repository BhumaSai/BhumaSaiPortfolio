/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#ccdffc',
          200: '#99c0fa',
          300: '#66a0f7',
          400: '#3381f5',
          500: '#0062f3',
          600: '#004ec2',
          700: '#003b92',
          800: '#002761',
          900: '#001431',
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        blob: 'blob 7s infinite',
        float: 'float 6s ease-in-out infinite',
        slideInUp: 'slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        glow: 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px 0px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px 10px rgba(59, 130, 246, 0.6)' },
        }
      },
    },
  },
  plugins: [],
};