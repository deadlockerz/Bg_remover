import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import logoHover from "../assets/logo_hover.png";
import removeBg from "../assets/removeBg.png";
import { Link } from "react-router-dom";
// import {useDispatch, useSelector} from 'react-redux';
import React from "react";

const Header = () => {
  const [company, setCompany] = useState(logo);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const crossRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        crossRef.current &&
        !crossRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-white bg-opacity-80 z-50 select-none">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between">
          <div
            className="flex items-center flex-row "
            onMouseOver={() => {
              setTimeout(() => {
                setCompany(logoHover);
              }, 150);
            }}
            onMouseOut={() => {
              setTimeout(() => {
                setCompany(logo);
              }, 150);
            }}
          >
            <Link to="/" className="flex w-auto  py-3 ">
              <img
                src={company}
                loading="eager"
                alt="L"
                className="sm:max-h-10 mr-4 w-12 ml-2 "
              />
              <div className="text-blue-500 text-2xl custom-font p-1">
                <img
                  src={removeBg}
                  loading="eager"
                  alt="remove Bg"
                  className="h-auto max-h-10 mr-4 w-40"
                />
              </div>
            </Link>
          </div>

          <div className="flex items-center justify-center">
            {/* Conditional rendering based on mobileMenuOpen state */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              ref={crossRef} // Assign ref to the cross button
              className={`h-8 w-12 absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[3px] ring-primary focus:ring-2 lg:hidden`}
            >
              <div
                className={`h-2 w-6 flex items-center justify-between transition-transform ${
                  mobileMenuOpen ? "rotate-45 translate-y-1" : "rotate-0"
                }`}
              >
                <span className="h-[2px] w-6 bg-black transform origin-right"></span>
              </div>
              <div
                className={`h-2 w-6 flex items-center justify-between transition-transform ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1" : "rotate-0"
                }`}
              >
                <span className="h-[2px] w-6 bg-black transform origin-right"></span>
              </div>
            </button>
            <nav
              ref={menuRef}
              className={`absolute right-4 ali top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-2 shadow -2 ${
                mobileMenuOpen ? "" : "hidden"
              } lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent`}
            >
              <ul className="block lg:flex">
                <li onClick={() => setMobileMenuOpen(false)}>
                  <Link
                    to="/"
                    className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-black lg:ml-12 lg:inline-flex"
                  >
                    Home
                  </Link>
                </li>
                <li onClick={() => setMobileMenuOpen(false)}>
                  <Link
                    to="/howToUse"
                    className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-black lg:ml-12 lg:inline-flex"
                  >
                    How to use
                  </Link>
                </li>

                {/* Render Login and SignUp as conditionally */}
                {mobileMenuOpen && window.innerWidth <= 640 && (
                  <>
                    <li onClick={() => setMobileMenuOpen(false)}>
                      <Link
                        to="/login"
                        className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-black lg:ml-12 lg:inline-flex"
                      >
                        Login
                      </Link>
                    </li>
                    <li onClick={() => setMobileMenuOpen(false)}>
                      <Link
                        to="/forgetPass"
                        className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-black lg:ml-12 lg:inline-flex"
                      >
                        SignUp
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
          <div className="flex justify-end">
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0 ">
              <Link
                to="/login"
                className="px-7 py-2 text-base font-medium text-dark hover:text-primary dark:text-black"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="px-7 py-2 text-base font-medium text-dark hover:text-primary dark:text-black"
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
