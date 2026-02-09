// Import Playwright test runner and assertion utilities
import { test, expect } from '@playwright/test';

test('Add and remove items from the cart', async ({ page }) => {
  // 1. Navigate to Swag Labs
  await page.goto('https://www.saucedemo.com/');

  // 2. Login with valid credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 3. Locate all "Add to cart" buttons
  // Each product has one button with class '.btn_inventory'
  const addToCartButtons = page.locator('.btn_inventory');

  // 4. Add first 3 items to the cart using a loop
  for (let i = 0; i < 3; i++) {
    await addToCartButtons.nth(i).click();
  }

  // 5. Validate the cart badge shows "3"
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('3');

  // 6. Navigate to the cart page
  await page.click('.shopping_cart_link');

  // 7. Remove 1 item from the cart
  // '.cart_button' represents the Remove button in the cart
  await page.locator('.cart_button').first().click();

  // 8. Assert that only 2 items remain in the cart
  const cartItems = page.locator('.cart_item');
  await expect(cartItems).toHaveCount(2);

  // 9. Capture screenshot after cart update
  await page.screenshot({
    path: 'screenshots/cart-after-remove.png',
    fullPage: true
  });
});
