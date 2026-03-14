import test from "@playwright/test";
import path from "path";

test("Upload file", async({page})=>{
    console.log(__dirname);
    console.log(__filename);

    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator('#multipleFilesInput').setInputFiles(["D:/CapG_T7A_TasksClass/Day-18-13mar/tests/uploadfile/demo.txt","D:/CapG_T7A_TasksClass/Day-18-13mar/tests/uploadfile/demo1.xlsx"])
    // await page.getByRole("button",{name:"Upload Single File"}).click()
    // await page.getByRole("button",{name:"Upload Multiple Files"}).click()
    // await page.waitForTimeout(2000)

    // await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../demo.txt"))
    // await page.getByRole("button",{name:"Upload Single file"}).click()

    await page.waitForTimeout(2000)
}) 