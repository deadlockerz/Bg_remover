import React from 'react';
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoFacebookCircle,
  BiLogoTwitter,
} from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='bg-gray-600 text-white py-12'>
      <div className='flex justify-center space-x-4 mt-6 mb-6'>
        <a
          href='/'
          className='text-gray-400 hover:text-gray-200'
        >
          <BiLogoFacebookCircle size={24} />
        </a>
        <a
          href='/'
          className='text-gray-400 hover:text-gray-200'
        >
          <BiLogoLinkedin size={24} />
        </a>
        <a
          href='/'
          className='text-gray-400 hover:text-gray-200'
        >
          <BiLogoInstagram size={24} />
        </a>
        <a
          href='/'
          className='text-gray-400 hover:text-gray-200'
        >
          <BiLogoTwitter size={24} />
        </a>
      </div>
      <div className='container mx-auto flex flex-col items-center'>
        <nav className='flex flex-col md:flex-row space-x-4 gap-3 text-center'>
          <a
            href='/'
            className='hover:underline'
          >
            Privacy Policy
          </a>
          <a
            href='/'
            className='hover:underline'
          >
            Terms of Service
          </a>
          <a
            href='/'
            className='hover:underline'
          >
            Contact Us
          </a>
        </nav>
      </div>
      <div className='text-center  mt-8'>
        <p>&copy; {new Date().getFullYear()} remove bg. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
