import React from 'react';

import { Website } from '@/contexts/websiteContext';

const SmallWebCard = ({ website }: { website: Website }) => {
  return (
    <div
      className='min-h-[192px] min-w-[220px] bg-cover bg-center'
      style={{
        backgroundImage: `url(${
          website?.homePage ? website.homePage[0].url : website.image
        })`,
      }}
    ></div>
  );
};

export default SmallWebCard;
