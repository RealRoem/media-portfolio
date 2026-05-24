import { memo } from 'react'

import { useAnimatedCounter } from '@/hooks'
import type { StatCardProps } from '@/types'
import { cx, formatCompactNumber } from '@/utils'

export const StatCard = memo(({ stat }: StatCardProps): React.JSX.Element => {
  const { value, ref } = useAnimatedCounter({ target: stat.value })

  return (
    <article
      className={cx(
        'rounded-lg border p-6 backdrop-blur transition duration-300 hover:-translate-y-1',
        stat.highlight
          ? 'border-discord/35 bg-discord/10 shadow-panel'
          : 'border-white/10 bg-white/[0.035]'
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
