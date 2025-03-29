import React from "react";
import support1 from "../../assets/images/about/support1.png";
import support from "../../assets/images/about/support.png";

const Support = () => {
  return (
    <div className="flex flex-col items-center text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-black">
      <div className="w-full max-w-[1280px] flex flex-col-reverse md:flex-row items-center gap-20">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-2 text-left">
          <h4 className="font-bold text-5xl">Support Sustainability</h4>

          <div>
            <h5 className="font-semibold text-2xl text-amber-500">Our Values</h5>
            <p className="text-2xl mt-4">
              We pride ourselves on producing quality products while staying
              environmentally conscious. Our team consistently strives to innovate
              our production methods by using recycled materials and developing
              tools that promote a more eco-friendly lifestyle.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-2xl text-amber-500">What We Offer</h5>
            <p className="text-2xl mt-4">
              Our eco-friendly ranges prioritize the goals of our customers and
              our company with a refreshing twist on sustainability. We aim to
              reduce single-use plastics and other discarded materials into
              entirely new and exciting tools.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5">
            <div className="p-2">
              <h4 className="font-extrabold text-2xl">5.4 Tons</h4>
              <p className="text-lg mt-2">
                Conserves at least 5.4 tons of VOC emissions annually.
              </p>
            </div>

            <div className="p-2">
              <h4 className="font-extrabold text-2xl">98%</h4>
              <p className="text-lg mt-2">
                Purifies emitted waste gas with up to 98% efficiency.
              </p>
            </div>

            <div className="p-2">
              <h4 className="font-extrabold t ext-2xl">1.8 Million</h4>
              <p className="text-lg mt-2">
                Generates 1.85 million kWh of electricity panels.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* support Image - Lower and right */}
          <img
            src={support}
            alt="Support Sustainability Background"
            className="w-[500px] h-[500px] rounded-lg shadow-lg object-cover relative mt-20 ml-10"
          />

          {/* support1 Image - Positioned at top-left */}
          <img
            src={support1}
            alt="Support Sustainability Overlay"
            className="absolute top-[-100px] left-[-60px] w-[550px] h-[250px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
