import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { navigationItems } from '@/data'
import { renderWithProviders } from '@/test/utils'

import { Navbar } from './Navbar'

describe('Navbar', (): void => {
  describe('when used on mobile', (): void => {
    it('should open and close the navigation menu', async (): Promise<void> => {
      const user = userEvent.setup()
      renderWithProviders(<Navbar />)

      const toggle = screen.getByRole('button')

      await user.click(toggle)
      expect(toggle).toHaveAttribute('aria-expanded', 'true')

      const mobileNavigation = document.querySelector<HTMLElement>('#mobile-navigation')
      const firstNavigationItem = navigationItems[0]

      if (!mobileNavigation) {
        throw new Error('Navbar test requires mobile navigation.')
      }

      await user.click(
        within(mobileNavigation).getByRole('link', {
          name: firstNavigationItem.label,
        })
      )
      expect(toggle).toHaveAttribute('aria-expanded', 'false')
    })
  })
})
