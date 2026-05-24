import { Mail } from 'lucide-react'
import { memo } from 'react'

import { Button, Reveal, Section } from '@/components'
import { SECTION_IDS } from '@/constants'
import type { ContactSectionProps } from '@/features/contact/types'

export const ContactSection = memo(
  ({ links }: ContactSectionProps): React.JSX.Element => (
    <Section className="pb-16" id={SECTION_IDS.contact} labelledBy="contact-title">
      <Reveal>
        <div className="rounded-lg border border-white/10 bg-obsidian-900/80 p-8 text-center shadow-panel sm:p-12 lg:p-16">
          <Mail aria-hidden="true" className="mx-auto h-8 w-8 text-ember-300" />
          <p className="mt-5 text-sm font-medium text-ember-300">Contact</p>
          <h2
            className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-frost-100 sm:text-6xl"
            id="contact-title"
          >
            Tell me what you want viewers to understand.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-frost-300">
            Send the product, the goal, the timeline, and the links. I will look at how it can fit
            naturally into the kind of videos I already make.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            {links.map((link, index) => (
              <Button
                ariaLabel={link.ariaLabel}
                href={link.href}
                key={link.href}
                variant={index === 0 ? 'primary' : 'secondary'}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
)

ContactSection.displayName = 'ContactSection'
