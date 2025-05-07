/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Main brand colors
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
        // Accent colors
        accent: {
          50: '#e6fbfe',
          100: '#ccf7fd',
          200: '#99eefc',
          300: '#66e6fa',
          400: '#33ddf9',
          500: '#00d5f8',
          600: '#00a7c6',
          700: '#007d95',
          800: '#005263',
          900: '#002932',
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};