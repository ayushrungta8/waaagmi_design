import React from 'react';

const Loader = () => {
  return (
    <div
      className=' absolute top-0 left-0 z-40 flex h-screen w-[100vw] items-center justify-center bg-black bg-opacity-100'
      id='globalLoader'
    >
      <img src='/images/loader.svg' alt='loader' className='spin' />
    </div>
  );
};

export default Loader;
