export const designTokens = {
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
  shadows: {
    glow: '0 20px 56px rgba(255, 176, 0, 0.26)',
    cta: '0 18px 48px rgba(246, 244, 238, 0.24)',
    panel: '0 24px 80px rgba(0, 0, 0, 0.28)',
    premium: '0 18px 60px rgba(8, 9, 13, 0.22)',
  },
  backgrounds: {
    cinematicRadial:
      'radial-gradient(circle at 18% 8%, rgba(255, 176, 0, 0.1), transparent 30%), radial-gradient(circle at 82% 12%, rgba(246, 244, 238, 0.07), transparent 32%), linear-gradient(135deg, #08090d 0%, #11151d 48%, #0f1218 100%)',
  },
} as const

export const theme = {
  layout: {
    page: 'min-h-screen bg-cinematic-radial text-frost-100 antialiased',
    sectionSurface: 'bg-obsidian-900/38',
    sectionBlend: 'bg-gradient-to-b from-transparent via-obsidian-800/42 to-transparent',
  },
  text: {
    eyebrow: 'text-sm font-medium uppercase tracking-[0.18em] text-champagne-300',
    sectionTitle:
      'mt-4 text-4xl font-semibold leading-tight tracking-tight text-frost-100 sm:text-6xl',
    cardTitle: 'mt-5 text-2xl font-semibold leading-snug text-frost-100',
    body: 'text-lg leading-8 text-frost-300',
    cardBody: 'leading-7 text-frost-300',
    accentLink:
      'text-champagne-200 transition-colors duration-300 hover:text-champagne-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-300',
  },
  icon: {
    accent: 'text-champagne-300',
  },
  surface: {
    card: 'h-full rounded-lg border border-white/10 bg-white/[0.045] p-7 shadow-premium backdrop-blur-xl transition-[border-color,background-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-champagne-200/25 hover:bg-white/[0.065]',
    panel:
      'rounded-lg border border-champagne-200/15 bg-white/[0.055] shadow-panel backdrop-blur-xl',
    statBase:
      'rounded-lg border p-6 backdrop-blur-xl transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5',
    statDefault:
      'border-white/10 bg-white/[0.045] hover:border-champagne-200/25 hover:bg-white/[0.065]',
    statHighlight: 'border-champagne-200/25 bg-champagne-200/[0.07] shadow-panel',
    videoCard:
      'group overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] shadow-premium backdrop-blur-xl transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-champagne-200/30 hover:bg-white/[0.065]',
  },
  button: {
    base: 'inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian-950 sm:w-auto',
    variants: {
      primary:
        'border border-white/80 bg-frost-100 text-obsidian-950 shadow-cta hover:border-white hover:bg-white focus-visible:ring-champagne-300',
      secondary:
        'border border-white/14 bg-white/[0.08] text-frost-100 shadow-premium hover:border-champagne-200/35 hover:bg-white/[0.12] focus-visible:ring-champagne-300',
      ghost: 'text-frost-300 hover:text-white focus-visible:ring-frost-300',
    },
  },
  hero: {
    title:
      'mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-frost-100 sm:text-7xl lg:text-8xl',
    body: 'mt-8 max-w-2xl text-lg leading-8 text-frost-300',
    ambient: 'absolute inset-8 rounded-full bg-champagne-300/10 blur-3xl',
    ambientSecondary: 'absolute -right-8 top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl',
    profilePanel:
      'relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-8 shadow-panel backdrop-blur-xl sm:p-10',
    profileBar:
      'absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-champagne-300 via-champagne-100 to-champagne-300',
    avatarFrame:
      'rounded-full bg-gradient-to-br from-champagne-300 via-champagne-100 to-steel-200 p-1 shadow-glow',
    profileTitle: 'mt-3 text-3xl font-semibold tracking-tight text-frost-100',
    profileBody: 'mt-4 max-w-sm text-sm leading-6 text-frost-300',
    metricCard: 'rounded-md border border-white/10 bg-obsidian-950/50 p-4 text-center',
    metricValue: 'text-2xl font-semibold tracking-tight text-frost-100',
    metricLabel: 'mt-1 text-xs font-medium text-frost-500',
  },
} as const

export type ButtonVariant = keyof typeof theme.button.variants
