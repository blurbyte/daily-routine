import { expect, test } from '@playwright/test';

test.describe('Page not found', () => {
  test('page should contain header with `404 - Page not found`', async ({ page }) => {
    await page.goto('/invalidurl');

    await expect(page.locator('h1')).toContainText('404 - Page not found');
  });

  test('quote bubble should contain error message when url is `/frontend/brag/invalidmessage`', async ({ page }) => {
    await page.goto('/frontend/brag/invalidmessage');

    // Initial bubble is still on the page until its leave animation ends
    await expect(page.getByTestId('quote-error-message')).toHaveCount(1);
    await expect(page.getByTestId('quote-error-message').locator('strong')).toContainText('4o4 Error');
  });

  test('quote bubble should contain error message when url is `/frontend/brag`', async ({ page }) => {
    await page.goto('/frontend/brag');

    await expect(page.getByTestId('quote-error-message')).toHaveCount(1);
    await expect(page.getByTestId('quote-error-message').locator('strong')).toContainText('4o4 Error');
  });

  test('quote bubble should contain error message when url is `/frontend/invalidpose/invalidmessage`', async ({
    page
  }) => {
    await page.goto('/frontend/invalidpose/invalidmessage');

    await expect(page.getByTestId('quote-error-message')).toHaveCount(1);
    await expect(page.getByTestId('quote-error-message').locator('strong')).toContainText('4o4 Error');
  });

  test('quote bubble should contain error message when url is `/frontend/invalidpose/spiritually-spiritually-leaking-walrus`', async ({
    page
  }) => {
    await page.goto('/frontend/invalidpose/spiritually-spiritually-leaking-walrus');

    await expect(page.getByTestId('quote-error-message')).toHaveCount(1);
    await expect(page.getByTestId('quote-error-message').locator('strong')).toContainText('4o4 Error');
  });

  test('quote bubble should contain error message when url is `/frontend/invalidpose/spiritually-spiritually-leaking-walrus/invalid`', async ({
    page
  }) => {
    await page.goto('/frontend/invalidpose/spiritually-spiritually-leaking-walrus/invalid');

    await expect(page.getByTestId('quote-error-message')).toHaveCount(1);
    await expect(page.getByTestId('quote-error-message').locator('strong')).toContainText('4o4 Error');
  });
});
