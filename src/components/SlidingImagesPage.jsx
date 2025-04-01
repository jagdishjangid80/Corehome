import React from "react";
import { FaInstagram } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { slidingImages } from "../assets/images/brandImages";

const SlidingImagesPage = () => {
  return (
    <div className="w-full py-8">
      <Marquee
        pauseOnHover
        speed={50}
        direction="left"
        className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10"
      >
        <div className="flex gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-8">
          {slidingImages.map((img, index) => (
            <div
              key={index}
              className="relative w-full sm:w-[320px] md:w-[340px] lg:w-[370px] xl:w-[400px] h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] xl:h-[320px] group"
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
                <div className="bg-[#ebbb53] rounded-full w-[70px] sm:w-[75px] md:w-[75px] lg:w-[80px] xl:w-[85px] h-[70px] sm:h-[75px] md:h-[75px] lg:h-[80px] xl:h-[85px] flex items-center justify-center">
                  <FaInstagram className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SlidingImagesPage;
