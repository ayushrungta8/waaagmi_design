import axios from 'axios';
import React, { useContext } from 'react';

import FilterBar from '@/components/FilterBar';

import { Website, WebsiteContext } from '@/contexts/websiteContext';

import LargeWebCard from './LargeWebCard';

const Body = () => {
  const { websites, setWebsites, selectedWebsites } =
    useContext(WebsiteContext);

  React.useEffect(() => {
    const getWebsites = async () => {
      const tempWebsites: Website[] = [];
      const res = await axios.get('/api/getData');
      res.data.forEach((entry: Website) => {
        entry.verified && tempWebsites.push(entry);
      });
      setWebsites(tempWebsites);
    };
    getWebsites();
  }, [setWebsites]);
  return (
    <div className='px-32'>
      <h2 className='text-[42px]'>
        Check the Astronomically web design inspiration
      </h2>
      <FilterBar websites={websites} />
      <div className='mt-16 grid grid-cols-3 gap-8'>
        {selectedWebsites?.map((website, index) => (
          <LargeWebCard website={website} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
