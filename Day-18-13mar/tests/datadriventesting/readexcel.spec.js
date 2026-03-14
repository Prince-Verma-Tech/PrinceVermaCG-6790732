import { test, expect } from '@playwright/test';
import excel from "exceljs"
import path from "path"
// test("Get test data", async ({ page }) => {
//     let book=new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
//     let sheet=await book.getWorksheet("Sheet2")
//     let data=await sheet?.getRow(1).getCell(1).value

//     console.log(data);

//     let sheet2 = book.getWorksheet("Sheet2")
//     for (let i = 1; i <= 3; i++) {          
//         for (let j = 1; j <= 3; j++) {     
            
//             let value = sheet2?.getRow(i).getCell(j).value

//             console.log(value)

//         }
//     }
// });

test("Reading test data", async ({ page }) => {

    let book = new excel.Workbook();
    await book.xlsx.readFile(
        path.join(__dirname, "../../testdata/readexcel.xlsx")
    );

    const sheet3 = book.getWorksheet("Sheet3");
    for (let i = 2; i <= sheet3.rowCount; i++) {
        const row = sheet3.getRow(i);
        const urlCell = row.getCell(1).value;
        const url = typeof urlCell === "object" ? urlCell.text : urlCell;
        const name = String(row.getCell(2).value);
        const email = String(row.getCell(3).value);
        const password = String(row.getCell(4).value);
        
        console.log(url, name, email, password);
        
        await page.goto(url);
        await page.fill("#name", name);
        await page.fill("#email", email);
        await page.fill("#password", password);
        await page.click("button[type='submit']");
    }
});