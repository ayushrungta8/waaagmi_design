import Airtable from 'airtable';

import { captureScreenshot } from './getHomePage';
const formatUrl = (url) => {
  if (url.includes('http://') || url.includes('https://')) {
    return url;
  }
  return `http://${url}`;
};
export default async function submit(req, res) {
  const websiteDetails = req.body.websiteDetails;
  const base = new Airtable({ apiKey: 'key8ZGeFgoqmrS4DB' }).base(
    'appc1kGE8syzfCfBR'
  );

  const hp = await captureScreenshot(websiteDetails.url, websiteDetails.name);
  // console.log(req);
  const homePage = 'https://' + req.headers.host + hp;
  websiteDetails.homePage = [{ url: homePage }];
  console.log(websiteDetails);
  try {
    base('websites').create(
      [
        {
          fields: websiteDetails,
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        res.status(200).send(records);
        // return records;
      }
    );
  } catch (err) {
    console.log(err);
  }
}
