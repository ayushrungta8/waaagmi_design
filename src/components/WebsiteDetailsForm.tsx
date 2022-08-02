import React from 'react';

const WebsiteDetailsForm = () => {
  return (
    <div className='absolute top-0 right-0 h-[100vh] w-[400px] bg-white p-6 text-black'>
      <h2 className='text-[42px] font-normal'>Submit</h2>
      <div className='my-6 h-[1px] w-full bg-[#535362]'></div>
      <div>
        <img src='/images/large_preview.png' alt='' />
        <div className='bg-[#E2E2EA] p-4'>
          <h3 className='text-[28px] font-normal text-[#535362]'>Twitter</h3>
          <h4 className='text-[14px] text-[#9A9AAF]'>https://twitter.com/</h4>
        </div>
      </div>
      <div className='my-7'>
        <p className='mb-2'>
          Add Tags
          <span className='text-[#9A9AAF]'> | Required</span>
        </p>
        <input
          type='text'
          placeholder='Add tags like DeFi, DAO, NFT'
          className='w-full border-none bg-[#E2E2EA] text-[16px] outline-none focus:ring-transparent'
        />
      </div>
      <div className='my-7'>
        <p className='mb-2'>
          Added by
          <span className='text-[#9A9AAF]'> | Optional</span>
        </p>
        <input
          type='text'
          placeholder='Your good name ser'
          className='w-full border-none bg-[#E2E2EA] text-[16px] outline-none focus:ring-transparent'
        />
      </div>
      <div className='my-7'>
        <p className='mb-2'>
          Email
          <span className='text-[#9A9AAF]'> | Optional</span>
        </p>
        <input
          type='text'
          placeholder='Your web2 email'
          className='w-full border-none bg-[#E2E2EA] text-[16px] outline-none focus:ring-transparent'
        />
      </div>
      <button className='w-full bg-black p-4 text-[20px] text-white'>
        Submit Website
      </button>
    </div>
  );
};

export default WebsiteDetailsForm;
