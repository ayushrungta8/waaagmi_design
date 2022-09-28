import React from 'react';
import Lottie from 'react-lottie-player';

import LoaderData from '~/images/loader.json';

const Loader = () => {
  return (
    <div
      className=' absolute top-0 left-0 z-50 flex h-screen w-full  items-center justify-center bg-black bg-opacity-50 '
      id='globalLoader'
    >
      {/* <img src='/images/loader.svg' alt='loader' className='spin' /> */}
      <Lottie
        loop
        animationData={LoaderData}
        play
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default Loader;
