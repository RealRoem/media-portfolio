import { expect, test } from '@playwright/test'

import { SPONSORSHIP_CTA_LABEL } from '../src/constants/copy'

test.describe('homepage', (): void => {
  test('shows the sponsor-focused hero', async ({ page }): Promise<void> => {
    await page.goto('/')

    await expect(page.locator('main h1').first()).toBeVisible()
    await expect(page.getByRole('link', { name: SPONSORSHIP_CTA_LABEL }).first()).toBeVisible()
  })
})
