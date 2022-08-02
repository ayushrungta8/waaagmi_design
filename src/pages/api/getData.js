import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base('appc1kGE8syzfCfBR');

export default async function getData(req, res) {
  try {
    let tempWebsites = [];
    base('websites')
      .select({
        view: 'Grid view',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            tempWebsites.push(record.fields);
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            return;
          }
          return res.status(200).send(tempWebsites);
        }
      );
  } catch (err) {
    // console.log(err);
  }
}
