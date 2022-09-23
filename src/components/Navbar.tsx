import React from 'react';

const Navbar = () => {
  return (
    <div className='flex h-16 items-center justify-between border-b px-32  text-base italic text-white  underline'>
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
