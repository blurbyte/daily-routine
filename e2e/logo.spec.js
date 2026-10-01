import { expect, test } from '@playwright/test';

import { FRONT_END_ROLE } from '../src/constants/roles.js';

test.describe('Logo', () => {
  test('should have icon', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('logo').locator('svg')).toBeVisible();
  });

  test('should have correct href attribute', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('logo')).toHaveAttribute('href', '/');
  });

  test('should redirect to the home page when clicked', async ({ page }) => {
    await page.goto(`/${FRONT_END_ROLE}`);

    await page.getByTestId('logo').click();

    await expect(page).toHaveURL('/');
  });
});
