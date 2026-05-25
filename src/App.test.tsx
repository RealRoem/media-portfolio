import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { sponsorshipNavItem } from '@/data'
import { renderWithProviders } from '@/test/utils'

import { App } from './App'

describe('App', (): void => {
  describe('when the portfolio loads', (): void => {
    it('should render the primary sponsorship CTA', async (): Promise<void> => {
      renderWithProviders(<App />)

      expect(
        await screen.findAllByRole('link', { name: sponsorshipNavItem.label })
      ).not.toHaveLength(0)
    })
  })
})
