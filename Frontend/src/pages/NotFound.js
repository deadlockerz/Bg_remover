import React from "react";
import errorImg from "../assets/errorImg.gif";

const NotFound = () => {
  return (
    <div className="flex  items-center justify-center h-screen bg-white px-4 select-none">
      <div className="flex  flex-col  sm:flex-row   ">
        <div className="sm:hidden">
          <img
            src={errorImg}
            loading="eager"
            alt="ERROR"
            className="h-36 m-auto"
          />
        </div>
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-300">404</h1>

          <p className="mt-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500 text-xl">We can't find that page.</p>

          <a
            href="/"
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </a>
        </div>
        <div className="hidden sm:block">
          <img
            src={errorImg}
            loading="eager"
            alt="ERROR"
            className=" h-72 lg:h-96 m-auto ml-16"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default NotFound;
