import Airtable from 'airtable';

import { captureScreenshot } from './getHomePage';

export default async function submit(req, res) {
  const websiteDetails = req.body.websiteDetails;
  const base = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  }).base('appc1kGE8syzfCfBR');
  try {
    const hp = await captureScreenshot(websiteDetails.url);
    console.log(hp);
  } catch (err) {
    console.log(err);
  }
  // const homePage = 'https://' + req.headers.host + hp;
  // websiteDetails['homePage'] = [{ url: homePage }];
  // console.log(websiteDetails);
  // try {
  //   base('websites').create(
  //     [
  //       {
  //         fields: websiteDetails,
  //       },
  //     ],
  //     function (err, records) {
  //       if (err) {
  //         // console.error(err);
  //         return;
  //       }
  //       res.status(200).send(records);
  //       // return records;
  //     }
  //   );
  // } catch (err) {
  //   // console.log(err);
  // }
}
