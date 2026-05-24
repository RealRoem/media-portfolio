import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050507',
          900: '#0b0d12',
          800: '#121620',
          700: '#1c2230',
        },
        ember: {
          300: '#f0b98f',
          400: '#d9834f',
          500: '#b95f35',
        },
        frost: {
          100: '#f7fbff',
          300: '#b8c7da',
          500: '#78879d',
        },
        discord: '#5865f2',
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
        glow: '0 18px 48px rgba(240, 185, 143, 0.18)',
        panel: '0 20px 70px rgba(0, 0, 0, 0.32)',
      },
      backgroundImage: {
        'cinematic-radial':
          'radial-gradient(circle at 16% 10%, rgba(240, 185, 143, 0.12), transparent 34%), radial-gradient(circle at 86% 16%, rgba(88, 101, 242, 0.1), transparent 30%), linear-gradient(135deg, #050507 0%, #0b0d12 48%, #11151d 100%)',
      },
    },
  },
  plugins: [],
}

export default config
