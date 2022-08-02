import Airtable from 'airtable';
import * as React from 'react';

import Body from '@/components/Body';
import Hero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

export default function HomePage() {
  const modalRef = React.useRef(null);
  const [showDetailsForm, setShowDetailsForm] = React.useState(false);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowDetailsForm(false);
    }
  };
  const [websites, setWebsites] = React.useState([]);
  const base = new Airtable({ apiKey: 'key8ZGeFgoqmrS4DB' }).base(
    'appc1kGE8syzfCfBR'
  );

  React.useEffect(() => {
    base('websites')
      .select({
        // Selecting the first 3 records in Grid view:
        // maxRecords: 3,
        view: 'Grid view',
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          // console.log(records);
          const tempWebsites = [];
          records.forEach((record) => {
            tempWebsites.push(record.fields);
          });
          setWebsites([...websites, ...tempWebsites]);
          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='bg-black text-white' onClick={handleClickOutside}>
        <Navbar />
        <Hero
          showDetailsForm={showDetailsForm}
          setShowDetailsForm={setShowDetailsForm}
          modalRef={modalRef}
          websites={websites}
        />
        <Body websites={websites} />
      </main>
    </Layout>
  );
}
