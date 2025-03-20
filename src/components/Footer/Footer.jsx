import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white px-4 py-2 flex justify-end items-center">
      <span className="me-3">Follow Core home</span>
      <div className="flex space-x-3">
        {[
          { icon: <FaTwitter />, color: "bg-gray-900" },
          { icon: <FaFacebook />, color: "bg-blue-600" },
          { icon: <FaInstagram />, color: "bg-pink-500" },
        ].map(({ icon, color }, idx) => (
          <div
            key={idx}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${color} transition-all cursor-pointer`}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
