import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a103d',
          dark: '#2a1f5d',
        },
        accent: {
          DEFAULT: '#ea0d44',
          dark: '#ff1a5c',
        },
      },
      fontSize: {
        'xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        '3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
        '4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
        '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',
        '6xl': 'clamp(3.75rem, 3rem + 3.75vw, 5rem)',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'base': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#1a103d",
          "accent": "#ea0d44",
          "neutral": "#171717",
          "base-100": "#ffffff",
        },
        dark: {
          "primary": "#2a1f5d",
          "accent": "#ff1a5c",
          "neutral": "#ededed",
          "base-100": "#0a0a0a",
        },
      },
    ],
  },
}

export default config 