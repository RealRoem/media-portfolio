import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { contactLinks } from '@/data'
import { renderWithProviders } from '@/test/utils'

import { ContactSection } from './ContactSection'

describe('ContactSection', (): void => {
  describe('when rendered', (): void => {
    it('should show the real sponsorship email and link to it', (): void => {
      renderWithProviders(<ContactSection links={contactLinks} />)

      const visibleEmail = screen.getByRole('link', {
        name: 'Email sponsor at realroem dot com',
      })
      const emailButton = screen.getByRole('link', { name: 'Email Roem for sponsorship inquiries' })

      expect(visibleEmail).toHaveTextContent('sponsor@realroem.com')
      expect(visibleEmail).toHaveAttribute(
        'href',
        'mailto:sponsor@realroem.com?subject=Roem%20Sponsorship%20Inquiry'
      )
      expect(emailButton).toHaveAttribute(
        'href',
        'mailto:sponsor@realroem.com?subject=Roem%20Sponsorship%20Inquiry'
      )
    })

    it('should apply brand color classes to Discord and YouTube links', (): void => {
      renderWithProviders(<ContactSection links={contactLinks} />)

      expect(screen.getByRole('link', { name: 'Open Roem Discord community' })).toHaveClass(
        'bg-discord'
      )
      expect(screen.getByRole('link', { name: 'Open Roem YouTube channel' })).toHaveClass(
        'bg-youtube-500'
      )
    })
  })
})
