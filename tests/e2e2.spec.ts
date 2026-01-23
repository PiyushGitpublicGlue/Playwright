import { BrowserContext, test,Cookie } from "playwright/test";

test.skip("TC1",async ({browser})=>{})

test.skip("TC2",async ({context})=>{
    //let c1 = await browser.newContext()
    let p1 = await context.newPage()
    await p1.goto("https://example.com")

    let p2 = await context.newPage()
    await p2.goto("https://youtube.com/")

    let pages = context.pages()

    /*pages.forEach(async (p)=>{
        let title = await p.title()
        console.log("Page titile is : ",title)
    })*/
   console.log(pages.length)

   for(const p of context.pages()){
        let title = await p.title()
        console.log("Title of pages is : "+title)
   }

   const c1:Cookie = {
    name: 'GPS2',
    value: '1',
    domain: '.youtube.com',
    path: '/',
    expires: 1768567205.084292,
    httpOnly: true,
    secure: true,
    sameSite: 'Lax'
   }

   await context.addCookies([c1])

   let cookies = await context.cookies()
   for(const c of cookies){
    console.log("cookies is : ",cookies)
   }

   await context.clearCookies()
   await p2.pause()

})

//day 9
// Listner in browser context

test.skip("browser-context-listner", async({context,browser})=>{
    context.on("close",()=>{
        console.log("browser context got closed")
    })
    console.log("Execution Started !")
    const p1 = await context.newPage()
    await p1.goto("https://youtube.com")
    await context.close()
    console.log("Execution Ended !")
    const c2 = await browser.newContext()
    const p2 = await c2.newPage()
    console.log("Execution Started !")
    await p2.goto("https://microsoft.com")
    await c2.close()
    console.log("Execution Ended !")

})

test.skip("browser-context-listner2",async ({context})=>{
    context.on('page',()=>{
        console.log("New page created !")
    })

    let p1 = await context.newPage()
    let p2 = await context.newPage()
})

test.skip("testing1",async ({context})=>{
    context.on('console',async(cm)=>{
        console.log(cm.text())
    })
    let p1 = await context.newPage()
    await p1.goto("https://youtube.com")
    await p1.evaluate(()=>{
        console.log("Piyush Saxena")
    })
    await p1.pause()
})

test.skip("test case7",async({context})=>{
    // step1 - lister registered
    let p = context.waitForEvent('page')

    // step2 - event fired and lister notified
    let p1 = await context.newPage()
    await (await p).goto("https://youtube.com")

    let p2 = await context.newPage()
    await (await p).goto("https://youtube.com")

    await (await p).pause()
})

test.skip("tc8",async({page})=>{
    await page.waitForTimeout(2000)
    await page.context().newPage()
    await page.waitForTimeout(2000)
    let b1 = await page.context().browser()
    let c1 = await b1?.newContext()
    let p1 = await c1?.newPage()
    await p1?.goto("https:youtube.com")
    await page.waitForTimeout(2000)
})

test("tc9", async({page})=>{
    await page.goto("https://demo.evershop.io/account/login")
    await page.waitForTimeout(3000)
    await page.locator("#field-email").fill("test@test.com")
    await page.locator("#field-password").fill("Test@123")
    page.locator("button.button.primary").click()
    await page.waitForTimeout(3000)
    //await page.pause()
})