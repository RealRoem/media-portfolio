import { memo } from 'react'

import { Reveal, Section, StatCard } from '@/components'
import { SECTION_IDS, STAGGER_DELAY_SECONDS } from '@/constants'
import type { StatsSectionProps } from '@/features/stats/types'

export const StatsSection = memo(
  ({ stats }: StatsSectionProps): React.JSX.Element => (
    <Section className="bg-obsidian-900/45" id={SECTION_IDS.stats} labelledBy="stats-title">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <p className="text-sm font-medium text-ember-300">Proof</p>
          <h2
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-frost-100 sm:text-6xl"
            id="stats-title"
          >
            My audience is niche, but very intentional.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-lg leading-8 text-frost-300">
            I am not trying to reach everyone. I reach Roblox players who are already looking for
            help, ideas, layouts, money guides, and games worth trying.
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
