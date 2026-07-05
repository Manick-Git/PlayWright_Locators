import {test} from "@playwright/test"

/*
test('Practice locators',async  ({page}) => {

    await page.goto('https://www.saucedemo.com')
    await page.locator("//*[@name='user-name']").fill("standard_user");
    await page.locator("input#password").fill("secret_sauce");

    //await page.locator(".submit-button.btn_action").click()

    await page.locator("input[value='Login']").click()

    await page.locator("text=Sauce LABS Backpack").click()

    await page.locator("id=add-to-cart").click()

    await page.locator("data-test=remove").click()

}) 

test('Practice locators2',async  ({page}) => {

    await page.goto('https://www.saucedemo.com')
    await page.locator(".form_group", {has: page.locator("input#user-name")}).click()
    await page.locator(".form_group", {has: page.locator("input#user-name")}).pressSequentially("standard_user")

    await page.locator(".form_group", {hasNot: page.locator("input#user-name")}).click()
    await page.locator(".form_group", {hasNot: page.locator("input#user-name")}).pressSequentially("secret_sauce")

    await page.locator("input[value='Login']").click()
    //await page.locator("//a", {hasText: "Sauce Labs Backpack"}).click()
    await page.locator(".inventory_item_name", {hasNotText: /Sauce./}).click()

}) 

test('Practice of getby locators',async  ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/login')
    await page.getByLabel("Email:", { exact: true }).fill("testcodeautomate@gmail.com")
    await page.getByPlaceholder("Search store").fill("Apple MacBook Pro 13-inch")
    await page.getByRole("button", { name: "Search" }).click()


    console.log(await page.getByText("New Cust").textContent())
    await page.getByAltText("nopCommerce demo store").click()
    await page.getByTitle("Show products in category Electronics").first().click()

    await page.getByRole("link", { name: "Computers" }).click()

    await page.getByTestId("product-item-4").click()

}) */

test('Practice of getby locators',async  ({ page }) => {

    await page.goto('https://saucedemo.com')
    await page.getByTestId("username").fill("standard_user")
    await page.getByTestId("password").fill("secret_sauce")


})