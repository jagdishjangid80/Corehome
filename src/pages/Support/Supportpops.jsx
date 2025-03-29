import React from "react";
import popsImage1 from "../../assets/images/about/support1.png";
import popsImage2 from "../../assets/images/about/support.png";

const Pops = () => {
  return (
    <div className="flex flex-col items-center text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-black">
      <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="w-full space-y-4 text-left">
          <h4 className="font-bold text-5xl">Pops Collection</h4>

          <div>
            <h5 className="font-semibold text-2xl text-amber-500">Our Concept</h5>
            <p className="text-2xl mt-4">
              The Pops Collection is a celebration of bold, vibrant flavors. Our
              team works relentlessly to deliver an unforgettable experience with
              each bite. We believe in using the finest ingredients to create
              pops that are both delicious and unique.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-2xl text-amber-500">What We Offer</h5>
            <p className="text-2xl mt-4">
              We offer a range of ice pops with creative flavors, from fruity
              classics to new experimental blends. Each pop is designed to
              provide a refreshing experience that will cool you down and excite
              your taste buds.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5">
            <div className="p-2">
              <h4 className="font-extrabold text-2xl">500+</h4>
              <p className="text-lg mt-2">Different Flavors to Explore</p>
            </div>

            <div className="p-2">
              <h4 className="font-extrabold text-2xl">100%</h4>
              <p className="text-lg mt-2">Made with Natural Ingredients</p>
            </div>

            <div className="p-2">
              <h4 className="font-extrabold text-2xl">1 Million+</h4>
              <p className="text-lg mt-2">Pops Served Globally</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center gap-4">
          {/* pops Image - Lower and right */}
          <img
            src={popsImage1}
            alt="Pops Collection Background"
            className="w-[500px] h-[500px] rounded-lg shadow-lg object-cover"
          />

          {/* pops Image - Positioned at top-left */}
          <img
            src={popsImage2}
            alt="Pops Collection Overlay"
            className="w-[550px] h-[250px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Pops;
