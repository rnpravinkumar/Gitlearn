import { test } from '@playwright/test';

test('open Myntra site', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
   await page.waitForTimeout(3000); 
   
});

// npx playwright test Playwright/amazon1.spec.js --headed
// npx playwright show-report
//npx playwright show-report