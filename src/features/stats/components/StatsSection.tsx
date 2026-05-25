import { memo } from 'react'

import { Reveal, Section, StatCard } from '@/components'
import { SECTION_IDS, STAGGER_DELAY_SECONDS } from '@/constants'
import type { StatsSectionProps } from '@/features/stats/types'
import { theme } from '@/styles/theme'

export const StatsSection = memo(
  ({ stats }: StatsSectionProps): React.JSX.Element => (
    <Section
      className={theme.layout.sectionSurface}
      id={SECTION_IDS.stats}
      labelledBy="stats-title"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <p className={theme.text.eyebrow}>Proof</p>
          <h2 className={theme.text.sectionTitle} id="stats-title">
            My audience is niche, but very intentional
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className={theme.text.body}>
            I do not believe reaching everyone creates high engagement. I therefore specifically
            reach out to Roblox players who are looking for help with games they already play
          </p>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal delay={index * STAGGER_DELAY_SECONDS} key={stat.label}>
            <StatCard stat={stat} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
)

StatsSection.displayName = 'StatsSection'
