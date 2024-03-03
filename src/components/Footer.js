import React from "react";

const Footer = () => {
  return (
    <>
      
       
      <footer className="flex flex-row space-y-10 bg-slate-500 items-stretch justify-around sticky bottom-0">
        <div className="flex flex-col justify-center space-x-50">
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
