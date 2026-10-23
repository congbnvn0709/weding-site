/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F7F4',
          100: '#E6ECE6',
          200: '#CDD9CE',
          300: '#A9BEAA',
          400: '#869F88',
          500: '#69836B',
          600: '#536955',
          700: '#435445',
          800: '#38443A',
          900: '#2F3931',
        },
        champagne: {
          50: '#FAF7F2',
          100: '#F3ECE1',
          200: '#E7D7C1',
          300: '#D6BD9B',
          400: '#C5A376',
          500: '#B88E5C',
          600: '#A37549',
          700: '#825939',
          800: '#6D4932',
        },
        linen: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F4F0E8',
          300: '#ECE4D7',
        },
        charcoal: {
          800: '#2C3531',
          900: '#1D2421',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
