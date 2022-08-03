import React from 'react';

const LargeWebCard = ({ website }) => {
  return (
    <div
      className='h-full min-h-[400px] w-full min-w-[200px]  bg-cover bg-top bg-no-repeat'
      style={{
        backgroundImage: `url(${
          website?.homePage ? website.homePage[0].url : website.image
        })`,
      }}
    >
      <a
        href={website.url}
        target='_blank'
        className='flex h-full w-full cursor-[url("/images/cursor.png"),auto] flex-col justify-between bg-black bg-opacity-70 p-4 opacity-0 transition-all hover:opacity-100'
        rel='noreferrer'
      >
        <div className='flex w-full flex-1 items-center justify-center'>
          {/* <img src='/images/right-arrow.svg' alt='' /> */}
        </div>
        <div className='flex justify-between'>
          <div>{website.name ?? ''}</div>
          <div>{website.date ?? ''}</div>
        </div>
      </a>
    </div>
  );
};

export default LargeWebCard;
