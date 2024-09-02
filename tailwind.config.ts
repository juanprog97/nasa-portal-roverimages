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
  white: '#FFFFFF',
  whitedirty: '#F5F5F5',
  black: '#18191A',
  grey: '#E0E0E0',
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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'image-template': "url('/images/template-galaxy.webp')",
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
