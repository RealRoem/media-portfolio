import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#08090d',
          900: '#0f1218',
          800: '#171b24',
          700: '#232936',
        },
        champagne: {
          100: '#fff3d1',
          200: '#ffd36f',
          300: '#ffb000',
          400: '#d68a00',
        },
        youtube: {
          400: '#ff3355',
          500: '#ff0033',
          600: '#cc0029',
        },
        steel: {
          100: '#f6f4ee',
          200: '#e6e1d6',
          300: '#c7c0b2',
          500: '#787f8c',
          700: '#303846',
        },
        frost: {
          100: '#f6f4ee',
          300: '#c9c3b8',
          500: '#8d948f',
        },
        discord: '#6574d9',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        section: '8rem',
        'section-sm': '4rem',
      },
      boxShadow: {
        glow: '0 20px 56px rgba(255, 176, 0, 0.24)',
        redglow: '0 20px 56px rgba(255, 0, 51, 0.22)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.28)',
        premium: '0 18px 60px rgba(8, 9, 13, 0.22)',
      },
      backgroundImage: {
        'cinematic-radial':
          'radial-gradient(circle at 18% 8%, rgba(255, 0, 51, 0.16), transparent 30%), radial-gradient(circle at 82% 12%, rgba(255, 176, 0, 0.18), transparent 32%), linear-gradient(135deg, #08090d 0%, #11151d 48%, #1a1010 100%)',
      },
    },
  },
  plugins: [],
}

export default config
