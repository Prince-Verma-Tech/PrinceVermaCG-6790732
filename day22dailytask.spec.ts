import {test} from '@playwright/test';


test("amazonE2E", async({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.locator('input#twotabsearchtextbox').fill('ram');
    await page.locator('input#twotabsearchtextbox').press('Enter');


})