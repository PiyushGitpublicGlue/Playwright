import {test} from '@playwright/test'

test("TC1",async ({page})=>{ //browser b1, context c1=b1.newContext(), page p1=c1.newPage()
    await page.goto("https://google.com")
})

test("TC2",async ({page})=>{ //browser b1, context c2=b1.newContext(), page p2=c2.newPage()
    await page.goto("https://google.com")
})