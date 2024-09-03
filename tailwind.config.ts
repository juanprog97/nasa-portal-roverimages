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
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', ':global(.dark)'],
  theme: {
    extend: {
      backgroundImage: {
        'image-template': "url('/images/template-galaxy.webp')",
      },
      keyframes: {
        blur: {
          '0%': { filter: 'blur(0px)' },
          '50%': { filter: 'blur(10px)' },
          '100%': { filter: 'blur(0px)' },
        },
      },
      animation: {
        blur: 'blur 3s ease-in-out infinite',
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
