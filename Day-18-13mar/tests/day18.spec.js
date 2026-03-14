import { test, expect } from '@playwright/test';

test('authentication popup handling', async ({ browser }) => {

  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin'
    }
  });

  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/basic_auth');

  const text = await page.locator('//*[@id="content"]/div').innerText();

  console.log("Visible text on page:", text);

  await page.waitForTimeout(3000)

});