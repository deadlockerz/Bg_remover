import React from "react";

const Footer = () => {
  return (
    <>  
       
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="block sticky footer"
        style={{ position: "absolute", bottom: 0 }}
      >
        <path
          fill="#475569"
          fillOpacity="1"
          d="M0,192L60,208C120,224,240,256,360,256C480,256,600,224,720,229.3C840,235,960,277,1080,282.7C1200,288,1320,256,1380,240L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg> */}
      
      <footer className="flex flex-col sm:flex-row space-y-10 bg-slate-600 items-center justify-around sm:mt-[-45px]">
      
        <div className="flex flex-col justify-center space-y-5 sm:space-y-0 sm:space-x-10">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-2 text-center m-2"
          >
            Language
          </button>
          <p className="text-center text-white font-medium">
            &copy; 2024 Company Ltd. All rights reserved.
          </p>
        </div>

        <div className="justify-center">
          <div className="flex justify-center space-x-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
            </a>
            <a
              href="https://messenger.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
            </a>
          </div>
          <nav className="flex justify-center flex-wrap gap-6 text-white font-medium mb-9">
            <a className="hover:text-gray-900" href="#">
              Home
            </a>
            <a className="hover:text-gray-900" href="#">
              About
            </a>
            <a className="hover:text-gray-900" href="#">
              Services
            </a>
            <a className="hover:text-gray-900" href="#">
              Media
            </a>
            <a className="hover:text-gray-900" href="#">
              Gallery
            </a>
            <a className="hover:text-gray-900" href="#">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
