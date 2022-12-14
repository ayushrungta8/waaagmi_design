import * as React from 'react';

import Body from '@/components/Body';
import Hero from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import { LoaderProvider } from '@/contexts/loaderContext';
import { WebsiteProvider } from '@/contexts/websiteContext';
export default function HomePage() {
  const modalRef = React.useRef<HTMLFormElement>(null);
  const [showDetailsForm, setShowDetailsForm] = React.useState<boolean>(false);
  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setShowDetailsForm(false);
    }
  };

  return (
    <WebsiteProvider>
      <LoaderProvider>
        <Layout>
          <Seo />
          {/* <Loader /> */}
          <main
            className='min-h-screen bg-black text-white'
            onClick={(event: React.MouseEvent) => handleClickOutside(event)}
          >
            <Navbar />
            <Hero
              showDetailsForm={showDetailsForm}
              setShowDetailsForm={setShowDetailsForm}
              modalRef={modalRef}
            />
            <Body />
          </main>
        </Layout>
      </LoaderProvider>
    </WebsiteProvider>
  );
}
