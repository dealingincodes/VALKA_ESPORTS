/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neon: {
          blue: '#00f5ff',
          purple: '#8b5cf6',
          pink: '#ec4899',
          green: '#00ff88',
        },
        dark: {
          950: '#0a0a0a',
          900: '#1a0a0a',
          800: '#2a0a0a',
          700: '#3a0a0a',
          600: '#4a0a0a',
        },
        burgundy: {
          950: '#1a0a0a',
          900: '#2a0a0a',
          800: '#3a0a0a',
          700: '#4a0a0a',
          600: '#5a0a0a',
        },
        premium: {
          red: '#dc2626',
          redDark: '#991b1b',
          redLight: '#ef4444',
          redDarker: '#7f1d1d',
          redDarkest: '#450a0a',
          redBlack: '#1a0a0a',
          redBlackDarker: '#0f0505',
          gold: '#fbbf24',
          goldDark: '#d97706',
          goldLight: '#fcd34d',
          goldDarker: '#b45309',
          goldDarkest: '#92400e',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(251,191,36,0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(251,191,36,0.5), 0 0 40px rgba(251,191,36,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
