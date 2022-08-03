import React, { useContext } from 'react';

import { WebsiteContext } from '@/contexts/websiteContext';

const FilterCard = ({ children, onClick }) => {
  const { filters } = useContext(WebsiteContext);
  return (
    <div
      className='flex cursor-pointer bg-white bg-opacity-10 px-4 py-2 text-center'
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default FilterCard;
