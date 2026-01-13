import {test,} from '@playwright/test'

//test.use({baseURL:"https://example.com"})

test.beforeAll(()=>{console.log("Running Hook Before All")})
test.afterAll(()=>{console.log("Running Hooks After All")})
test.beforeEach(({},testinfo)=>{console.log("Running Hooks Before Each in TF2",testinfo.title)})
test.afterEach(({},testinfo)=>{console.log("Running Hooks After Each in TF2",testinfo.title)})

test("testcase4 TF2: Login",{tag: '@smoke'},async ({page,browser},testinfo)=>{
    await page.goto("https://github.com/")
    await page.waitForTimeout(2000)
    //console.log("Global level" ,testinfo.config)
    //console.log("Project level", testinfo.project)
    console.log(testinfo.title,testinfo.workerIndex)
    console.log(testinfo.title,testinfo.parallelIndex)
})

test("TC5",async ({page})=>{
    await page.goto("https://www.microsoft.com//")
    await page.waitForTimeout(2000)
})

test("TC6",async ({page})=>{
    await page.goto("https://npmjs.com/")
    await page.waitForTimeout(2000)
})