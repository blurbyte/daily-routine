import { expect, test } from '@playwright/test';

import {
  BACK_END_ROLE,
  BACK_END_ROLE_LABEL,
  DEV_OPS_ROLE,
  DEV_OPS_ROLE_LABEL,
  FRONT_END_ROLE,
  FRONT_END_ROLE_LABEL
} from '../src/constants/roles.js';

test.describe('Landing page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe(`${FRONT_END_ROLE} role button`, () => {
    test('should have correct caption', async ({ page }) => {
      await expect(page.getByTestId(`${FRONT_END_ROLE}-button`)).toHaveText(FRONT_END_ROLE_LABEL);
    });

    test(`should redirect to the /${FRONT_END_ROLE} route`, async ({ page }) => {
      await page.getByTestId(`${FRONT_END_ROLE}-button`).click();

      await expect(page).toHaveURL(`/${FRONT_END_ROLE}`);
    });
  });

  test.describe(`${BACK_END_ROLE} role button`, () => {
    test('should have correct caption', async ({ page }) => {
      await expect(page.getByTestId(`${BACK_END_ROLE}-button`)).toHaveText(BACK_END_ROLE_LABEL);
    });

    test(`should redirect to the /${BACK_END_ROLE} route`, async ({ page }) => {
      await page.getByTestId(`${BACK_END_ROLE}-button`).click();

      await expect(page).toHaveURL(`/${BACK_END_ROLE}`);
    });
  });

  test.describe(`${DEV_OPS_ROLE} role button`, () => {
    test('should have correct caption', async ({ page }) => {
      await expect(page.getByTestId(`${DEV_OPS_ROLE}-button`)).toHaveText(DEV_OPS_ROLE_LABEL);
    });

    test(`should redirect to the /${DEV_OPS_ROLE} route`, async ({ page }) => {
      await page.getByTestId(`${DEV_OPS_ROLE}-button`).click();

      await expect(page).toHaveURL(`/${DEV_OPS_ROLE}`);
    });
  });
});
