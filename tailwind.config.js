/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charcoal & Gold Color Palette
        charcoal: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#80868B',
          700: '#5F6368',
          800: '#3C4043',
          900: '#1F2229',
        },
        gold: {
          50: '#FDF8E1',
          100: '#F9EBB3',
          200: '#F4DD85',
          300: '#EFCF57',
          400: '#EAC129',
          500: '#D4AF37',
          600: '#B8941F',
          700: '#8A6F17',
          800: '#5C4A0F',
          900: '#2E2507',
        },
        muted: {
          50: '#F7F8F9',
          100: '#EEF0F2',
          200: '#DDE1E5',
          300: '#C7CDD3',
          400: '#A8B0B8',
          500: '#8A9299',
          600: '#6C737A',
          700: '#4F555B',
          800: '#3A3D42',
          900: '#2A2D32',
        }
      },
      fontFamily: {
        'serif': ['Lora', 'Playfair Display', 'serif'],
        'sans': ['Inter', 'Lato', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      }
    },
  },
  plugins: [],
}

