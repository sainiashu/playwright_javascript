import{test} from '@playwright/test'

test.skip('Test 1', async({})=>{

})

test('not yet ready', async({page})=>{
    test.fail();
})

test.fixme('To be fix',async({page})=>{
    //..
})

test('slow test', async({page})=>{
    test.slow();
    //this will slow the test execution 3times from the current test execution speed.
})

test('Run only particular test', async({page})=>{
    //Run only particular test
})

//TAGS
test('launch browser @smoke',async({page})=>{
     await page.goto('https://www.saucedemo.com/')
})