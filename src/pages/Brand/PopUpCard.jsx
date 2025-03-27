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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center z-50 overflow-y-auto scrollbar-hide">
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
        <div className="w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] text-white">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold px-6 sm:px-10 md:px-16 lg:px-20">
            {data.description || "No Description Available"}
          </p>
          {data.visitText && (
            <div className="mt-4 flex justify-center">
              <a
                href={data.visitText}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-yellow-300 font-bold py-2 px-6 rounded-md hover:shadow-lg hover:text-yellow-500 transition-all duration-300 text-4xl"
              >
                {data.visitText || "Click Here"}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Social Media Icons - Right Center */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 flex flex-col space-y-5 text-3xl z-50">
        {data.website && (
          <a
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300"
          >
            <FaGlobe className="h-8 w-8 text-white hover:text-blue-500 transition-all duration-300" />
          </a>
        )}
        {data.twitter && (
          <a
            href={data.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300"
          >
            <FaTwitter className="h-8 w-8 text-white hover:text-blue-400 transition-all duration-300" />
          </a>
        )}
        {data.instagram && (
          <a
            href={data.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-all duration-300"
          >
            <FaInstagram className="h-8 w-8 text-white hover:text-pink-500 transition-all duration-300" />
          </a>
        )}
        {data.facebook && (
          <a
            href={data.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-all duration-300"
          >
            <FaFacebook className="h-8 w-8 text-white hover:text-blue-700 transition-all duration-300" />
          </a>
        )}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto bg-gradient-to-t from-black to-transparent">
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
    </div>
  );
};

export default PopUpCard;