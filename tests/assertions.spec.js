import test, { page, expect } from "@playwright/test";

test('Assertion Demo', async({page})=>{

    await page.goto('https://kitchen.applitools.com/')
    // await page.pause()

    const heading = page.getByRole('heading',{name:'The Kitchen'});

    await expect(heading).toHaveCount(1);

    if (await heading.count() > 0){
        await heading.click()
        console.log('Heading Clicked')
    }
        else {
            console.log('Heading not found')
    }

    //Check element enabled or disabled
    await expect(page.getByRole('heading', {name: 'The Kitchen'})).toBeEnabled()
    // await expect.soft(page.getByRole('heading', {name:'The Kitchen'})).toBeDisabled()
    
    // check element is visible or hidden
    await expect(page.getByRole('heading', {name:'The Kitchen'})).toBeVisible()
    // await expect.soft(page.getByRole('heading', {name:'The Kitchen'})).toBeHidden()

    //check text
    await expect(page.getByRole('heading', {name:'The Kitchen'})).toHaveText('The Kitchen')
    //await expect.soft(page.getByRole('heading', {name:'The Kitchen'})).not.toHaveText('The Kitchen')

    //use attribute
    await expect(page.getByRole('heading', {name:'The Kitchen'})).toHaveAttribute('class',/.*css-dpmy2a/)
    await expect(page.getByRole('heading', {name:'The Kitchen'})).toHaveClass(/.*css-dpmy2a/)

    //check the url and title
    await expect(page).toHaveURL("https://kitchen.applitools.com/")
    await expect(page).toHaveTitle(/.*Kitchen/)

    //check the screenshot
    // await page.pause()
    await expect(page).toHaveScreenshot()
    }
)
