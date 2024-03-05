import React, { useState, useRef } from 'react';
import cat from '../assets/cat.png';
import cat2 from '../assets/cat2.png';

const ContainerFooter = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderValue(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      updateSliderValue(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderValue = (e) => {
    const containerWidth = containerRef.current.offsetWidth;
    const offsetX =
      e.clientX - containerRef.current.getBoundingClientRect().left;
    const newValue = Math.max(
      0,
      Math.min(100, (offsetX / containerWidth) * 100)
    );
    setSliderValue(newValue);
  };

  const beforeStyle = {
    clipPath: `polygon(0% 0%, ${sliderValue}% 0%, ${sliderValue}% 100%, 0% 100%)`,
  };

  const afterStyle = {
    clipPath: `polygon(${sliderValue}% 0%, 100% 0%, 100% 100%, ${sliderValue}% 100%)`,
  };

  return (
    <div className='mb-6 flex flex-col items-center select-none'>
      <h2 className='font-display font-bold my-8 text-gray-700 text-typo m-0 text-4xl md:text-5xl text-center'>
        Stunning Quality
      </h2>
      <div
        className='relative overflow-hidden rounded-3xl'
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div style={beforeStyle}>
          <figure className='!m-0'>
            <picture>
              <img
                ref={imageRef}
                src={cat}
                alt='E'
                className='w-48 h-auto'
                loading='lazy'
                draggable='false'
                onMouseDown={handleMouseDown}
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
        {isDragging && (
          <div
            className='absolute top-0 left-0 w-full h-full cursor-pointer'
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          />
        )}
      </div>
      <input
        type='range'
        min='0'
        max='100'
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
        className='w-48 prism-image-dragger bg-transparent appearance-none h-full cursor-pointer focus:outline-none'
      />
    </div>
  );
};

export default ContainerFooter;
