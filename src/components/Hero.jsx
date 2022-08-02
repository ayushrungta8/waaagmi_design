import React from 'react';

import SmallWebCard from '@/components/SmallWebCard';
import WebsiteForm from '@/components/WebsiteForm';

const Hero = ({ showDetailsForm, setShowDetailsForm, modalRef, websites }) => {
  return (
    <div>
      <div className='flex w-full p-32'>
        <div className='py-auto flex-1 text-7xl leading-[100px]'>
          Web3
          <span className='italic text-[#EFFE09]'> website</span> <br />
          Colllection
        </div>
        <div className='flex flex-1 flex-col justify-between'>
          <div className='font-[SpaceMono] text-[18px]'>
            Each pfpid is a non-transferrable NFT; it is locked to your Ethereum
            wallet and can only be minted once you have verified your real-world
            identity. Think of it as your blockchain ID card.
          </div>
          <WebsiteForm
            showDetailsForm={showDetailsForm}
            setShowDetailsForm={setShowDetailsForm}
            modalRef={modalRef}
          />
        </div>
      </div>
      <div className='h-56 overflow-hidden'>
        <div className='scroll-animate flex  gap-4 '>
          {websites.map((website, index) => (
            <SmallWebCard website={website} key={index} />
          ))}
          {/* <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard />
          <SmallWebCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
