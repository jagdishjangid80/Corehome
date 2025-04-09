import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const CollaboratePopUp = ({ data, onClose }) => {
  return (
    <div
      className="relative bg-black w-full max-w-4xl rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center lg:items-start overflow-hidden"
      style={{
        maxHeight: "85vh",
        backgroundImage: data.background ? `url(${data.background})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overflow-y-auto w-full pr-2" style={{ maxHeight: "80vh" }}>
        <p className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-3 sm:mb-4">
          {data.title || "No Title"}
        </p>

        <p className="text-white mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg lg:text-xl">
          {data.description || "No Description Available"}
        </p>

        {data.buttontext && (
          <button className="bg-white text-black font-bold w-full max-w-xs mx-auto block rounded-md py-2 text-sm sm:text-base transition hover:bg-[#ebbb53] hover:text-white mb-4 sm:mb-6">
            {data.buttontext}
          </button>
        )}

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {data.text && (
            <p className="text-white col-span-full text-sm sm:text-base md:text-lg">
              {data.text}
            </p>
          )}

          {data.images && data.images.length > 0 ? (
            data.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Preview ${index + 1}`}
                className="w-full h-[180px] sm:h-[200px] object-cover rounded-md"
              />
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-full text-sm sm:text-base">
              No Images Available
            </p>
          )}
        </div>
      </div>

      <button
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 p-1.5 sm:p-2 bg-[#ebbb53] text-white rounded-md transition hover:bg-white hover:text-black"
      >
        <XMarkIcon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
      </button>
    </div>
  );
};

export default CollaboratePopUp;