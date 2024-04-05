import React from "react";
import { useLocation, Link } from "react-router-dom";
import Output from "../components/Output";

const Result = () => {
  const location = useLocation();
  const bgremove = location.state && location.state.bgremove;

  // Download the file
  const downloadFile = () => {
    if (!bgremove) {
      console.error("No image to download.");
      return;
    }

    const anchorElement = document.createElement("a");
    anchorElement.href = bgremove;
    anchorElement.download = "bg_removed_image.png";
    document.body.appendChild(anchorElement);

    anchorElement.click();

    document.body.removeChild(anchorElement);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-3xl w-full px-4 py-8 select-none flex flex-col items-center">
        <div className="border border-gray-300 shadow-lg rounded-lg w-full">
          <div className="p-4 text-center text-6xl font-bold text-gray-800">
            Result
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center p-4">
            <div className="mb-4 md:mb-0 md:flex-shrink">
              {bgremove && <Output bgImage={bgremove} />}
            </div>
            <div className="flex flex-col md:flex-col justify-center items-center md:ml-4">
              <button
                onClick={downloadFile}
                type="button"
                className="flex justify-center items-center w-full md:w-auto border border-transparent rounded-full font-bold 
                transition ease-in-out text-center font-body no-underline hover:no-underline
                text-sm md:text-md px-6 md:px-8 py-2 md:py-2.5
                text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-700 
                active:scale-[0.98] focus:outline-none focus-visible:outline-none 
                focus:ring-none focus-visible:ring focus-visible:ring-offset-2 
                focus-visible:ring-blue-700 my-2 md:my-0 md:mr-2"
              >
                Download Image
              </button>
              <Link to={"/"}>
                <button
                  type="button"
                  className="flex justify-center items-center w-full md:w-auto border border-transparent rounded-full font-bold 
    transition ease-in-out text-center font-body no-underline hover:no-underline
    text-sm md:text-md px-6 md:px-8 py-2 md:py-2.5
    text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-600 
    active:scale-[0.98] focus:outline-none focus-visible:outline-none 
    focus:ring-none focus-visible:ring focus-visible:ring-offset-2 
    focus-visible:ring-gray-600 my-2"
                >
                  Another Image
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
