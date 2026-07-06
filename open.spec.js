import { test } from '@playwright/test';

test('open Myntra site', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    
    

}); //npx playwright test open.spec.js

//let //productcount= await page.locator ('//li[@class="product-base"]').count;
//let productcount-await page.locator ('')
//});


//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or text() and not(@class)]