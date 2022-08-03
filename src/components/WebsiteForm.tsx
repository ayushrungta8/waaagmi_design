import axios from 'axios';
import React from 'react';
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
  const [details, setDetails] = React.useState<Details>();

  const formatUrl = (url: string) => {
    if (url.includes('http://') || url.includes('https://')) {
      return url;
    }
    return `http://${url}`;
  };
  const handleSubmit = async (e: React.FormEvent) => {
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
  };
  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const tagsString: string = data.get('tags') as string;
    const tags = tagsString.split(',');
    const user = data.get('user') as string;
    const email = data.get('email') as string;

    await axios.post(`/api/submitData`, {
      websiteDetails: {
        name: details?.title,
        url: details?.url,
        tags: tags.toString(),
        user: user,
        email: email,
        image: details?.image,
        date: new Date(),
      },
    });

    setShowDetailsForm(false);
  };

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
          className='fixed  top-0 right-0 h-[100vh] w-[400px] overflow-y-scroll bg-white p-6 text-black'
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
              Add Tags
              <span className='text-[#9A9AAF]'> | Required</span>
            </p>
            <input
              type='text'
              name='tags'
              required
              placeholder='Add tags like DeFi, DAO, NFT'
              className='w-full border-none bg-[#E2E2EA] text-[16px] outline-none focus:ring-transparent'
              // onChange={(e) => setTags(e.target.value.split(','))}
            />
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
            type='submit'
          >
            Submit Website
          </button>
        </form>
      )}
    </>
  );
};

export default WebsiteForm;
