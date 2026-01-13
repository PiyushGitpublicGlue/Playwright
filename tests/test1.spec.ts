import {test,} from '@playwright/test'

//test.use({baseURL:"https://example.com"})
test("testcase1: Login",{tag: '@smoke'},async ({page,browser},testinfo)=>{
    await page.goto("/")
    await page.waitForTimeout(6000)
    console.log("Global level" ,testinfo.config)
    console.log("Project level", testinfo.project)
})