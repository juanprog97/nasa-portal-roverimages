import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    darkMode: ['selector', '[data-mode="dark"]'],
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'image-template': "url('/images/template-galaxy.webp')",
      },
    },
    colors: {
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
      black: '#18191A',
    },
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
