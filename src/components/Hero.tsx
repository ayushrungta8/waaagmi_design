import React, { useContext } from 'react';

import SmallWebCard from '@/components/SmallWebCard';
import WebsiteForm from '@/components/WebsiteForm';

import { WebsiteContext } from '@/contexts/websiteContext';

const Hero = ({
  showDetailsForm,
  setShowDetailsForm,
  modalRef,
}: {
  showDetailsForm: boolean;
  setShowDetailsForm: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.RefObject<HTMLFormElement>;
}) => {
  const { websites } = useContext(WebsiteContext);

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
      <div className='relative flex h-56 overflow-hidden'>
        <div className='scroll-animate2 absolute z-10 flex max-w-full gap-4'>
          {websites?.map((website, index) => (
            <SmallWebCard website={website} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
