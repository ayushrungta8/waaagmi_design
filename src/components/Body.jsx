import React from 'react';

import FilterBar from '@/components/FilterBar';

import LargeWebCard from './LargeWebCard';

const Body = ({ websites }) => {
  return (
    <div className='px-32'>
      <h2 className='text-[42px]'>
        Check the Astronomically web design inspiration
      </h2>
      <FilterBar />
      <div className='mt-16 grid grid-cols-3 gap-8'>
        {websites.map((website, index) => (
          <LargeWebCard website={website} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
