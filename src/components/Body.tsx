import axios from 'axios';
import React, { useContext } from 'react';

import FilterBar from '@/components/FilterBar';
import Loader from '@/components/Loader';

import { LoaderContext } from '@/contexts/loaderContext';
import { Website, WebsiteContext } from '@/contexts/websiteContext';

import LargeWebCard from './LargeWebCard';

const Body = () => {
  const { websites, setWebsites, selectedWebsites } =
    useContext(WebsiteContext);
  const { loading, setLoading } = useContext(LoaderContext);
  React.useEffect(() => {
    const getWebsites = async () => {
      setLoading(true);
      const tempWebsites: Website[] = [];
      const res = await axios.get('/api/getData');
      res.data.forEach((entry: Website) => {
        entry.verified && tempWebsites.push(entry);
      });
      setWebsites(tempWebsites);
      setLoading(false);
    };
    getWebsites();
  }, [setWebsites]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
          <a
            className='spin fixed bottom-16 right-16 w-16'
            href='https://frens.design'
            target='_blank'
            rel='noreferrer'
          >
            <img src='/images/loader.svg' alt='df' />
          </a>
        </div>
      )}
    </>
  );
};

export default Body;
