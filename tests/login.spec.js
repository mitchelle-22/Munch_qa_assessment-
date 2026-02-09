import { test, expect } from '@playwright/test';   //This is for importing test runner Playwright's and assertion library

// Define a test case
test('Login with valid credentials and load product page', async ({ page }) => {
    // 1. Navigate to the Swag Labs login page
    await page.goto('https://www.saucedemo.com/');

      // 2. Fill in the username field
  // '#user-name' is the id of the username input
  await page.fill('#user-name', 'standard_user');

  // 3. Fill in the password field
  // '#password' is the id of the password input
  await page.fill('#password', 'secret_sauce');

  // 4. Click the login button
  // '#login-button' is the id of the login button
  await page.click('#login-button');

  // 5. Assert that we are redirected to the inventory (products) page
  // The URL should contain 'inventory.html' after successful login
  await expect(page).toHaveURL(/inventory.html/);

  // 6. Assert that the product list is visible on the page
  // '.inventory_list' is the container holding all products
  await expect(page.locator('.inventory_list')).toBeVisible();

  // 7. Take a screenshot of the product page
  // This helps with debugging and is part of the task requirement
  await page.screenshot({
    path: 'screenshots/product-page.png',
    fullPage: true
  });
});