import React, { useState } from 'react';
import cat from '../assets/cat.png';
import cat2 from '../assets/cat2.png'; // Add your second image here

const ContainerFooter = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const beforeStyle = {
    clipPath: `polygon(0px 0px, ${sliderValue}% 0px, ${sliderValue}% 100%, 0px 100%)`,
  };

  const afterStyle = {
    clipPath: `polygon(${sliderValue}% 0px, 100% 0px, 100% 100%, ${sliderValue}% 100%, 0px 100%)`,
  };

  return (
    <div className='mb-6'>
      <h2 class='font-display font-bold my-8 text-gray-700 text-typo m-0 text-4xl md:text-5xl text-center'>
        {' '}
        Stunning Quality{' '}
      </h2>
      <div className='relative overflow-hidden  rounded-3xl'>
        <div style={beforeStyle}>
          <figure className='!m-0'>
            <picture>
              <img
                src={cat}
                alt='E'
                className='w-48 h-auto'
                loading='lazy'
                draggable='false'
              />
            </picture>
          </figure>
        </div>
        <div
          style={afterStyle}
          className='absolute top-0 left-0 w-full h-full'
        >
          <figure className='!m-0'>
            <picture>
              <img
                src={cat2}
                alt='E'
                className='w-48 h-auto'
                loading='lazy'
                draggable='false'
              />
            </picture>
          </figure>
        </div>
      </div>
      <input
        type='range'
        min='0'
        max='100'
        value={sliderValue}
        onChange={handleSliderChange}
        className='w-48 prism-image-dragger bg-transparent appearance-none h-full cursor-pointer focus:outline-none'
      />
    </div>
  );
};

export default ContainerFooter;
