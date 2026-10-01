import { expect, test } from '@playwright/test';

test.describe('Settings panel', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/frontend');
  });

  test('gear button should open settings panel', async ({ page }) => {
    await page.getByTestId('gear-button').click();

    await expect(page.getByTestId('side-panel')).toBeVisible();
  });

  test('close button should close settings panel', async ({ page }) => {
    await page.getByTestId('gear-button').click();
    await page.getByTestId('close-button').click();

    await expect(page.getByTestId('side-panel')).toHaveCount(0);
  });

  test.describe('gender settings', () => {
    test.beforeEach(async ({ page }) => {
      await page.getByTestId('gear-button').click();
    });

    test('should show flower when female gender is selected', async ({ page }) => {
      await page.getByTestId('female-button').click();

      await expect(page.getByTestId('gender-flower-icon')).toHaveCount(1);
    });

    test('should hide flower when male gender is selected', async ({ page }) => {
      await page.getByTestId('female-button').click();
      await expect(page.getByTestId('gender-flower-icon')).toHaveCount(1);

      await page.getByTestId('male-button').click();

      await expect(page.getByTestId('gender-flower-icon')).toHaveCount(0);
    });

    test('should remember selected gender after page reload', async ({ page }) => {
      await page.getByTestId('female-button').click();

      await page.reload();

      await expect(page.getByTestId('gender-flower-icon')).toHaveCount(1);
    });
  });
});
