import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white p-4 flex justify-end items-center">
      <span className="me-3">Follow Core home</span>
      <div className="flex space-x-3">
        {[
          { icon: <FaTwitter />, hoverColor: "hover:bg-gray-900" },
          { icon: <FaFacebook />, hoverColor: "hover:bg-blue-600" },
          { icon: <FaInstagram />, hoverColor: "hover:bg-pink-500" },
        ].map(({ icon, hoverColor }, idx) => (
          <div
            key={idx}
            className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/10 ${hoverColor} transition-all cursor-pointer`}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
