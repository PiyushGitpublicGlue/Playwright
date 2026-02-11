import {test} from "@playwright/test"
import LoginPom from "../pom/loginPom"
import HomePom from "../pom/homePom"
import ProductPOM from "../pom/productPom"
import CartPOM from "../pom/cartPom"
import CheckoutPOM from "../pom/checkoutPom"
import SuccessPOM from "../pom/successPom"

test("Login",async({page})=>{
    //Login page

    let loginPOM = new LoginPom(page)
    //let homePOM = new HomePom(page)

    await loginPOM.goto()
    //await (await (await (await loginPOM.fillUserName("test@test.com")).fillPassword("Test@123")).submit()).clickProductLink() //method chaining
    let homePOM: HomePom = await loginPOM.submitCredentials("test@test.com","Test@123")
    let productPOM: ProductPOM = await homePOM.clickProductLink()
    let cartPOM: CartPOM = await productPOM.fillProductDetails("Black","2")
    let products: string[][] = await cartPOM.getProducts()
    products.forEach((product)=>{
        console.log("product data is : ",product)
    })
    let checkoutPOM : CheckoutPOM = await cartPOM.clickCheckoutBtn()
    let successPOM : SuccessPOM = await checkoutPOM.fillAddressDetails("Piyush Saxena","981182","Delhi","City-Delhi","United States","Alabama","202001","Express")




    //transition 
    //login -> Home page //page chaining

    await page.pause()
})