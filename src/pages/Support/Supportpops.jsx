import React from "react";
import popsImage1 from "../../assets/images/about/support1.png";
import popsImage2 from "../../assets/images/about/support.png";

const Pops = ({ onClose }) => {
  return (
    <div className="relative bg-black text-white min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      {/* Close Button (Optional if used in modal) */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-amber-500"
          aria-label="Close"
        >
          ×
        </button>
      )}

      {/* Title */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-amber-400">
          Pops Collection – Support
        </h2>
        <p className="mt-2 text-xl text-gray-300">
          Refreshing Flavors, Natural Ingredients & Global Reach
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-6 text-left">
          <div>
            <h5 className="font-semibold text-2xl text-amber-500">Our Concept</h5>
            <p className="text-xl mt-2 text-gray-300">
              The Pops Collection is a celebration of bold, vibrant flavors. Our
              team works relentlessly to deliver an unforgettable experience with
              each bite. We believe in using the finest ingredients to create
              pops that are both delicious and unique.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-2xl text-amber-500">What We Offer</h5>
            <p className="text-xl mt-2 text-gray-300">
              We offer a range of ice pops with creative flavors, from fruity
              classics to new experimental blends. Each pop is designed to
              provide a refreshing experience that will cool you down and excite
              your taste buds.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <h4 className="font-extrabold text-3xl text-amber-300">500+</h4>
              <p className="text-base mt-1 text-gray-400">Flavors to Explore</p>
            </div>
            <div className="text-center">
              <h4 className="font-extrabold text-3xl text-amber-300">100%</h4>
              <p className="text-base mt-1 text-gray-400">Natural Ingredients</p>
            </div>
            <div className="text-center">
              <h4 className="font-extrabold text-3xl text-amber-300">1M+</h4>
              <p className="text-base mt-1 text-gray-400">Pops Served</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <img
            src={popsImage1}
            alt="Pops Main"
            className="w-[300px] sm:w-[400px] h-auto rounded-lg shadow-xl object-cover"
          />
          <img
            src={popsImage2}
            alt="Pops Overlay"
            className="w-[300px] sm:w-[400px] h-auto rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Pops;
