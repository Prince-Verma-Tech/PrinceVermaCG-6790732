import {test} from '@playwright/test';
import jsonData from '../testdata/AmazonE2E.json';
import amazonE2E from '../PageObjectModel/Day20AmazonE2E.page';

test("amazonE2E", async({page}) => {
    let amazon = new amazonE2E(page);
    await page.goto(jsonData.url);
    await amazon.searchProduct(jsonData.search);
    let page2 = await amazon.selectProduct();
    await amazon.selectQuantity('3',page2);
    await amazon.addToCartFxn(page2);

})