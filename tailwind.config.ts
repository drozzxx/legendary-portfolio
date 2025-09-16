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
        // Tailwind CSS varsayılan renklerini override et
        white: 'transparent', // text-white, bg-white sınıfları şeffaf olur
        black: 'transparent', // text-black, bg-black sınıfları şeffaf olur
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // Diğer renkleri de override edebilirsiniz
        red: 'transparent',
        blue: 'transparent',
        green: 'transparent',
        yellow: 'transparent',
        purple: 'transparent',
        pink: 'transparent',
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
      animation: {
        'spin': 'spin 30s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'twinkle-slow': 'twinkle-slow 5s ease-in-out infinite',
        'twinkle-fast': 'twinkle-fast 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        'twinkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'twinkle-slow': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        'twinkle-fast': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '0.3', 
            transform: 'scale(1)',
            boxShadow: '0 0 3px white, 0 0 6px white, 0 0 9px white'
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.1)',
            boxShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  // @ts-ignore - DaisyUI konfigürasyonu
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