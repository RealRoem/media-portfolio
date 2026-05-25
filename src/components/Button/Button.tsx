import { memo } from 'react'

import type { ButtonProps } from '@/types'
import { cx } from '@/utils'

const variantClasses = {
  primary:
    'bg-gradient-to-r from-youtube-500 to-champagne-300 text-white shadow-redglow hover:from-youtube-400 hover:to-champagne-200 focus-visible:ring-champagne-300',
  secondary:
    'border border-white/14 bg-white/[0.045] text-frost-100 hover:border-champagne-200/35 hover:bg-white/[0.075] focus-visible:ring-champagne-300',
  ghost: 'text-frost-300 hover:text-white focus-visible:ring-frost-300',
} as const

export const Button = memo(
  ({
    children,
    href,
    ariaLabel,
    variant = 'primary',
    className,
  }: ButtonProps): React.JSX.Element => (
    <a
      aria-label={ariaLabel}
      className={cx(
        'inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian-950 sm:w-auto',
        variantClasses[variant],
        className
      )}
      href={href}
    >
      {children}
    </a>
  )
)

Button.displayName = 'Button'
