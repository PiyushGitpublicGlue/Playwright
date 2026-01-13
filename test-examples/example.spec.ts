import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
  test.setTimeout(120000)
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.waitForTimeout(6000);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.waitForTimeout(6000);
});
/*
test('tc3',async(params)=>{
  params.page.goto("https://google.com");
  await params.page.waitForTimeout(6000)
});
*/

test.skip("tc4",async({page})=>{
  await page.goto("http://10.131.73.233/PanaCIMMC")
  await page.waitForTimeout(6000)
  let context = page.context()
  let newpage = await context.newPage()
  await newpage.goto("http://10.131.73.203/panacimpt")
  await page.waitForTimeout(6000)

  let browser = context.browser()
  let newc2 = browser?.newContext()
  let page2 = await newc2?.newPage()
  await page2.goto("http://10.131.73.233/PanaCIMMC")

})