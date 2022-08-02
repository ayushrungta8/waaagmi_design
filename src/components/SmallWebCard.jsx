import React from 'react';

const SmallWebCard = ({ website }) => {
  return (
    <div
      className='min-h-[192px] min-w-[220px] bg-cover bg-center'
      style={{ backgroundImage: `url(${website.homePage[0].url})` }}
    ></div>
  );
};

export default SmallWebCard;
