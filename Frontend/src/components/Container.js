import React, { useState } from 'react';

const Main = () => {

  const [image, setImage] = useState(null);
  const [bgremove, setBgremove] = useState(null);

  const handleChange = () => {
    const apikey = 'RWLHGmgSGxeHdwrrXB73DpZD'
    const url = 'https://api.remove.bg/v1.0/removebg'

    const formData = new FormData()
    formData.append('size', 'auto');
    formData.append('image_file', image, image.name);

    fetch(url, {
      method: 'POST',
      headers: {
        'X-Api-key': apikey,
      },
      body: formData
    }).then((res) => res.blob()).then((blob) => {
      const reader = new FileReader();
      reader.onloadend = () => setBgremove(reader.result)
      reader.readAsDataURL(blob);

    }).catch((error) => console.error(error))

  }

  return (
    <div className='mx-auto px-4 py-8 select-none md:mt-32 '>
      <div className='flex flex-col lg:flex-row items-center  border border-gray shadow-lg rounded-lg lg:items-start justify-center '>
        <div className='relative group flex flex-col max-w-md mt-8 md:mt-1'>
          <div className='text-center text-3xl font-bold text-gray-800'></div>
          <div className='w-full flex flex-col sm:justify-center sm:items-center sm:gap-8 sm:pt-8 sm:pb-16 '>
            <div className='p-4 text-center lg:text-4xl md:text-3xl sm:text-xl font-bold text-gray-600 whitespace-normal flex-wrap'>
              Upload an image to <br />
              remove the background
              <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <button
              onClick={handleChange}
              type='button'
              className='border border-transparent rounded-full font-bold transition ease-in-out text-center font-body no-underline hover:no-underline inline-flex items-center justify-center text-lg md:text-2xl px-6 md:px-8 py-2 md:py-2.5 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-700 active:scale-[0.98] focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue-700'
            >
              Upload Image
            </button>

            <div className='hidden sm:flex flex-col gap-1.5'>
              <p className='m-0 font-bold text-xl text-gray-500 text-typo-secondary'>
                or drop a file,
              </p>
              <span className='text-xs text-typo-secondary text-center text-gray-500'>
                paste image or{' '}
                <a
                  href='/'
                  className='text-typo-secondary select-photo-url-btn underline'
                >
                  URL
                </a>{' '}
              </span>
            </div>
          </div>
          <div>{bgremove && <img src={bgremove} alt="removed image" />} </div>
          <div className='max-w-md'></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
