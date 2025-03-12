import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { FaInstagram } from "react-icons/fa";
import PopUpCard from "../Brand/PopUpCard";
import popupData from "../Js/popupData";
import ExtraCardpops from "./ExtraCard/ExtraCardpops";
import {
  brandData,
  slidingImages,
  listData,
} from "../../assets/images/brandImages";
const Brand = () => {
  const [activePopup, setActivePopup] = useState(null);
  return (
    <div className="bg-black py-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-full mx-auto">
        {brandData.map((brand, index) => (
          <a
            key={index}
            href={brand.link}
            className="relative group flex flex-col items-center justify-center w-full aspect-square bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute inset-0">
              <img
                src={brand.image}
                alt={brand.alt}
                className="w-full h-full object-cover blur-[1px]"
              />
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={brand.logo}
                alt={`${brand.alt} logo`}
                className="w-16 sm:w-20 md:w-24 object-contain"
              />
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("Opening popup with ID:", index + 1);
                setActivePopup(index + 1);
              }}
              className="absolute bottom-4 bg-white cursor-pointer text-black px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-[#ebbb53]"
            >
              EXPLORE NOW
            </button>
          </a>
        ))}
      </div>
      <div className="bg-black py-4 overflow-hidden">
        <div className="flex space-x-8 animate-scroll">
          {listData.concat(listData).map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-white text-lg font-semibold px-4"
            >
              <span className="w-4 h-4 flex items-center justify-center bg-[#ebbb53] rounded-full">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <ExtraCardpops />
      </div>
      <Marquee pauseOnHover speed={50} className="mt-4">
        {slidingImages.map((img, index) => (
          <div key={index} className="relative mx-3 w-[370px] h-[300px] group">
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover "
            />
            <FaInstagram className="absolute inset-0 m-auto text-white text-2xl opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300 bg-[#ebbb53] h-[51px] w-[51px] rounded-2xl" />
          </div>
        ))}
      </Marquee>
      {activePopup !== null && (
        <PopUpCard
          data={popupData.find((card) => card.id === activePopup)}
          onClose={() => setActivePopup(null)}
        />
      )}
    </div>
  );
};

export default Brand;
