import { test } from "@playwright/test";
import example from "../PageObjectModel/Day19example.page.ts";
import fs from "fs";
import path from "path";

let datafile  = fs.readFileSync(path.join(__dirname, "../testdata/data3.json"),"utf-8");
let data = JSON.parse(datafile);

//basic pom test
// test("", async({page}) => {
//     let examplepage = new example(page)
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await examplepage.usernameTF.fill("student")
//     await examplepage.passwordTF.fill("Password123")
//     await examplepage.SubmitBtn.click()

// })

//pom test with data from json file
test("", async({page}) => {
    let examplepage = new example(page)
    await page.goto(data.url)
    await examplepage.usernameTF.fill(data.username)
    await examplepage.passwordTF.fill(data.password)
    await examplepage.SubmitBtn.click()

})