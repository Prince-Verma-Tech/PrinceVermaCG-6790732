import {test} from '@playwright/test'
import excel from 'exceljs'
import path from 'path'

test("writeexcel",async({page})=>{
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,'../testdata/readexcel.xlsx'))

    let sheet = book.getWorksheet('Sheet1')
    if(!sheet){
        sheet = book.addWorksheet('Sheet1')
    }
    sheet.getRow(1).getCell(1).value = 'Added value 1'

    await book.xlsx.writeFile(path.join(__dirname,'../testdata/readexcel.xlsx'))
    
})

test.only("amazon task", async({page}) =>{
    await page.goto("https://www.amazon.in")
    await page.locator("input#twotabsearchtextbox").fill("shoes");
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, "../testdata/readexcel.xlsx"));
    let sheet =  book.getWorksheet("Sheet5");
    if(!sheet){
    sheet = book.addWorksheet("Sheet5");
   }
    let data = await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').all();
    for(let i = 0; i < data.length; i++){
        let text = await data[i].textContent();
        console.log(text);
        sheet.getRow(i+1).getCell(1).value = text;
    };
    await book.xlsx.writeFile(path.join(__dirname, "../testdata/readexcel.xlsx"));
  
})