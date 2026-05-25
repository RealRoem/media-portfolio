import { memo } from 'react'

import { Reveal, Section } from '@/components'
import { SECTION_IDS, STAGGER_DELAY_SECONDS } from '@/constants'
import type { AboutSectionProps } from '@/features/about/types'

export const AboutSection = memo(
  ({ points }: AboutSectionProps): React.JSX.Element => (
    <Section id={SECTION_IDS.about} labelledBy="about-title">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-champagne-300">
          About me
        </p>
        <h2
          className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-frost-100 sm:text-6xl"
          id="about-title"
        >
          I like making Roblox feel easier, faster, and more fun.
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {points.map((point, index) => (
          <Reveal delay={index * STAGGER_DELAY_SECONDS} key={point.title}>
            <article className="h-full rounded-lg border border-white/10 bg-white/[0.045] p-7 shadow-premium backdrop-blur-xl transition-[border-color,background-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-champagne-200/25 hover:bg-white/[0.065]">
              <p className="text-sm font-medium text-champagne-300">{point.eyebrow}</p>
              <h3 className="mt-5 text-2xl font-semibold leading-snug text-frost-100">
                {point.title}
              </h3>
              <p className="mt-5 leading-7 text-frost-300">{point.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
)

AboutSection.displayName = 'AboutSection'
