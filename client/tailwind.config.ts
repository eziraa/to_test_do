import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        xs: '360px',
      },
    },
    extend: {
      colors: {
        blue: {
          100: '#B4C6EE',
          400: '#417BFF',
          500: '#3371FF',
        },
        red: {
          400: '#DD4F56',
          500: '#DC4349',
        },
        dark: {
          100: '#09111F',
          200: '#0B1527',
          300: '#0F1C34',
          350: '#12213B',
          400: '#27344D',
          500: '#2E3D5B',
        },
        black:{ 
          DEFAULT: '#030000', 
          100: '#010000',
          200: '#020000', 
          300: '#030000',
          400: '#040000',
          500: '#030000',
          600: '#6a0000',
          700: '#cf0000',
          800: '#ff3535', 
          900: '#ff9a9a'
          }, 
        accent: { 
            DEFAULT: '#0EF3C5',
            100: '#023127',
            200: '#05614f',
            300: '#079276',
            400: '#09c39e',
            500: '#0ef3c5',
            600: '#3cf6d1',
            700: '#6df8dc',
            800: '#9efae8',
            900: '#cefdf3' 
          }, 
          'seasalt': {
             DEFAULT: '#F5FAFA',
             100: '#214242', 
             200:'#428484',
             300: '#71b8b8',
             400: '#b3d9d9',
             500: '#f5fafa',
             600: '#f7fbfb',
             700: '#f9fcfc',
             800: '#fbfdfd',
             900: '#fdfefe'
             },

      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      backgroundImage: {
        doc: 'url(/assets/images/doc.png)',
        modal: 'url(/assets/images/modal.png)',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;


