import { Mail } from 'lucide-react'
import { memo } from 'react'

import { Button, Reveal, Section } from '@/components'
import { SECTION_IDS } from '@/constants'
import type { ContactSectionProps } from '@/features/contact/types'
import { theme } from '@/styles/theme'

export const ContactSection = memo(
  ({ links }: ContactSectionProps): React.JSX.Element => (
    <Section className="pb-16" id={SECTION_IDS.contact} labelledBy="contact-title">
      <Reveal>
        <div className={`${theme.surface.panel} p-8 text-center sm:p-12 lg:p-16`}>
          <Mail aria-hidden="true" className={`mx-auto h-8 w-8 ${theme.icon.accent}`} />
          <p className={`mt-5 ${theme.text.eyebrow}`}>Contact</p>
          <h2 className={`mx-auto max-w-4xl ${theme.text.sectionTitle}`} id="contact-title">
            Tell me if you are interested
          </h2>
          <p className={`mx-auto mt-6 max-w-2xl ${theme.text.body}`}>
            Send the product, the goal, the timeline, and the links. I will look at how it can fit
            naturally into the kind of videos I already make
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            {links.map((link) => (
              <Button
                ariaLabel={link.ariaLabel}
                href={link.href}
                key={link.href}
                variant={link.brand === 'email' ? 'primary' : 'secondary'}
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
