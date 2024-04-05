import React from "react";
import containerHeaderVideo from "../assets/containerHeaderVideo.mp4";

const ContainerHeader = () => {
  return (
    <div className="p-4 select-none flex flex-col md:flex-row lg:flex-col items-center lg:items-start gap-6 lg:gap-6 md:gap-8 md:max-w-2xl lg:max-w-lg mt-8">
      <video
        autoPlay
        className=" w-full h-auto rounded-4xl max-w-[320px] lg:max-w-[420px] rounded-3xl "
        src={containerHeaderVideo}
        loop
      ></video>
      <div className="flex flex-col gap-4">
        <h1 className="font-display font-bold text-gray-800 text-typo m-0 text-4xl md:text-4xl lg:text-4xl text-center md:text-left">
          Remove Image Background
        </h1>
        <p className="text-typo-tertiary font-bold text-xl m-0 !text-typo text-center md:text-left">
          100% Automatically and
          <span className="!py-1 !px-4 bg-brush bg-no-repeat bg-cover bg-center">
            Free
          </span>
        </p>
      </div>
    </div>
  );
};

export default ContainerHeader;
