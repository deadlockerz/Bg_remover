import React from "react";
import { Link } from "react-router-dom";
import ImgCanva from "../components/ImgCanva";
import girl from "../assets/girl.png";
import girl2 from "../assets/girl2.png";

const HowToUse = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col text-center gap-3 p-2">
        <div className="text-center font-bold text-3xl mt-8 font-sans flex-row p2">
          Cool Backgrounds for Profile Pictures and More
        </div>
        <Link to={"/"}>
          <button
            type="button"
            className="m-auto border border-transparent rounded-full font-bold 
            transition ease-in-out text-center font-body no-underline hover:no-underline
            inline-flex items-center justify-center text-sm md:text-md px-6 md:px-8 py-2 md:py-2.5
            text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-700 
            active:scale-[0.98] focus:outline-none focus-visible:outline-none 
            focus:ring-none focus-visible:ring focus-visible:ring-offset-2 
            focus-visible:ring-blue-700"
          >
            Remove Background{" "}
          </button>
        </Link>
      </div>

      <div className="p-8">
        <ImgCanva beforeImg={girl} afterImg={girl2} width={"500px"} />
      </div>
    </div>
  );
};

export default HowToUse;
