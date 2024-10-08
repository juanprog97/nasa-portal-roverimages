import type { Config } from 'tailwindcss';

export const colors = {
  red: {
    100: '#FC2200',
    200: '#E01E00',
    300: '#B61800',
    400: '#941400',
  },
  blue: {
    100: '#0052E0',
    200: '#0B3D91',
    300: '#003694',
    400: '#00276B',
  },
  skyblue: {
    100: '#0052e01a',
    200: '#0052e04d',
    300: '#0052e061',
    400: '#0052e07d',
  },
  skyblack: {
    100: '#71717121',
    200: '#71717180',
    300: '#717171f2',
    400: '#30302d',
  },
  black: {
    100: '#717171',
    200: '#545454',
    300: '#383838',
    400: '#1c1c1c',
    500: '#000000',
  },
  white: '#FFFFFF',

  transparent: 'transparent',
  whitedirty: '#F5F5F5',
  grey: '#E0E0E0',
  redcolornasa: '#DB362D',
  greyborder: '#999999',
  darkbg: '#18191A',
  shadowdark: '#242526',
};

const config: Config = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', ':global(.dark)'],
  theme: {
    screens: {
      xs: '400px',
      // => @media (min-width: 440px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        'landscape-md': {
          raw: '(orientation: landscape) and (max-width: 1280px)',
        },
        'landscape-sm': {
          raw: '(orientation: landscape) and (max-width: 640px)',
        },
      },
      backgroundImage: {
        'image-template': "url('/images/template-galaxy.webp')",
      },
      keyframes: {
        blur: {
          '0%': { filter: 'blur(0px)' },
          '50%': { filter: 'blur(10px)' },
          '100%': { filter: 'blur(0px)' },
        },
        colorBlinkLight: {
          '0%, 100%': { backgroundColor: colors.skyblue[100] },
          '50%': { backgroundColor: colors.transparent },
        },
        colorBlinkDark: {
          '0%, 100%': { backgroundColor: colors.skyblack[100] },
          '50%': { backgroundColor: colors.transparent },
        },
      },
      animation: {
        blur: 'blur 3s ease-in-out infinite',
        colorBlinkLight: 'colorBlinkLight 1.5s infinite',
        colorBlinkDark: 'colorBlinkDark 1.5s infinite',
      },
    },
    colors,
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [],
};
export default config;
