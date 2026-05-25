import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { MAILTO_SPONSORSHIP_URL } from '@/constants'
import { contactLinks } from '@/data'
import { renderWithProviders } from '@/test/utils'

import { ContactSection } from './ContactSection'

describe('ContactSection', (): void => {
  describe('when rendered', (): void => {
    it('should show the real sponsorship email and link to it', (): void => {
      renderWithProviders(<ContactSection links={contactLinks} />)

      const sponsorshipLinks = screen
        .getAllByRole('link')
        .filter((link) => link.getAttribute('href') === MAILTO_SPONSORSHIP_URL)

      expect(sponsorshipLinks).toHaveLength(1)
    })

    it('should render configured contact actions with their link targets', (): void => {
      renderWithProviders(<ContactSection links={contactLinks} />)

      contactLinks.forEach((link) => {
        expect(screen.getByRole('link', { name: link.ariaLabel })).toHaveAttribute(
          'href',
          link.href
        )
      })
    })
  })
})
