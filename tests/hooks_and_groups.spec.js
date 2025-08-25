import { test, expect } from '@playwright/test'


test.describe('Smoke Test', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    })

    test('homepage', async ({ page }) => {

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();

    })

    test('logout', async ({ page }) => {

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();

    })

    test.afterEach(async ({ page }) => {
        await page.close()
    })
})