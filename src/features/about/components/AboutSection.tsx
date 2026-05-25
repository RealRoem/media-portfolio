import { memo } from 'react'

import { Reveal, Section } from '@/components'
import { SECTION_IDS, STAGGER_DELAY_SECONDS } from '@/constants'
import type { AboutSectionProps } from '@/features/about/types'
import { theme } from '@/styles/theme'

export const AboutSection = memo(
  ({ points }: AboutSectionProps): React.JSX.Element => (
    <Section id={SECTION_IDS.about} labelledBy="about-title">
      <Reveal className="max-w-3xl">
        <p className={theme.text.eyebrow}>About me</p>
        <h2 className={theme.text.sectionTitle} id="about-title">
          I like making Roblox feel easier, faster, and more fun.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {points.map((point, index) => (
          <Reveal delay={index * STAGGER_DELAY_SECONDS} key={point.title}>
            <article className={theme.surface.card}>
              <p className={`text-sm font-medium ${theme.icon.accent}`}>{point.eyebrow}</p>
              <h3 className={theme.text.cardTitle}>{point.title}</h3>
              <p className={`mt-5 ${theme.text.cardBody}`}>{point.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
)

AboutSection.displayName = 'AboutSection'
