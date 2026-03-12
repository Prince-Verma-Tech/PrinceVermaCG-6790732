import { test, expect } from '@playwright/test';

test('frames', async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  // let frame = await page.frames()
  // console.log(frame.length)
  // console.log(frame)
  // for (let i of frame) {
  //   console.log(await i.title());
  // }
  // await page.title()

  // //using frames
  // let frame1 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })
  // await frame1?.locator('input[name="mytext1"]').fill("Hello Playwright");


  // // using framelocator
  // const frame2 = page.frameLocator('frame[src="frame_2.html"]');
  // await frame2.locator('input[name="mytext2"]').fill("Hello Playwright");



  // using framelocator
  const frame3 = page.frameLocator('frame[src="frame_3.html"]');

  const googleForm = frame3.frameLocator('iframe');

  await googleForm.getByText("I am a human").click();

  await page.waitForTimeout(2000);

});
