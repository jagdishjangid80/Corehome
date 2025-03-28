import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ExtraPopUpCard = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-[1px] bg-opacity-50 flex justify-center items-center z-50 p-2 sm:p-4 md:p-6 lg:p-8">
      <div
        className="relative bg-black w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 max-w-4xl rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center lg:items-start overflow-hidden"
        style={{
          maxHeight: "85vh",
          backgroundImage: data.background ? `url(${data.background})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overflow-y-auto w-full" style={{ maxHeight: "80vh" }}>
          <p className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-2 sm:mb-3 md:mb-4 lg:mb-5">
            {data.title || ""}
          </p>

          <p className="text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            {data.description || "No Description Available"}
          </p>

          {data.logos && data.logos.length > 0 && (
            <div className="flex justify-center items-center flex-wrap gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4 sm:mb-6">
              {data.logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain"
                />
              ))}
            </div>
          )}

          {data.buttontext && (
            <button className="bg-white text-black font-bold w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto block rounded-md py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl transition hover:bg-[#ebbb53] hover:text-white mb-4 sm:mb-6 md:mb-8">
              {data.buttontext}
            </button>
          )}

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4">
            {data.text && (
              <p className="text-white col-span-full text-sm sm:text-base md:text-lg lg:text-xl">
                {data.text}
              </p>
            )}
            {data.email && (
              <p className="text-amber-500 col-span-full text-sm sm:text-base md:text-lg lg:text-xl">
                {data.email}
              </p>
            )}

            {data.images && data.images.length > 0 ? (
              data.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-cover rounded-md"
                />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full text-sm sm:text-base md:text-lg">
                No Images
              </p>
            )}
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 p-1 sm:p-1.5 md:p-2 bg-[#ebbb53] text-white rounded-md transition hover:bg-white hover:text-black"
        >
          <XMarkIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black" />
        </button>
      </div>
    </div>
  );
};

export default ExtraPopUpCard;
