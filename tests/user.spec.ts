import { test, expect } from '@playwright/test';

test('user test', async ({ page, baseURL }) => {
    if (!baseURL) {
        throw new Error('no base url');
    }

    await page.goto(baseURL);

    await page.getByRole('button', { name: 'Регистрация' }).click();
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill('test@test.test');
    await page.locator('input[name="email"]').press('Tab');
    await page.locator('input[name="password"]').fill('testtest');
    await page.locator('input[name="password"]').press('Tab');
    await page.locator('input[name="confirmPassword"]').fill('testtest');
    await page.getByRole('button', { name: 'Зарегистрироваться' }).click();

    await page.locator('div').filter({ hasText: /^iPhone 3G$/ }).first().locator('[class*="addToFavorite"]').click();
    await page.getByRole('link', { name: 'Избранное' }).click();
    await expect(page.getByRole('link', { name: 'iPhone 3G' })).toBeVisible();
    await page.getByRole('button', { name: 'Удалить' }).click();
    await expect(page.getByRole('link', { name: 'iPhone 3G' })).toBeHidden();
});
