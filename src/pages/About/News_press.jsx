import React from "react";
import Newsmain from "../../assets/images/about/News_press.png";
import Woman from "../../assets/images/about/woman.png";

const NewsPress = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Background Image Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl font-bold"
        style={{ backgroundImage: `url(${Newsmain})` }}
      >
        <div className="text-center">
          <p>CORE HOME</p>
          <p>NEWS & PRESS</p>
        </div>
      </div>

      {/* Content Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12">
        {/* Left Side - Image and Text */}
        <div className="relative">
          {/* Full Width Image Section */}
          <div
            className="w-full h-64 sm:h-80 md:h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${Woman})` }}
          ></div>
          {/* Text Section above the Image */}
          <div className="absolute top-10 left-10 right-10 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              CLEAN MAMA PARTNERS WITH POPSHELF AND CORE HOME FOR AN EXCLUSIVE
              PRODUCT LINE
            </h2>
          </div>
        </div>

        {/* Right Side - Category Buttons Section */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 justify-center">
          {[
            "All",
            "Gadgets",
            "Health & Beauty",
            "Pets",
            "Hydration",
            "Cookware",
            "Travel",
          ].map((category, index) => (
            <button
              key={index}
              className="border border-gray-500 text-sm w-24 h-10 flex items-center justify-center hover:bg-gray-200 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPress;
