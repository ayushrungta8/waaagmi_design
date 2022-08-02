import axios from 'axios';
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

  React.useEffect(() => {
    const getWebsites = async () => {
      const res = await axios.get('/api/getData');
      setWebsites(res.data);
    };
    getWebsites();
  }, []);
  return (
    <Layout>
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
