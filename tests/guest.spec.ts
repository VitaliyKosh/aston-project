import { test, expect } from '@playwright/test';

test('guest test', async ({ page, baseURL }) => {
    if (!baseURL) {
        throw new Error('no base url');
    }

    await page.goto('https://aston-iphone.netlify.app/');

    // await page.waitForTimeout(5000);

    console.log(await page.content());

    await page.getByPlaceholder('Поиск').click();
    await page.getByPlaceholder('Поиск').fill('3gs');
    await page.getByPlaceholder('Поиск').press('Enter');
    await page.getByRole('link', { name: 'iPhone 3GS' }).click();

    await expect(page.getByText('iPhone 3GS')).toBeVisible();
    await expect(page.locator('img')).toBeVisible();
    await expect(page.getByText('The fastest, smartest phone yet.')).toBeVisible();
    await expect(page.getByText('Phone 3GS - третий смартфон от Apple')).toBeVisible();
});
