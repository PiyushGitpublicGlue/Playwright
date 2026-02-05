import {test} from "@playwright/test"

test("Login",async({page})=>{
    //Login page
    await page.goto("account/login")
    await page.locator("#field-email").fill("test@test.com")
    await page.locator("#field-password").fill("Test@123")
    await page.locator("botton[type='button']").click()
    //transition 
    //login -> Home page //page chaining

    
    //Home page
    await page.locator(".product__list__name.h5.font-medium").first().click()
    page.pause()
})