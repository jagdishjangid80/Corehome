import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black text-white p-4 flex justify-end items-center'>
      <span className='me-3'>Follow Core home</span>
      <div className='flex space-x-3'>
        <FaFacebook className="text-white text-xl cursor-pointer" />
        <FaTwitter className="text-white text-xl cursor-pointer" />
        <FaInstagram className="text-white text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
