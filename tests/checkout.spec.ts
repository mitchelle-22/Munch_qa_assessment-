// Import Playwright test runner and assertions
import { test, expect } from '@playwright/test';

test('Complete checkout workflow end-to-end', async ({ page }) => {
  // 1. Navigate to Swag Labs
  await page.goto('https://www.saucedemo.com/');

  // 2. Login with valid credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 3. Add an item to the cart
  // Using the first available product
  await page.locator('.btn_inventory').first().click();

  // 4. Go to the cart
  await page.click('.shopping_cart_link');

  // 5. Proceed to checkout
  await page.click('#checkout');

  // 6. Fill in checkout information
  await page.fill('#first-name', 'Michelle');
  await page.fill('#last-name', 'Tester');
  await page.fill('#postal-code', '0001');

  // 7. Click Continue to be redirected to the checkout overview
  await page.click('#continue');

  // 8. Verify that Payment Information,Shipping Information and Price Total with tax are displayed
  await expect(page.locator('.summary_tax_label')).toBeVisible();
  await expect(page.locator('.summary_total_label')).toBeVisible();

  // 9. Complete the checkout
  await page.click('#finish');

  // 10. Assert successful checkout message
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

  // 11. Capture screenshot as evidence of successful checkout
  await page.screenshot({
    path: 'screenshots/checkout-success.png',
    fullPage: true
  });
});
