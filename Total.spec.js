import { test, chromium } from '@playwright/test';

test('Find least price', async () => {

    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext({
        userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });

    const page = await context.newPage();

    await page.goto('https://www.myntra.com/boy-tshirts');

    await page.waitForTimeout(5000);

    console.log(await page.title());

    await browser.close();
});