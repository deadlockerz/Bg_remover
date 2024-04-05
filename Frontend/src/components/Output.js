import React from "react";

const Output = ({ bgImage }) => {
  return (
    <div className="bg-white border border-secondary-main p-3 relative">
      <div className="relative">
        <div className="absolute opacity-5 inset-0 grid grid-cols-8 grid-rows-8 z-0">
          {Array.from({ length: 64 }).map((_, index) => (
            <div
              key={index}
              className={`bg-${
                index % 2 === Math.floor(index / 8) % 2
                  ? "gray-300"
                  : "gray-600"
              } w-full h-full`}
            />
          ))}
        </div>
        <img
          src={bgImage}
          loading="eager"
          alt="Background"
          draggable="false"
          className="object-center w-full h-auto  z-10"
        />
      </div>
    </div>
  );
};

export default Output;
