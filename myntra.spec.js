const { test, expect } = require('@playwright/test');

test('to find the maximum products', async ({ page }) => {

    await page.goto('https://www.myntra.com/boy-tshirts');

   await page.locator('a[data-group="kids"]').hover();

  await page.locator ('(//a[text()="T-Shirts"])[1]').click();

   

});