import { test, expect } from '@playwright/test';
import path from 'path';


let context
let page

test.beforeAll(async({browser}) => {
    context = await browser.newContext();
    await context.tracing.start(
    {
        snapshots:true,
        screenshots:true
    });

    page = await context.newPage();
})

test.afterAll(async()=>{
    await context.tracing.stop({path: 'login_test_tarce2.zip' })
    await context.close();
})

test('test', async ({  }) => {
   
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('Demo1.Tester@test.test');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('Tester@123');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();

//   await context.tracing.stop({path: 'login_test_tarce.zip'})
});