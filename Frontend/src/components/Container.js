import React, {useState} from 'react';

const Main = () => {
  const [imageURL, setImageURL] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const image = fileInput.files[0];

    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');

    const apiKey = 'RWLHGmgSGxeHdwrrXB73DpZD';

    try {
      const response = await fetch(
        'https://api.remove.bg/v1.0/removebg',
        {
          method: 'POST',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        }
      );

      const blob = await response.blob();
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageURL(reader.result.replace('data:image/png;base64,', ''));
      };

      reader.readAsDataURL(blob);

    } catch (error) {
      console.error(error);
    }
  };

  const downloadFile = () => {
    const base64Image = `data:image/png;base64,${btoa(imageURL)}`;
    const anchorElement = document.createElement('a');
    anchorElement.href = base64Image;
    anchorElement.download = 'naciasv.png';
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  };

  return (
    <div className='mx-auto px-4 py-8 select-none md:mt-32 '>
      <div className='flex flex-col lg:flex-row items-center  border border-gray shadow-lg rounded-lg lg:items-start justify-center '>
        <div className='relative group flex flex-col max-w-md mt-8 md:mt-1'>
          <div className='text-center text-3xl font-bold text-gray-800'></div>
          <div className='w-full flex flex-col sm:justify-center sm:items-center sm:gap-8 sm:pt-8 sm:pb-16 '>
            <div className='p-4 text-center lg:text-4xl md:text-3xl sm:text-xl font-bold text-gray-600 whitespace-normal flex-wrap'>
              Upload an image to <br />
              remove the background
            </div>
            <input
                  id="fileInput"
                  className="form-control"
                  type="file"
                />
            <button
              type='button'
              onClick={submitHandler}
              className='border border-transparent rounded-full font-bold transition ease-in-out text-center font-body no-underline hover:no-underline inline-flex items-center justify-center text-lg md:text-2xl px-6 md:px-8 py-2 md:py-2.5 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-700 active:scale-[0.98] focus:outline-none focus-visible:outline-none focus:ring-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue-700'>
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
          <div className='max-w-md'></div>

          <button
              className="btn btn-warning"
              onClick={downloadFile}
            >
              Download
            </button>

        </div>
      </div>
    </div>
  );
};

export default Main;