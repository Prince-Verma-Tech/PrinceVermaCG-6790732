import {expect, test} from "@playwright/test"
test("Standard dropdown",async ({page})=>{
    // await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0');
    // await page.locator('#country_code').selectOption('+92')
    // await page.locator("#select3").selectOption({value:"India"})
    // await page.waitForTimeout(2000)
    
    // await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1');


    // await page.locator("#select-multiple-native").selectOption([{value:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},{value:"Solid Gold Petite Micropave "}])
    // await page.getByText("Add").click();
    //  await page.waitForTimeout(2000)

    // await page.goto('https://www.myntra.com/shoes?rawQuery=shoes');
    // await page.locator(".sort-sortBy").hover();

    // await page.getByText("What's New").click([{value:"new"}]);
    // await page.waitForTimeout(2000);

    // await page.getByText("Popularity").click()
    // let options =await page.locator('//label[@class="sort-label "]').all()
    // for(let opt of options){
    //     let optionText = await opt.textContent()
        // if(optionText?.trim() === "Popularity"){
        //     await opt.click()
        // }
    //     console.log(optionText)

        
    //     if(optionText?.includes("Popularity")){
    //         await opt.click()
    //     }
    // }
    // await page.waitForTimeout(2000) 

    await page.goto('https://www.amazon.com/');
    await page.locator('#twotabsearchtextbox').fill("shoes");
    await page.locator('//div[@class="left-pane-results-container"]').waitFor({state:"visible"});
    const options=await page.locator('//div[@class="left-pane-results-container"]/div').all();
    for(const option of options){
        const text=await option.textContent();
        console.log(text);
        if(text?.includes("women sneakers")){
            option.click();
        }
    }
    await page.waitForTimeout(2000)
})