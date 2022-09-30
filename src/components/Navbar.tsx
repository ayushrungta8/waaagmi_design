import React from 'react';

const Navbar = () => {
  return (
    <div className='sticky top-0 z-[1000] mb-12 flex h-16 items-center justify-between border-b bg-black px-4 text-base  italic text-white underline  md:px-32'>
      <div>
        <img src='/images/logo.svg' alt='' />
      </div>
      <a
        href='https://twitter.com/DesignFrens'
        target='_blank'
        rel='noreferrer'
      >
        Twitter
      </a>
    </div>
  );
};

export default Navbar;
