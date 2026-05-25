import { expect, test } from '@playwright/test'

test.describe('homepage', (): void => {
  test('shows the sponsor-focused hero', async ({ page }): Promise<void> => {
    await page.goto('/')

    await expect(
      page.getByRole('heading', {
        name: /i make roblox videos people use while they play/i,
      })
    ).toBeVisible()
    await expect(page.getByRole('link', { name: 'Contact for sponsorship' })).toBeVisible()
  })
})
