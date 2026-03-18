import { test } from "@playwright/test";

test('Custom wait', async({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.waitForFunction(()=>{
        let ele = document.querySelectorAll("cv bn")
        return ele.length>1;

    });

    await page.title()
})