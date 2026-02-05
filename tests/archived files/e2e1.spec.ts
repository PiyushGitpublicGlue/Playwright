import {BrowserContext, test} from '@playwright/test'

test("TC1",async ({browser})=>{
    /*
    let browserType = browser.browserType()
    //console.log("Browser Type is :",browserType)
    let c1:BrowserContext = await browser.newContext()
    let c2:BrowserContext = await browser.newContext()
    let p1 = await c1.newPage()
    let p2 = await c2.newPage()
    await p1.goto("https://youtube.com")
    await p2.goto("https://npmjs.com")
    //await p2.pause()
    //await browser.close()
    //await p1.goto("https//microsoft.com")
    //await p2.goto("https//microsoft.com")
    //await page.goto("https://youtube.com")

    let contexts = browser.contexts()
    console.log(contexts.length)
    contexts[0]
    */
   browser.on('disconnected',()=>{
    console.log("Browser is disconnected")
   })
   console.log(browser.isConnected())
   let page1 = await browser.newPage()
   await page1.goto("https://microsoft.com")
   let contexts = browser.contexts()
   console.log(contexts.length)
   console.log(browser.version())
   console.log(browser.isConnected())
   await browser.close()
   console.log(browser.isConnected())

})