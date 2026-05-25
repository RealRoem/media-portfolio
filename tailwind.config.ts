import type { Config } from 'tailwindcss'

import { designTokens } from './src/styles/theme'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...designTokens.colors,
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
        ...designTokens.shadows,
      },
      backgroundImage: {
        'cinematic-radial': designTokens.backgrounds.cinematicRadial,
      },
    },
  },
  plugins: [],
}

export default config
