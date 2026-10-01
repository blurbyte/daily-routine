import { expect, test } from '@playwright/test';

import { BRAG } from '../src/constants/roleActions.js';
import { FRONT_END_ROLE } from '../src/constants/roles.js';

async function showQuote(page) {
  await page.goto(`/${FRONT_END_ROLE}`);
  await page.getByTestId(`${FRONT_END_ROLE}-${BRAG}-button`).click();
  await expect(page).toHaveURL(new RegExp(`/${FRONT_END_ROLE}/${BRAG}/.+`));
}

test.describe('Quote bubble', () => {
  test.describe('without Web Share API', () => {
    test.beforeEach(async ({ page }) => {
      await page.addInitScript(() => {
        // Web Share API availability depends on the OS
        delete Navigator.prototype.share;

        window.openCalls = [];
        window.open = (...args) => window.openCalls.push(args);
      });
      await showQuote(page);
    });

    test('should open suitable Facebook share window', async ({ page }) => {
      await page.getByTestId('facebook-share-button').click();

      const [shareUrl] = await page.evaluate(() => window.openCalls[0]);
      expect(shareUrl).toContain('http://www.facebook.com/');
    });

    test('should open suitable Twitter share window', async ({ page }) => {
      await page.getByTestId('twitter-share-button').click();

      const [shareUrl] = await page.evaluate(() => window.openCalls[0]);
      expect(shareUrl).toContain('http://www.twitter.com/');
    });
  });

  test.describe('with Web Share API', () => {
    test.beforeEach(async ({ page }) => {
      await page.addInitScript(() => {
        window.shareCalls = [];
        Navigator.prototype.share = data => {
          window.shareCalls.push(data);

          return Promise.resolve();
        };
      });
      await showQuote(page);
    });

    test('should share current url', async ({ page }) => {
      await page.getByRole('button', { name: 'Share on social media' }).click();

      const share = await page.evaluate(() => window.shareCalls[0]);
      expect(share.url).toEqual(page.url());
    });
  });

  test.describe('copy button', () => {
    test.use({ permissions: ['clipboard-read', 'clipboard-write'] });

    test('should show notification and copy the quote', async ({ page }) => {
      await showQuote(page);
      const quote = page.getByTestId('quote');
      // New bubble is ready once it shows the copy button, previous one stays until its leave animation ends
      await expect(page.getByTestId('copy-to-clipboard-button')).toBeVisible();
      await expect(quote).toHaveCount(1);
      // Long quotes are truncated on the screen
      const visibleQuote = (await quote.textContent()).replace(/\.\.\.$/, '');

      await page.getByTestId('copy-to-clipboard-button').click();

      await expect(page.getByTestId('copy-notification')).toBeVisible();
      await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toContain(visibleQuote);
    });
  });
});
