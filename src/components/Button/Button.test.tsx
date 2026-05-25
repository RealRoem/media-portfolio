import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '@/test/utils'

import { Button } from './Button'

describe('Button', (): void => {
  describe('when rendered as a CTA link', (): void => {
    it('should expose an accessible link target', (): void => {
      renderWithProviders(
        <Button ariaLabel="Email sponsors" href="mailto:sponsor@realroem.com">
          Contact
        </Button>
      )

      expect(screen.getByRole('link', { name: 'Email sponsors' })).toHaveAttribute(
        'href',
        'mailto:sponsor@realroem.com'
      )
    })
  })
})
