import { test, expect } from '@playwright/test';

test('Sort products by price low to high and validate title-price pairing', async ({ page }) => {
    // 1. Navigate and login
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // 2. Select "Price (low to high)"
    await page.selectOption('.product_sort_container', 'lohi');

    // 3. Capture all product items
    const items = page.locator('.inventory_item');

    const productData: { title: string; price: number }[] = [];  // my array 


    // 4. Loop through each product and capture title + price
    const count = await items.count();

    for (let i = 0; i < count; i++) {
        const title = await items
            .nth(i)
            .locator('.inventory_item_name')
            .innerText();

        const priceText = await items
            .nth(i)
            .locator('.inventory_item_price')
            .innerText();

        const price = parseFloat(priceText.replace('$', ''));

        productData.push({ title, price });
    }

    // 5. Extract prices for sorting validation
    const prices = productData.map(item => item.price);
    const sortedPrices = [...prices].sort((a, b) => a - b);

    // 6. Assert prices are sorted correctly
    expect(prices).toEqual(sortedPrices);

    // 7. Assert title + price correctness
    // (Ensure no title is missing or price is invalid)
    productData.forEach(product => {
        expect(product.title).not.toBe('');
        expect(product.price).toBeGreaterThan(0);

    });
    await page.screenshot({
        path: 'screenshots/product-sorting-low-to-high.png',
        fullPage: true
    });
});
