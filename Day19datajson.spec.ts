import { test } from "@playwright/test";
import fs from "fs";
import path from "path";

//path.join(__dirname, "../testdata/data.json"); --> path for json file 
let datafile  = fs.readFileSync(path.join(__dirname, "../testdata/data2.json"),"utf-8");
let data = JSON.parse(datafile);


// test("json data", async({page}) => {
//     //console.log(data.greet);

//     data.forEach(d=>{
//         console.log(d.greet);
//     })
    
// })

test("for application", async({page}) => {
    //single object code
    // await page.goto(data.url);
    // await page.getByLabel("Username").fill(data.username);
    // await page.getByLabel("Password").fill(data.password);

    //array of objects code
    //we can also define array inside as valid,invalid array to define array of objects as valid or invalid
    
    for(let d of data){
        let url = d.url;
        let username = d.username;
        let password = d.password;

        await page.goto(url);
        console.log(await page.title());
        await page.getByLabel("Username").fill(username);
        await page.getByLabel("Password").fill(password);
    }


})