import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderWithProviders } from '@/test/utils'

import { Button } from './Button'

describe('Button', (): void => {
  describe('when rendered as a CTA link', (): void => {
    it('should expose an accessible link target', (): void => {
      const ariaLabel = 'Test accessible action'
      const href = '#target-action'

      renderWithProviders(
        <Button ariaLabel={ariaLabel} href={href}>
          Action
        </Button>
      )

      expect(screen.getByRole('link', { name: ariaLabel })).toHaveAttribute('href', href)
    })
  })
})
