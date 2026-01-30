import { TIMEOUT } from "node:dns";
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

test.skip("tc9", async({page})=>{
    await page.goto("https://demo.evershop.io/account/login")
    await page.waitForTimeout(3000)
    await page.locator("#field-email").fill("test@test.com")
    await page.locator("#field-password").fill("Test@123")
    page.locator("button.button.primary").click()
    await page.waitForTimeout(3000)
    //await page.pause()

    // method getByAltText()
    page.getByAltText("Piyush Saxena",{exact:false})

})

test.skip("tc10", async ({page})=>{
    await page.goto("https://demo.evershop.io/account/login")
    // method getByPlaceholder()
    await page.getByPlaceholder("Email",{exact: true}).fill("test@test.com")
    await page.waitForTimeout(2000)
})

test.skip("tect case 11",async({page})=>{
    let browsercontext = page.context()
    await page.goto("https://youtube.com")
    await page.reload()
    console.log("page is opened, URL is ",page.url())
    let tileIs = await page.title()
    console.log("page title is : ",tileIs)
    await page.goto("https://microsoft.com")
    await page.goBack()
    await page.goForward()
    let closed = page.isClosed()
    console.log("is browser closed : ", closed)
    await page.close()
    closed = page.isClosed()
    console.log("is browser closed now ?: ", closed)
    let p2 = await browsercontext.newPage()
    await p2.goto("https://www.nvidia.com/en-in/")

})

test.skip("test case 12", async({page})=>{
    await page.goto("https://youtube.com")
    let p1 = await page.context().newPage()
    let p2 = await page.context().newPage()
    await page.goto("https://microsoft.com")
    await page.bringToFront()
    console.log("Size before: ",page.viewportSize())
    await page.setViewportSize({width:500,height:400})
    console.log("Size after: ",page.viewportSize())
})

test.skip("test case 13", async({page})=>{
    page.on('domcontentloaded', async (page)=>{
        console.log("document loaded !!")
    })

    await page.goto("https://youtube.com")
    await page.goto("https://microsoft.com")
})

test.skip("test case 14", async({page})=>{
    await page.goto("https://demo.evershop.io/account/login")
    /*
    let l1 = page.locator("#field-email")
    await l1.fill("Piyush")
    await l1.clear()

    let bb = await l1.boundingBox()
    console.log("boundary boxing : ",bb)
    */
   let l1 = page.locator("input")
   let count = await l1.count()
   console.log("count : ",count)
   for(const ele of await l1.all()){
    await ele.fill("Sakshi")
   }
   await l1.nth(0).fill("Piyush")

   let buttonloc =  page.locator("button[class='button primary']")
   let classname = await buttonloc.getAttribute("class")
   console.log("Class name is : ",classname)

   console.log("InnerText is : ",await buttonloc.innerText())
   console.log("InnerHTML is : ",await buttonloc.innerHTML())

   console.log("IsEnabled : ",await buttonloc.isEnabled())
   console.log("IsHidden : ",await buttonloc.isHidden())
})

test.skip("test case 15",async({page})=>{
    //test.setTimeout(5000)
    await page.goto("https://demo.evershop.io/account/login")
    let l1 = page.locator("#field-email")
    await l1.fill("test@test.com")
    let l2 = page.locator("#field-password")
    await l2.fill("Test@123")
    let l3 = page.locator("//button[@type='button']").last()
    await l3.click()

    await page.waitForTimeout(5000)

    let l4 = page.locator("//h3").nth(1)
    await l4.isVisible()

    await page.goto("https://demo.evershop.io/checkout")
    await page.waitForTimeout(10000)
    await page.locator("//select[@id='field-shippingAddress.country']").selectOption("US")
    await page.waitForTimeout(5000)
    await page.locator("//select[@id='field-shippingAddress.country']").selectOption({label:"United States"})
})

test("test case 16", async({page})=>{
    await page.goto("https://demo.evershop.io/account/login")
    let l1 = page.locator("#field-email")
    await l1.fill("test@test.com")
    let l2 = page.locator("#field-password")
    await l2.fill("Test@123")
    let l3 = page.locator("//button[@type='button']").last()
    await l3.click()

    await page.waitForTimeout(5000)

    await page.goto("https://demo.evershop.io/cart")

    let colCount = await page.locator("table thead tr th").count()

    console.log("Col count is : ",colCount)

    let col = await page.locator("table thead tr th").all()

    let colNames : string[] = []

    for(const ele of col){
        let colName = await ele.locator("span").innerText()
        colNames.push(colName)
        //console.log("Coloun name is : ",colNames)
    }

    colNames.forEach((colname)=>{
        console.log("Col name is : ",colname)
    })

    let rowCount = await page.locator("table tbody tr").count()
    console.log("Row count is : ",rowCount)

})