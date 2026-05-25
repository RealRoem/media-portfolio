import { memo } from 'react'

import { theme } from '@/styles/theme'
import type { ButtonProps } from '@/types'
import { cx } from '@/utils'

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
      className={cx(theme.button.base, theme.button.variants[variant], className)}
      href={href}
    >
      {children}
    </a>
  )
)

Button.displayName = 'Button'
