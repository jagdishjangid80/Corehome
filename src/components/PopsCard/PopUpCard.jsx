import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

const PopUpCard = ({ data, onClose }) => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center z-50 overflow-y-auto">
      {/* Main Content */}
      <div
        className="relative w-full h-screen flex justify-center items-center overflow-hidden"
        style={{
          backgroundImage: data.background ? `url(${data.background})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 bg-gray-300 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-400 transition-all duration-300 z-50"
        >
          Go Back
        </button>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
        {data.logo && (
          <img
            src={data.logo}
            alt="Brand Logo"
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-lg"
          />
        )}
      </div>

      <div className="relative w-full flex flex-col justify-center items-center text-center py-10 px-6 min-h-[100vh] bg-gradient-to-b from-black to-black">
        <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] text-white">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
            {data.description || "No Description Available"}
          </p>
          {data.visitText && (
            <div className="mt-4 flex justify-center">
              <a
                href={data.visitText}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-yellow-700 font-bold py-2 px-6 rounded-md hover:shadow-lg hover:text-yellow-500 transition-all duration-300 text-base sm:text-xl"
              >
                {data.visitText || "Click Here"}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto px-4 bg-gradient-to-t from-black to-transparent">
        {data.images && data.images.length > 0 ? (
          data.images.map((img, index) => (
            <div key={index} className="w-full flex justify-center">
              <img
                src={img}
                alt={`Preview ${index + 1}`}
                className="w-full h-auto max-w-[600px] object-cover rounded-md border border-gray-200 shadow-lg"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg col-span-full text-center">
            No Images Available
          </p>
        )}
      </div>

      <div className="fixed top-1/2 right-4 sm:right-6 transform -translate-y-1/2 flex flex-col space-y-4 sm:space-y-5 text-2xl z-[60]">
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-sm bg-black group transition-all duration-300"
        >
          <FaGlobe className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-gray-300" />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-sm bg-black group transition-all duration-300"
        >
          <FaTwitter className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-blue-400" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-sm bg-black group transition-all duration-300"
        >
          <FaInstagram className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:bg-gradient-to-r from-pink-500 to-yellow-500 p-1 rounded-full" />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-sm bg-black group transition-all duration-300"
        >
          <FaFacebook className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-blue-600" />
        </a>
      </div>
    </div>
  );
};

export default PopUpCard;
