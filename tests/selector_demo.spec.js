import { test , expect } from "@playwright/test"

test('Selector Demo', async({page})=>{
    
    await page.goto("https://www.saucedemo.com/")
    await page.pause()

    await page.locator('id=user-name').fill("standard_user")
    
    await page.locator('xpath = //input[@id="password"]').fill("secret_sauce")
    await page.locator('#login-button').click
}); 