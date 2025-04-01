import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { FaInstagram } from "react-icons/fa";
import PopUpCard from "../../components/PopsCard/PopUpCard";
import popupData from "../../Js/popupData";
import ExtraCardpops from "./ExtraCard/ExtraCardpops";
import SlidingImagesPage from '../../components/SlidingImagesPage';
import {
  brandData,
  listData,
} from "../../assets/images/brandImages";

const Brand = () => {
  const [activePopup, setActivePopup] = useState(null);

  return (
    <div className="bg-black pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      {/* Brand Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 w-full max-w-full mx-auto">
        {brandData.map((brand, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center justify-center w-full aspect-square bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            onClick={() => setActivePopup(index + 1)}
          >
            <div className="absolute inset-0">
              <img
                src={brand.image}
                alt={brand.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={brand.logo}
                alt={`${brand.alt} logo`}
                className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 object-contain"
              />
            </div>
            <button className="absolute bottom-3 sm:bottom-4 md:bottom-5 bg-white cursor-pointer text-black px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-sm opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-[#ebbb53] text-xs sm:text-sm md:text-base lg:text-lg">
              EXPLORE NOW
            </button>
          </div>
        ))}
      </div>

      {/* Marquee for List Data */}
      <div className="bg-black pt-4 sm:pt-5 md:pt-6 lg:pt-8 xl:pt-10 pb-4 sm:pb-5 md:pb-6 lg:pb-8 xl:pb-10 overflow-hidden whitespace-nowrap">
        <Marquee pauseOnHover speed={50} direction="left">
          <div className="flex gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 xl:gap-x-14">
            {listData.concat(listData).map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8"
              >
                <span className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center justify-center bg-[#ebbb53] rounded-full">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Extra Card Pops Section */}
      <div className="pt-4 sm:pt-5 md:pt-6 lg:pt-8 xl:pt-10 pb-4 sm:pb-5 md:pb-6 lg:pb-8 xl:pb-10">
        <ExtraCardpops />
      </div>

      {/* Sliding Images Marquee */}
      {/* <Marquee
        pauseOnHover
        speed={50}
        direction="left"
        className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10"
      >
        <div className="flex gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-8 xl:gap-x-10">
          {slidingImages.map((img, index) => (
            <div
              key={index}
              className="relative w-[280px] sm:w-[320px] md:w-[340px] lg:w-[370px] xl:w-[400px] h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] xl:h-[320px] group"
            >
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
              <a
                href="https://www.instagram.com/corehomeproducts/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaInstagram className="text-white text-xl sm:text-2xl md:text-3xl cursor-pointer bg-[#ebbb53] h-[40px] sm:h-[45px] md:h-[51px] lg:h-[55px] xl:h-[60px] w-[40px] sm:w-[45px] md:w-[51px] lg:w-[55px] xl:w-[60px] rounded-2xl flex items-center justify-center" />
              </a>
            </div>
          ))}
        </div>
      </Marquee> */}
      <SlidingImagesPage/>
      {activePopup !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <PopUpCard
            data={popupData.find((card) => card.id === activePopup)}
            onClose={() => setActivePopup(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Brand;