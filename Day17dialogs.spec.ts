import { test } from "@playwright/test";

test("Dialogues", async ({ page }) => {

    page.on("dialog", async(d)=>{
        await page.waitForTimeout(2000)
        if(d.type() =="alert"){
            await d.accept("")
        }
        else if(d.type() == "confirm"){
            await d.dismiss()
            await d.message()
        }
        else if(d.type() == 'prompt'){
            // await d.accept("hello")
            if (d.defaultValue()== "Harry Potter"){
                console.log(await d.defaultValue())
                await d.accept(d.defaultValue())
            }else{
                await d.accept("tom")
            }
        }
        
    })
    await page.goto("https://testautomationpractice.blogspot.com/");

    // page.once("dialog", async dialog => {
    //     console.log(dialog.message());
    //     await page.waitForTimeout(2000);
    //     await dialog.accept();
    // });
    await page.locator('button#alertBtn').click();


    // page.once("dialog", async dialog => {
    //     console.log(dialog.message());
    //     await page.waitForTimeout(2000);
    //     await dialog.accept();
    // });
    await page.locator('button#confirmBtn').click();

    // page.once("dialog", async dialog => {
    //     console.log(dialog.message());
    //     await page.waitForTimeout(2000);
    //     await dialog.accept("Prince");
    //     await page.waitForTimeout(1000)
    // });
    await page.locator('button#promptBtn').click();

    await page.waitForTimeout(2000);
});