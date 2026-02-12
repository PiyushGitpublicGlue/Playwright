import {expect, test} from "@playwright/test"
import LoginPom from "../pom/loginPom"
import HomePom from "../pom/homePom"
import ProductPOM from "../pom/productPom"
import CartPOM from "../pom/cartPom"
import CheckoutPOM from "../pom/checkoutPom"
import SuccessPOM from "../pom/successPom"
import { readJSonDataForTestCase } from "../utils/fileUtils"
import * as path from "path"
import { LoginDataLayer } from "../datacontrollerLayer/loginDataLayer"
import LoginInputDao from "../doa/inputDao/loginInputDao"
import { ProductDataLayer } from "../datacontrollerLayer/productDataLayer"
import ProductInoutDao from "../doa/inputDao/productInputDao"
import { CheckoutDataLayer } from "../datacontrollerLayer/checkoutDataLayer"
import CheckoutInputDao from "../doa/inputDao/checkoutInputDoa"
import SuccessOutputDao from "../doa/outputDao/successOutputDao"
import { validateSuccessPage } from "../verificationLayer/successPageAssertion"

test("Login",async({page})=>{
    //Login page

    let loginPOM = new LoginPom(page)
    //let homePOM = new HomePom(page)

    await loginPOM.goto()

    const filePath = path.join(process.cwd(),'/tests/testData/e2e.json')
    const testData = readJSonDataForTestCase(filePath,"TC1")

    const loginData: LoginDataLayer = testData["login"]
    const loginInputDao: LoginInputDao = new LoginInputDao(loginData)

    const productData: ProductDataLayer = testData["product"]
    const productInputDao: ProductInoutDao = new ProductInoutDao(productData)

    const checkoutData: CheckoutDataLayer = testData["checkout"]
    const checkoutInoutDoa: CheckoutInputDao = new CheckoutInputDao(checkoutData)

    //Json -> JS Object -> goes through complaince check using DataController Layer -> Dao Layer -> POM

    //await (await (await (await loginPOM.fillUserName("test@test.com")).fillPassword("Test@123")).submit()).clickProductLink() //method chaining
    let homePOM: HomePom = await loginPOM.submitCredentials(loginInputDao)
    let productPOM: ProductPOM = await homePOM.clickProductLink()
    let cartPOM: CartPOM = await productPOM.fillProductDetails(productInputDao)
    let products: string[][] = await cartPOM.getProducts()
    products.forEach((product)=>{
        console.log("product data is : ",product)
    })
    let checkoutPOM : CheckoutPOM = await cartPOM.clickCheckoutBtn()
    let successPOM : SuccessPOM = await checkoutPOM.fillAddressDetails(checkoutInoutDoa)
    let successOutputDao: SuccessOutputDao = await successPOM.getSuccessOutput()
    validateSuccessPage(loginInputDao,successOutputDao)
    //let actualEmailID = await successPOM.getEmailIDText()
    //let expectedEmailID = loginInputDao.getUserName()
    //expect(expectedEmailID).toEqual(actualEmailID)



    //transition 
    //login -> Home page //page chaining

    await page.pause()
})