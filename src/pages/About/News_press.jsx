import React from "react";
import Newsmain from "../../assets/images/about/News_press.png";
import Woman from "../../assets/images/about/woman.png";
import { ClockIcon } from "@heroicons/react/24/outline";

const NewsPress = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-4xl sm:text-5xl md:text-4xl font-bold"
        style={{ backgroundImage: `url(${Newsmain})` }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative text-center">
          <p>CORE HOME</p>
          <p>NEWS & PRESS</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6">
        {/* News Card */}
        <div className="relative w-[700px] h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${Woman})` }}
          >
            <div className="absolute inset-0 backdrop-blur-[0.5] rounded-lg"></div>
          </div>

          <div className="absolute bottom-24 left-0 right-0 flex items-end justify-center">
            <div className="p-6 rounded-lg text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                CLEAN MAMA PARTNERS WITH POPSHELF AND CORE HOME FOR AN EXCLUSIVE
                PRODUCT LINE
              </h2>
            </div>
          </div>
          <div className="absolute bottom-8 left-6">
            <a href="#" className="text-sm underline hover:text-gray-300">
              Read More
            </a>
          </div>
          <div className="absolute bottom-8 right-6 text-gray-400 text-sm flex items-center gap-2">
            <p>January 13, 2025</p>
            <ClockIcon className="h-4 w-4 text-gray-500" />
          </div>
        </div>
        <div className="w-[500px] h-auto flex justify-center items-center">
          <div className="w-full p-6 grid grid-cols-2 gap-4 rounded-lg shadow-lg text-center">
            {[
              { label: "All", bg: "bg-all.jpg" },
              { label: "Gadgets", bg: "bg-gadgets.jpg" },
              { label: "Health & Beauty", bg: "bg-health.jpg" },
              { label: "Pets", bg: "bg-pets.jpg" },
              { label: "Hydration", bg: "bg-hydration.jpg" },
              { label: "Cookware", bg: "bg-cookware.jpg" },
              { label: "Travel", bg: "bg-travel.jpg" },
            ].map((item, index) => (
              <button
                key={index}
                className="relative p-4 border border-white text-white rounded overflow-hidden group"
              >
                <span className="relative z-10 font-semibold">
                  {item.label}
                </span>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundImage: `url('/images/${item.bg}')` }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPress;
