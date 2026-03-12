import {test,expect} from "@playwright/test";
import { log } from "node:console";

test("",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    // await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")

    // let page=await context.newPage()
    // await page.goto('https://flipkart.com/');
    // await page.waitForTimeout(5000);
    // const closeBtn = page.getByRole('button', { name: '✕' });
    // if (await closeBtn.isVisible()) {
    //     await closeBtn.click();
    // }
    // const searchBox = page.locator('//input[@name="q"]').first();
    // await expect(searchBox).toBeEditable();
    // await searchBox.fill('shoes');
    // await searchBox.press('Enter');
    // let [page2] =await Promise.all([
    //     page.waitForEvent('popup'),
    //     page.locator('//img[@class="MZeksS"]').first().click()
    // ]);
    // await page2.waitForLoadState();
    // console.log(await page2.url());
    // console.log(await page.url());
    // console.log(page);
    // console.log(page2);

    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByPlaceholder('Enter text here').fill("Hello ma'am  :)")
    await page.getByPlaceholder('Filename').fill("hello.txt");
    let [page2] = await Promise.all([
        page.waitForEvent('download'),
        page.locator("button#downloadButton").click()
    ])
    console.log(page);
    console.log(page2);
    
})