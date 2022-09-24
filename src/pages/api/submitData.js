import Airtable from 'airtable';

export default async function submit(req, res) {
  const websiteDetails = req.body.websiteDetails;
  const base = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
  }).base('appc1kGE8syzfCfBR');
  // try {
  //   // const hp = await captureScreenshot(websiteDetails.url);
  //   const hp = await axios.get(
  //     `https://screenshot.abstractapi.com/v1/?api_key=7a6b6ff11207473c83c7e782c1f98a47&url=${websiteDetails.url}&delay=5`
  //   );

  //   console.log(hp.data);
  // } catch (err) {
  //   console.log(err);
  // }
  // const homePage = 'https://' + req.headers.host + hp;
  websiteDetails['homePage'] = [
    {
      url: `https://screenshot.abstractapi.com/v1/?api_key=7a6b6ff11207473c83c7e782c1f98a47&url=${websiteDetails.url}&delay=5`,
    },
  ];
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
          // console.error(err);
          return;
        }
        res.status(200).send(records);
        // return records;
      }
    );
  } catch (err) {
    // console.log(err);
  }
}
