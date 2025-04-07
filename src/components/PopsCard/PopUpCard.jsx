import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import "../../assets/styles/popscard.css";

const PopUpCard = ({ data, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const scrollRef = useRef(null);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev + 1 < data.images?.length ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev - 1 >= 0 ? prev - 1 : data.images?.length - 1
    );
  };

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const scrollWidth = scrollRef.current.scrollWidth;
    const clientWidth = scrollRef.current.clientWidth;

    // Show arrows if the scroll position is not at the start or end
    setShowArrows(scrollLeft > 0 || scrollLeft < scrollWidth - clientWidth);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center z-50 overflow-y-auto">
      <div
        className="relative w-full h-screen flex justify-center items-center overflow-hidden"
        style={{
          backgroundImage: data?.background
            ? `url(${data.background})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded-md text-lg font-semibold hover:bg-yellow-600 transition-all duration-300 z-50"
        >
          GO BACK
        </button>

        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80" />

        {data?.logo && (
          <img
            src={data.logo}
            alt="Brand Logo"
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-lg"
          />
        )}

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-40 pointer-events-none" />
      </div>

      <div className="relative w-full flex flex-col justify-center items-center text-center py-10 px-6 min-h-[100vh] bg-black">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
        <div className="relative z-20 w-full md:w-[80%] lg:w-[70%] xl:w-[60%] text-white">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            {data?.description || "No Description Available"}
          </p>
          {data?.visitText && (
            <div className="mt-4 flex justify-center">
              <a
                href={data.visitText}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-yellow-400 font-bold text-2xl sm:text-3xl md:text-4xl py-2 px-6 rounded-md hover:shadow-lg hover:text-yellow-500 transition-all duration-300"
              >
                {data.visitText}
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="w-full px-4 py-6 bg-black">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 overflow-x-auto scrollbar-hide"
        >
          {data?.images?.length > 1 ? (
            data.images.slice(0, 2).map((img, i) => (
              <div key={i} className="w-full flex justify-center">
                <img
                  src={img}
                  alt={`Preview ${i + 1}`}
                  className="w-full h-[400px] object-cover rounded-md cursor-pointer"
                  onClick={() => handleImageClick(i)}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg col-span-full text-center">
              No Images Available
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="w-full sm:w-1/2 flex flex-col gap-4">
            {[2, 3].map(
              (i) =>
                data?.images?.[i] && (
                  <div key={i} className="w-full flex justify-center">
                    <img
                      src={data.images[i]}
                      alt={`Preview ${i + 1}`}
                      className="w-full h-[250px] object-cover rounded-md cursor-pointer"
                      onClick={() => handleImageClick(i)}
                    />
                  </div>
                )
            )}
          </div>
          <div className="w-full sm:w-1/2 flex justify-center">
            {data?.images?.[4] ? (
              <img
                src={data.images[4]}
                alt="Preview 5"
                className="w-full h-[500px] object-cover rounded-md cursor-pointer"
                onClick={() => handleImageClick(4)}
              />
            ) : (
              <p className="text-gray-500 text-lg text-center">
                Not enough images available
              </p>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-[9999] px-4 py-6">
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-white"
          >
            <XMarkIcon className="h-7 w-7" />
          </button>

          <button
            onClick={handlePrev}
            className={`absolute left-4 top-1/2 -translate-y-1/2 text-white ${
              !showArrows ? "hidden" : ""
            }`}
          >
            <ChevronLeftIcon className="h-9 w-9" />
          </button>

          <img
            src={data.images[currentImageIndex]}
            alt={`Gallery ${currentImageIndex + 1}`}
            className="max-w-[90%] max-h-[70vh] object-contain"
          />

          <button
            onClick={handleNext}
            className={`absolute right-4 top-1/2 -translate-y-1/2 text-white ${
              !showArrows ? "hidden" : ""
            }`}
          >
            <ChevronRightIcon className="h-9 w-9" />
          </button>

          {/* Thumbnails */}
          <div className="mt-6 w-full overflow-x-auto scrollbar-hide">
            <div className="flex justify-center items-center gap-4 px-6">
              {data.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 object-cover cursor-pointer rounded-md ${
                    currentImageIndex === index
                      ? "border-4 border-yellow-400"
                      : "opacity-70 hover:opacity-100"
                  } transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Social Icons */}
      <div className="fixed top-1/2 right-4 sm:right-6 transform -translate-y-1/2 flex flex-col space-y-1 text-2xl z-[60]">
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-sm bg-black hover:bg-gray-300 transition-all duration-300"
        >
          <FaGlobe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-sm bg-black hover:bg-blue-400 transition-all duration-300"
        >
          <FaTwitter className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-sm bg-black hover:bg-gradient-to-r from-pink-500 to-yellow-500 transition-all duration-300"
        >
          <FaInstagram className="h-6 w-6 sm:h-8 sm:w-8 text-white p-1 rounded-full" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-sm bg-black hover:bg-blue-600 transition-all duration-300"
        >
          <FaFacebook className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </a>
      </div>
    </div>
  );
};

export default PopUpCard;