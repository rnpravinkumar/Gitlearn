import { test } from '@playwright/test';

test('open myntra', async ({ page }) => {
    await page.goto('https://www.myntra.com/boy-tshirts');

    const totalProductCount = await page.locator('//div[@class="product-price"]').count();

    const totalProductsPrice = page.locator('//div[@class="product-price"]' );

    for (let i = 0; i < totalProductCount; i++) {

        const discountedPrice = await page.locator('//span[@class="product-discountedPrice"]').nth(i).textContent();

        const Products = await totalProductsPrice.nth(i).textContent();

        console.log("Current Product Price:", Products);
        console.log("Discounted Price:", discountedPrice);
    }
});