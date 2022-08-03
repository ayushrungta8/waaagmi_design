import React from 'react';

const FilterCard = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
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
