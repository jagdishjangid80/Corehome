import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const PopUpCard = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-blur-50 bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50 p-4 text-white">
      <div className="relative bg-[#000000] text-white w-full max-w-3xl rounded-lg p-6 sm:p-8 md:p-10 shadow-lg flex flex-col items-center overflow-hidden">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Two Brothers, One Vision
        </h1>

        {/* Leadership Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 w-full">
          <div className="p-4  rounded-lg shadow-md">
            <p className="text-lg sm:text-xl leading-relaxed">
              “As the President of Core Home, my goal is to drive innovation while ensuring our values of sustainability and quality remain at the core of everything we do.”
            </p>
            <p className="text-yellow-400 font-semibold mt-4 text-right">
              - Alan, President
            </p>
          </div>

          <div className="p-4  rounded-lg shadow-md">
            <p className="text-lg sm:text-xl leading-relaxed">
              “Leading Core Home as CEO, I focus on fostering creativity, adaptability, and a strong team culture that embraces diversity and excellence.”
            </p>
            <p className="text-yellow-400 font-semibold mt-4 text-right">
              - Steven, CEO
            </p>
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className=" p-5 sm:p-6 rounded-lg shadow-md w-full text-center">
          <p className="text-lg sm:text-xl leading-relaxed">
            Our leadership team believes in empowering employees, fostering collaboration, and driving sustainable growth. We are committed to maintaining a culture that values integrity, creativity, and forward-thinking innovation.
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default PopUpCard;
