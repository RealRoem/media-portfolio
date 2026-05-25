import { Mail } from 'lucide-react'
import { memo } from 'react'

import { Button, Reveal, Section } from '@/components'
import { MAILTO_SPONSORSHIP_URL, SECTION_IDS, SPONSORSHIP_EMAIL } from '@/constants'
import { CONTACT_BUTTON_CLASSES } from '@/features/contact/constants'
import type { ContactSectionProps } from '@/features/contact/types'
import { cx } from '@/utils'

export const ContactSection = memo(
  ({ links }: ContactSectionProps): React.JSX.Element => (
    <Section className="pb-16" id={SECTION_IDS.contact} labelledBy="contact-title">
      <Reveal>
        <div className="rounded-lg border border-champagne-200/15 bg-white/[0.055] p-8 text-center shadow-panel backdrop-blur-xl sm:p-12 lg:p-16">
          <Mail aria-hidden="true" className="mx-auto h-8 w-8 text-champagne-300" />
          <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-champagne-300">
            Contact
          </p>
          <h2
            className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-frost-100 sm:text-6xl"
            id="contact-title"
          >
            Tell me if you are interested
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-frost-300">
            Send the product, the goal, the timeline, and the links. I will look at how it can fit
            naturally into the kind of videos I already make
          </p>
          <a
            aria-label="Email sponsor at realroem dot com"
            className="mx-auto mt-6 inline-flex rounded-full border border-youtube-500/35 bg-youtube-500/10 px-5 py-3 text-sm font-semibold text-frost-100 transition duration-300 hover:border-youtube-400/70 hover:bg-youtube-500/18 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne-300"
            href={MAILTO_SPONSORSHIP_URL}
          >
            {SPONSORSHIP_EMAIL}
          </a>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            {links.map((link, index) => (
              <Button
                ariaLabel={link.ariaLabel}
                className={cx(CONTACT_BUTTON_CLASSES[link.brand])}
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
