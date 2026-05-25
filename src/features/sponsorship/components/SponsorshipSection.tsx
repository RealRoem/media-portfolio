import { CheckCircle2 } from 'lucide-react'
import { memo } from 'react'

import { Reveal, Section } from '@/components'
import {
  MAILTO_SPONSORSHIP_URL,
  SECTION_IDS,
  SPONSORSHIP_EMAIL,
  STAGGER_DELAY_SECONDS,
} from '@/constants'
import type { SponsorshipSectionProps } from '@/features/sponsorship/types'
import { theme } from '@/styles/theme'

export const SponsorshipSection = memo(
  ({ values }: SponsorshipSectionProps): React.JSX.Element => (
    <Section
      className={theme.layout.sectionBlend}
      id={SECTION_IDS.sponsorship}
      labelledBy="sponsorship-title"
    >
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className={theme.text.eyebrow}>Sponsorship</p>
          <h2 className={theme.text.sectionTitle} id="sponsorship-title">
            A sponsorship should feel like part of the video
          </h2>
          <p className={`mt-6 ${theme.text.body}`}>
            I want sponsor integrations to feel useful and easy to understand. If the product fits
            the audience, I can explain it in my own voice and make it feel natural in the video
          </p>
          <p className="mt-5 text-sm font-medium text-frost-300">
            Direct email:{' '}
            <a className={theme.text.accentLink} href={MAILTO_SPONSORSHIP_URL}>
              {SPONSORSHIP_EMAIL}
            </a>
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal delay={index * STAGGER_DELAY_SECONDS} key={value.title}>
              <article className={theme.surface.card}>
                <CheckCircle2 aria-hidden="true" className={`h-5 w-5 ${theme.icon.accent}`} />
                <h3 className={theme.text.cardTitle}>{value.title}</h3>
                <p className={`mt-4 ${theme.text.cardBody}`}>{value.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
)

SponsorshipSection.displayName = 'SponsorshipSection'
