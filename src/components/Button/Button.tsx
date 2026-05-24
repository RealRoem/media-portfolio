import { memo } from 'react'

import type { ButtonProps } from '@/types'
import { cx } from '@/utils'

const variantClasses = {
  primary:
    'bg-frost-100 text-obsidian-950 shadow-glow hover:bg-ember-300 focus-visible:ring-ember-300',
  secondary:
    'border border-white/12 bg-white/[0.04] text-frost-100 hover:border-frost-300/40 hover:bg-white/[0.07] focus-visible:ring-frost-300',
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
        'inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian-950 sm:w-auto',
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
