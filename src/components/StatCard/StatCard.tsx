import { memo } from 'react'

import { useAnimatedCounter } from '@/hooks'
import type { StatCardProps } from '@/types'
import { cx, formatCompactNumber } from '@/utils'

export const StatCard = memo(({ stat }: StatCardProps): React.JSX.Element => {
  const { value, ref } = useAnimatedCounter({ target: stat.value })

  return (
    <article
      className={cx(
        'rounded-lg border p-6 backdrop-blur-xl transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5',
        stat.highlight
          ? 'border-discord/30 bg-discord/[0.075] shadow-panel'
          : 'border-white/10 bg-white/[0.045] hover:border-champagne-200/25 hover:bg-white/[0.065]'
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
