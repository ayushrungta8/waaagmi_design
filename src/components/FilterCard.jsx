import React from 'react';

const FilterCard = ({ children }) => {
  return (
    <div className='flex bg-white bg-opacity-10 px-4 py-2 text-center'>
      {children}
    </div>
  );
};

export default FilterCard;
