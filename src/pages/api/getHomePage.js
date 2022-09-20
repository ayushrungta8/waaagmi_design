import puppeteer from 'puppeteer';

export default async function screenshot(req, res) {
  await captureScreenshot(req.body.websiteUrl);
  res.status(200);
}
export const captureScreenshot = async (websiteUrl) => {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    },
  });
  const page = await browser.newPage();
  await page.goto(websiteUrl);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  await page.screenshot({
    path:
      './public/uploads/' +
      websiteUrl
        .replace('https://', '')
        .replace('http://', '')
        .replace('/', '') +
      '.png',
    fullPage: true,
  });
  await page.close();
  await browser.close();
  return (
    '/uploads/' +
    websiteUrl.replace('https://', '').replace('http://', '').replace('/', '') +
    '.png'
  );
};
