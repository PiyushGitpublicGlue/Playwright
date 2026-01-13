import {test,} from '@playwright/test'

//test.use({baseURL:"https://example.com"})
test("testcase1: Login",{tag: '@smoke'},async ({page,browser},testinfo)=>{
    await page.goto("/")
    await page.waitForTimeout(2000)
    console.log("Global level" ,testinfo.config)
    console.log("Project level", testinfo.project)
})

test("TC2",async ({page})=>{
    await page.goto("https://demo.evershop.io/")
    await page.waitForTimeout(2000)
})

test("TC3",async ({page})=>{
    await page.goto("https://example.com/")
    await page.waitForTimeout(2000)
})