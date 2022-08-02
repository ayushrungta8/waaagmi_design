import puppeteer from 'puppeteer';

export default async function screenshot(req, res) {
  await captureScreenshot(req.body.websiteUrl, req.body.name);
  res.status(200);
}
export const captureScreenshot = async (websiteUrl, name) => {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    },
  });
  const page = await browser.newPage();
  await page.goto(websiteUrl);
  await page.screenshot({
    path: './public/uploads/' + name + '.png',
  });
  await page.close();
  await browser.close();
  return '/uploads/' + name + '.png';
};
