import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const ExtraPopUpCard = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-[1px] bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div
        className="relative bg-black w-[600px] max-w-3xl rounded-lg shadow-lg p-6 flex flex-col lg:flex-row items-center lg:items-start overflow-hidden"
        style={{
          maxHeight: "70vh",
          backgroundImage: data.background ? `url(${data.background})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="overflow-y-auto w-full p-4"
          style={{ maxHeight: "65vh" }}
        >
          <p className="font-extrabold text-2xl text-white">
            {data.title || ""}
          </p>

          <p className="text-white mb-4">
            {data.description || "No Description Available"}
          </p>

          {data.logos && data.logos.length > 0 && (
            <div className="flex justify-center items-center flex-wrap gap-4">
              {data.logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-20 h-20 object-contain"
                />
              ))}
            </div>
          )}

          {data.buttontext && (
            <button className="bg-white text-black font-bold w-full rounded-md h-[40px] transition mb-4">
              {data.buttontext}
            </button>
          )}

          <div className="w-full grid grid-cols-2 gap-4 mt-4">
            {data.text && <p className="text-white col-span-2">{data.text}</p>}
            {data.email && (
              <p className="text-amber-500 col-span-2">{data.email}</p>
            )}

            {data.images && data.images.length > 0 ? (
              data.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-32 object-cover rounded-md"
                />
              ))
            ) : (
              <p className="text-gray-500 text-center w-full col-span-2">
                No Images
              </p>
            )}
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-3 p-1 bg-[#ebbb53] text-white rounded-md transition"
        >
          <XMarkIcon className="w-8 h-8 text-black" />
        </button>
      </div>
    </div>
  );
};

export default ExtraPopUpCard;
