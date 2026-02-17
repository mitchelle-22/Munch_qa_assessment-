import { test, expect } from '@playwright/test';

test('Sort products by price low to high and validate title-price pairing', async ({ page }) => {
  // 1. Navigate to Swag Labs
  await page.goto('https://www.saucedemo.com/');

  // 2. Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 3. Select "Price (low to high)"
  await page.selectOption('.product_sort_container', 'lohi');

  // 4. The use of allTextContents() to capture ALL product titles and prices using
  const titles = await page
    .locator('.inventory_item_name')
    .allTextContents();

  const pricesText = await page
    .locator('.inventory_item_price')
    .allTextContents();

  // 5. Convert price strings to numbers
  const prices = pricesText.map(price =>
    parseFloat(price.replace('$', ''))
  );

  // 6. Assert prices are sorted low → high
  const sortedPrices = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sortedPrices);

  // 7. Assert title + price correctness  for paring
  expect(titles.length).toBe(prices.length);

  titles.forEach((title, index) => {
    expect(title).not.toBe('');
    expect(prices[index]).toBeGreaterThan(0);
  });

  // 8. Screenshot after validation
  await page.screenshot({
    path: 'screenshots/product-sorting-low-to-high.png',
    fullPage: true
  });
});
