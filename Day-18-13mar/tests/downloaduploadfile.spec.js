import { test, expect } from '@playwright/test';
import path from "path";
test('Download', async ({ page }) => {
await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByPlaceholder('Enter text here').fill("Hello ma'am  :)")
    await page.getByPlaceholder('Filename').fill("hello.txt");
    let [downloadfile] = await Promise.all([
        page.waitForEvent('download'),
        page.locator("button#downloadButton").click()
    ])
    let downloadfolder="D:/CapG_T7A_TasksClass/Day-18-13mar/downloads"
    let filename=await downloadfile.suggestedFilename()
    await downloadfile.saveAs(path.join(downloadfolder,filename))



});


    