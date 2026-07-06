import { test } from '@playwright/test';

test('open Myntra site', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
   await page.waitForTimeout(3000); 
   
});

add neww changes to program neww branch