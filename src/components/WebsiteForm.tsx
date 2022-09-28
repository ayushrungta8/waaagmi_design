import axios from 'axios';
import React, { useContext, useEffect } from 'react';

import { LoaderContext } from '@/contexts/loaderContext';

const WebsiteForm = ({
  showDetailsForm,
  setShowDetailsForm,
  modalRef,
}: {
  showDetailsForm: boolean;
  setShowDetailsForm: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.RefObject<HTMLFormElement>;
}) => {
  interface Details {
    title: string;
    url: string;
    description: string;
    image: string;
    icon?: string;
  }
  const { loading, setLoading } = useContext(LoaderContext);
  const [details, setDetails] = React.useState<Details>();
  const [tags, setTags] = React.useState<string[]>([]);
  const formatUrl = (url: string) => {
    if (url.includes('http://') || url.includes('https://')) {
      return url;
    }
    return `http://${url}`;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const tempUrl: string = data.get('url') as string;
    try {
      const res = await axios.post('/api/getMeta', {
        websiteUrl: formatUrl(tempUrl),
      });
      setDetails(res.data);
      setShowDetailsForm(true);
    } catch (err) {
      alert('Website not found. Please check the url and try again.');
    }
    setLoading(false);
  };
  const handleDetailsSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const tagsArray: string[] = tags;

    const user = data.get('user') as string;
    const email = data.get('email') as string;

    await axios.post(`/api/submitData`, {
      websiteDetails: {
        name: details?.title,
        url: details?.url,
        tags: tagsArray.toString(),
        user: user,
        email: email,
        image: details?.image,
        date: new Date(),
      },
    });

    setShowDetailsForm(false);
    setLoading(false);
  };
  useEffect(() => {
    console.log(tags);
  }, [tags]);
  return (
    <>
      <form
        className=' flex border border-white  text-[#535362]'
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type='text'
          placeholder='Enter Website/webapp link'
          name='url'
          className='w-3/4 border-none outline-none focus:ring-transparent'
          required
        />
        <button
          type='submit'
          className='flex w-1/4 items-center justify-center bg-[#1E1E24] text-center text-white'
        >
          Add
        </button>
      </form>

      {showDetailsForm && (
        <form
          className='slideIn fixed top-0 right-0 z-50 h-[100vh] w-[400px] overflow-auto bg-white p-6 text-black'
          ref={modalRef}
          onSubmit={(e) => handleDetailsSubmit(e)}
        >
          <h2 className='text-[42px] font-normal'>Submit</h2>
          <div className='my-6 h-[1px] w-full bg-[#535362]'></div>
          <div>
            <img src={details?.image} alt='' />
            <div className='bg-[#E2E2EA] p-4'>
              <h3 className='text-[28px] font-normal text-[#535362]'>
                {details?.title}
              </h3>
              <h4 className='text-[14px] text-[#9A9AAF]'>{details?.url}</h4>
            </div>
          </div>
          <div className='my-7'>
            <p className='mb-2'>
              Choose Categories{' '}
              <span className='text-[#9A9AAF]'> | Required</span>
            </p>
            <div className='flex flex-wrap gap-8 border-none bg-[#E2E2EA] p-3'>
              <div className='flex cursor-pointer items-center gap-2'>
                <input
                  type='checkbox'
                  id='Defi'
                  name='tags'
                  value='Defi'
                  checked={tags.includes('Defi')}
                  placeholder='Add tags like DeFi, DAO, NFT'
                  className=' border-1 cursor-pointer bg-[#E2E2EA] text-[16px] outline-none focus:ring-transparent '
                  onChange={(e) =>
                    setTags(
                      tags.includes(e.target.value)
                        ? tags.filter((tag) => tag !== e.target.value)
                        : [...tags, e.target.value]
                    )
                  }
                />
                <label
                  htmlFor='Defi'
                  className='cursor-pointer select-none font-light'
                >
                  Defi
                </label>
              </div>
              <div className='flex cursor-pointer items-center gap-2'>
                <input
                  type='checkbox'
                  id='DAO'
                  name='tags'
                  value='DAO'
                  checked={tags.includes('DAO')}
                  className=' border-1 cursor-pointer bg-[#E2E2EA] text-[16px] outline-none focus:ring-transparent '
                  onChange={(e) =>
                    setTags(
                      tags.includes(e.target.value)
                        ? tags.filter((tag) => tag !== e.target.value)
                        : [...tags, e.target.value]
                    )
                  }
                />
                <label
                  htmlFor='DAO'
                  className='cursor-pointer select-none font-light'
                >
                  DAO
                </label>
              </div>

              <div className='flex cursor-pointer items-center gap-2'>
                <input
                  type='checkbox'
                  id='NFT'
                  name='tags'
                  value='NFT'
                  checked={tags.includes('NFT')}
                  className=' border-1 cursor-pointer bg-[#E2E2EA] text-[16px] outline-none focus:ring-transparent '
                  onChange={(e) =>
                    setTags(
                      tags.includes(e.target.value)
                        ? tags.filter((tag) => tag !== e.target.value)
                        : [...tags, e.target.value]
                    )
                  }
                />
                <label
                  htmlFor='NFT'
                  className='cursor-pointer select-none font-light'
                >
                  NFT
                </label>
              </div>
            </div>
          </div>
          <div className='my-7'>
            <p className='mb-2'>
              Added by
              <span className='text-[#9A9AAF]'> | Optional</span>
            </p>
            <input
              type='text'
              name='user'
              placeholder='Your good name ser'
              className='w-full border-none bg-[#E2E2EA] text-[16px] outline-none focus:ring-transparent'
              // onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className='my-7'>
            <p className='mb-2'>
              Email
              <span className='text-[#9A9AAF]'> | Optional</span>
            </p>
            <input
              type='email'
              name='email'
              placeholder='Your web2 email'
              className='w-full border-none bg-[#E2E2EA] text-[16px] outline-none focus:ring-transparent'
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className='w-full bg-black p-4 text-[20px] text-white'
            style={{
              backgroundColor: tags.length > 0 ? '#000' : '#9A9AAF',
              cursor: tags.length > 0 ? 'pointer' : 'not-allowed',
            }}
            type='submit'
            disabled={tags.length === 0}
          >
            Submit Website
          </button>
        </form>
      )}
    </>
  );
};

export default WebsiteForm;
