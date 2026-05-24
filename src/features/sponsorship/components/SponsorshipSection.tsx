import { CheckCircle2 } from 'lucide-react'
import { memo } from 'react'

import { Button, Reveal, Section } from '@/components'
import { MAILTO_SPONSORSHIP_URL, SECTION_IDS, STAGGER_DELAY_SECONDS } from '@/constants'
import type { SponsorshipSectionProps } from '@/features/sponsorship/types'

export const SponsorshipSection = memo(
  ({ values }: SponsorshipSectionProps): React.JSX.Element => (
    <Section
      className="bg-gradient-to-b from-transparent via-obsidian-800/45 to-transparent"
      id={SECTION_IDS.sponsorship}
      labelledBy="sponsorship-title"
    >
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-medium text-ember-300">Sponsorship</p>
          <h2
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-frost-100 sm:text-6xl"
            id="sponsorship-title"
          >
            A sponsor spot should feel like part of the video.
          </h2>
          <p className="mt-6 text-lg leading-8 text-frost-300">
            I want sponsor integrations to feel useful and easy to understand. If the product fits
            the audience, I can explain it in my own voice and make it feel natural in the video.
          </p>
          <Button
            ariaLabel="Email Roem about a sponsorship"
            className="mt-8"
            href={MAILTO_SPONSORSHIP_URL}
          >
            Email about sponsorship
          </Button>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal delay={index * STAGGER_DELAY_SECONDS} key={value.title}>
              <article className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-ember-300" />
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
