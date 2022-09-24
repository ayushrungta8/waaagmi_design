// import puppeteer from 'puppeteer';
import chromium from 'chrome-aws-lambda';

export default async function screenshot(req, res) {
  await captureScreenshot(req.body.websiteUrl);
  res.status(200);
}
async function getBrowserInstance() {
  const executablePath = await chromium.executablePath;

  // if (!executablePath) {
  //   // running locally
  //   const puppeteer = require('puppeteer');
  //   return puppeteer.launch({
  //     args: chromium.args,
  //     headless: true,
  //     defaultViewport: {
  //       width: 1280,
  //       height: 720,
  //     },
  //     ignoreHTTPSErrors: true,
  //   });
  // }

  return chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: {
      width: 1280,
      height: 720,
    },
    executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });
}
export const captureScreenshot = async (websiteUrl) => {
  console.log('captureScreenshot', websiteUrl);
  try {
    const browser = await getBrowserInstance();
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
      websiteUrl
        .replace('https://', '')
        .replace('http://', '')
        .replace('/', '') +
      '.png'
    );

    // upload this buffer on AWS S3
  } catch (error) {
    return error;
  }
};
