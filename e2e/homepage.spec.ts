import { expect, test } from '@playwright/test'

test.describe('homepage', (): void => {
  test('shows the sponsor-focused hero', async ({ page }): Promise<void> => {
    await page.goto('/')

    await expect(
      page.getByRole('heading', {
        name: /roblox strategy content sponsors can trust/i,
      })
    ).toBeVisible()
    await expect(page.getByRole('link', { name: 'Contact for sponsorship' })).toBeVisible()
  })
})
