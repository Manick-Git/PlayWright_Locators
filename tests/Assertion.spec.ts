import { test, expect } from '@playwright/test';

test('Assertion validation',async  ({ page }) => {

    await page.goto('https://saucedemo.com')
    await expect(page.locator("input#user-name")).toHaveCount(1)
    await expect(page.locator("[data-test='password']")).toBeEnabled()

    //await expect(page.locator("[data-test='login-button']")).toBeDisabled()
    //await expect.soft(page.locator("[data-test='login-button']")).toBeDisabled()


    await expect(page.locator("[data-test='login-button']")).toBeVisible()
    //await expect(page.locator("[data-test='login-button']")).toBeHidden()
    //await expect.soft(page.locator("[data-test='login-button']")).toBeHidden()


    await expect(page.locator("[data-test='login-button']")).toHaveText('Login')

    await expect(page.locator("[data-test='login-button']")).toHaveAttribute('class', 'submit-button btn_action')

    await expect(page.locator("[data-test='login-button']")).toHaveId('login-button')

    await expect(page.locator("[data-test='login-button']")).toHaveValue('Login')

    //await expect(page.locator("[data-test='login-button']")).toHaveCSS('background-color', 'rgb(0, 125, 255)')

    await expect(page).toHaveTitle('Swag Labs')

    await expect(page).toHaveURL('https://www.saucedemo.com/')

    //await expect(page, "Title not matching").not.toHaveTitle('Swag Labs')




})