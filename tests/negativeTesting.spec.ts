// Import Playwright test runner and assertion utilities
import { test, expect } from '@playwright/test';

test('Login fails with invalid credentials', async ({ page }) => {
  // 1. Navigate to Swag Labs
  await page.goto('https://www.saucedemo.com/');

  // 2. Enter invalid login credentials
  await page.fill('#user-name', 'michelle');
  await page.fill('#password', 'tester');
  await page.click('#login-button');

  // 3. Assert error message is displayed
  // Swag Labs shows an error container with data-test="error"
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();

  // 4. Optional: Assert error message text contains expected wording
  await expect(errorMessage)
    .toContainText('Username and password do not match');

  // 5. Capture screenshot for evidence
  await page.screenshot({
    path: 'screenshots/login-invalid-credentials.png',
    fullPage: true
  });
});
/* ######################################  Negative  Testing For Checkout ###############################################################################  */

test('Checkout validation error when required fields are empty', async ({ page }) => {
  // 1. Navigate to Swag Labs
  await page.goto('https://www.saucedemo.com/');

  // 2. Login with valid credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 3. Add one item to the cart
  await page.locator('.btn_inventory').first().click();

  // 4. Go to cart
  await page.click('.shopping_cart_link');

  // 5. Proceed to checkout
  await page.click('#checkout');

  // 6. Attempt to continue WITHOUT filling in user details
  await page.click('#continue');

  // 7. Assert validation error is displayed
  const validationError = page.locator('[data-test="error"]');
  await expect(validationError).toBeVisible();

  // 8. Assert error message indicates missing information
  await expect(validationError)
    .toContainText('First Name is required');

  // 9. Capture screenshot for evidence
  await page.screenshot({
    path: 'screenshots/checkout-validation-error.png',
    fullPage: true
  });
});
