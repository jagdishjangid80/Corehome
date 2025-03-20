import React from "react";

const PopUpCard = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="relative bg-white w-[85%] h-[80%] sm:w-[85%] sm:h-[85%] md:w-[80%] md:h-[80%] lg:w-full lg:h-full flex flex-col justify-center items-center text-center overflow-y-auto rounded-lg"
        style={{
          backgroundImage: data.background ? `url(${data.background})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Go Back Button */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 md:top-5 lg:top-6 left-2 sm:left-4 md:left-5 lg:left-6 px-2 sm:px-4 md:px-5 py-1 sm:py-2 bg-gray-300 text-black rounded-md text-xs sm:text-sm md:text-base lg:text-lg font-semibold"
        >
          Go Back
        </button>

        {/* Logo */}
        <img
          src={data.logo || "default-logo.png"}
          alt="Brand Logo"
          className="w-12 sm:w-18 md:w-20 lg:w-24 xl:w-28 h-12 sm:h-18 md:h-20 lg:h-24 xl:h-28 mt-8 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 mb-2 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8"
        />

        {/* Description */}
        <p className="text-gray-900 mb-2 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl w-full max-w-[85%] sm:max-w-5xl font-bold">
          {data.description || "No Description Available"}
        </p>

        {/* Website Link */}
        {data.website && (
          <a
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-red-900 font-semibold py-1 sm:py-2 md:py-3 px-2 sm:px-4 md:px-5 lg:px-6 mb-2 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 hover:underline text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
          >
            {data.visitText || "Visit Website"}
          </a>
        )}

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-5 md:py-6 lg:py-8 xl:py-10 overflow-x-auto">
          {data.images && data.images.length > 0 ? (
            data.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Preview ${index + 1}`}
                className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[324px] xl:w-[350px] h-[100px] sm:h-[120px] md:h-[150px] lg:h-[324px] xl:h-[350px] object-cover rounded-md"
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              No Images
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUpCard;