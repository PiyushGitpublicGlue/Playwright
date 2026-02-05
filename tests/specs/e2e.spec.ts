import {test} from "@playwright/test"
import LoginPom from "../pom/loginPom"
import HomePom from "../pom/homePom"

test("Login",async({page})=>{
    //Login page

    let loginPOM = new LoginPom(page)
    //let homePOM = new HomePom(page)

    await loginPOM.goto()
    await (await (await (await loginPOM.fillUserName("test@test.com")).fillPassword("Test@123")).submit()).clickProductLink() //method chaining


    //transition 
    //login -> Home page //page chaining

    await page.pause()
})