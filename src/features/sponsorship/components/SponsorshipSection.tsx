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

export const SponsorshipSection = memo(
  ({ values }: SponsorshipSectionProps): React.JSX.Element => (
    <Section
      className="bg-gradient-to-b from-transparent via-obsidian-800/42 to-transparent"
      id={SECTION_IDS.sponsorship}
      labelledBy="sponsorship-title"
    >
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-champagne-300">
            Sponsorship
          </p>
          <h2
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-frost-100 sm:text-6xl"
            id="sponsorship-title"
          >
            A sponsorship should be relevant
          </h2>
          <p className="mt-6 text-lg leading-8 text-frost-300">
            If the product fits the audience, the conversion rate will be higher, giving your
            company bigger reach, and making my channel more trustworthy for follow-ups
          </p>
          <p className="mt-5 text-sm font-medium text-frost-300">
            Direct email:{' '}
            <a
              className="text-champagne-200 transition-colors duration-300 hover:text-champagne-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-300"
              href={MAILTO_SPONSORSHIP_URL}
            >
              {SPONSORSHIP_EMAIL}
            </a>
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal delay={index * STAGGER_DELAY_SECONDS} key={value.title}>
              <article className="h-full rounded-lg border border-white/10 bg-white/[0.045] p-7 shadow-premium backdrop-blur-xl transition-[border-color,background-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-champagne-200/25 hover:bg-white/[0.065]">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-champagne-300" />
                <h3 className="mt-5 text-2xl font-semibold leading-snug text-frost-100">
                  {value.title}
                </h3>
                <p className="mt-4 leading-7 text-frost-300">{value.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
)

SponsorshipSection.displayName = 'SponsorshipSection'
