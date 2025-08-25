import { test, expect } from "@playwright/test";

test('demo login test1' , async({page})=>{

    await page.goto("https://demo.applitools.com/")
    // await page.pause()

    await page.locator('id=username').fill("DemoUser")
    await page.getByRole('textbox', { name: 'Enter your password' }).fill("1234")

    // await page.waitForSelector('text = Sign in', {timeout :4000})

    await expect(page.locator('text=Sign in')).toHaveCount(1)
    await page.getByRole('link', {name: 'Sign in'}).click()
});