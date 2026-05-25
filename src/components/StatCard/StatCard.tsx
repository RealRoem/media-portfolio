import { memo } from 'react'

import { useAnimatedCounter } from '@/hooks'
import { theme } from '@/styles/theme'
import type { StatCardProps } from '@/types'
import { cx, formatCompactNumber } from '@/utils'

export const StatCard = memo(({ stat }: StatCardProps): React.JSX.Element => {
  const { value, ref } = useAnimatedCounter({ target: stat.value })

  return (
    <article
      className={cx(
        theme.surface.statBase,
        stat.highlight ? theme.surface.statHighlight : theme.surface.statDefault
      )}
    >
      <p className="text-sm font-medium text-frost-300">{stat.label}</p>
      <p className="mt-5 text-4xl font-semibold tracking-tight text-frost-100 sm:text-5xl">
        <span ref={ref}>{formatCompactNumber(value)}</span>
        {stat.suffix}
      </p>
      <p className="mt-4 text-sm leading-6 text-frost-300">{stat.description}</p>
    </article>
  )
})

StatCard.displayName = 'StatCard'
