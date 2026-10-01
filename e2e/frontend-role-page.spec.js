import { expect, test } from '@playwright/test';

import { BRAG, CONFESS } from '../src/constants/roleActions.js';
import { FRONT_END_ROLE } from '../src/constants/roles.js';

test.describe('Front end role page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/${FRONT_END_ROLE}`);
  });

  test(`${BRAG} button should redirect to the /${FRONT_END_ROLE}/${BRAG}`, async ({ page }) => {
    await page.getByTestId(`${FRONT_END_ROLE}-${BRAG}-button`).click();

    await expect(page).toHaveURL(new RegExp(`/${FRONT_END_ROLE}/${BRAG}/.+`));
  });

  test(`${CONFESS} button should redirect to the /${FRONT_END_ROLE}/${CONFESS}`, async ({ page }) => {
    await page.getByTestId(`${FRONT_END_ROLE}-${CONFESS}-button`).click();

    await expect(page).toHaveURL(new RegExp(`/${FRONT_END_ROLE}/${CONFESS}/.+`));
  });

  test('should show the same quote after page reload', async ({ page }) => {
    const quote = page.getByTestId('quote');

    await page.getByTestId(`${FRONT_END_ROLE}-${BRAG}-button`).click();
    await expect(page).toHaveURL(new RegExp(`/${FRONT_END_ROLE}/${BRAG}/.+`));
    // New bubble is ready once it shows the copy button, previous one stays until its leave animation ends
    await expect(page.getByTestId('copy-to-clipboard-button')).toBeVisible();
    await expect(quote).toHaveCount(1);
    const quoteText = await quote.textContent();

    await page.reload();

    await expect(quote).toHaveText(quoteText);
  });
});
