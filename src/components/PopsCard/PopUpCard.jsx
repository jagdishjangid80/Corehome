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
          className="absolute top-4 left-4 bg-white text-black px-10 py-6 rounded-md text-2xl font-semibold hover:bg-gray-400 transition-all duration-300 z-50"
        >
          GO BACK
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
            <div className="mt-4 flex   justify-center">
              <a
                href={data.visitText}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-yellow-400 font-bold text-5xl py-2 px-6 rounded-md hover:shadow-lg hover:text-yellow-500 transition-all duration-300  "
              >
                {data.visitText || "Click Here"}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Image Grid */}
      <div className="w-full px-4 py-6">
        {/* First Part: Two Full Width Images */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {data.images && data.images.length > 1 ? (
            <>
              <div className="w-full flex justify-center">
                <img
                  src={data.images[0]}
                  alt="Preview 1"
                  className="w-full h-[400px] object-cover rounded-md"
                />
              </div>
              <div className="w-full flex justify-center">
                <img
                  src={data.images[1]}
                  alt="Preview 2"
                  className="w-full h-[400px] object-cover rounded-md"
                />
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-lg col-span-full text-center">
              No Images Available
            </p>
          )}
        </div>

        {/* Second Part: Left Side - One Image on top, Right Side - One Image */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {/* Left Column: One image on top and below it another image */}
          <div className="w-full sm:w-1/2 flex flex-col gap-4">
            {data.images && data.images.length > 2 ? (
              <>
                <div className="w-full flex justify-center ">
                  <img
                    src={data.images[2]}
                    alt="Preview 3"
                    className="w-full h-[250px] object-cover rounded-md"
                  />
                </div>
                <div className="w-full flex justify-center ">
                  <img
                    src={data.images[3]}
                    alt="Preview 4"
                    className="w-full h-[250px] object-cover rounded-md"
                  />
                </div>
              </>
            ) : (
              <p className="text-gray-500 text-lg col-span-full text-center">
                Not enough images available
              </p>
            )}
          </div>

          {/* Right Column: One image */}
          <div className="w-full sm:w-1/2 flex justify-center">
            {data.images && data.images.length > 4 ? (
              <img
                src={data.images[4]}
                alt="Preview 5"
                className="w-full h-[500px] object-cover rounded-md"
              />
            ) : (
              <p className="text-gray-500 text-lg col-span-full text-center">
                Not enough images available
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 right-4 sm:right-6 transform -translate-y-1/2 flex flex-col space-y-1 text-2xl z-[60]">
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-sm bg-black group transition-all duration-300 hover:bg-gray-300"
        >
          <FaGlobe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-sm bg-black group transition-all duration-300 hover:bg-blue-400"
        >
          <FaTwitter className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-sm bg-black group transition-all hover:bg-gradient-to-r from-pink-500 to-yellow-500 duration-300"
        >
          <FaInstagram className="h-6 w-6 sm:h-8 sm:w-8 text-white p-1 rounded-full" />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-sm bg-black group transition-all hover:bg-blue-600 duration-300"
        >
          <FaFacebook className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </a>
      </div>
    </div>
  );
};

export default PopUpCard;
