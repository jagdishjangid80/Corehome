import React from "react";
import support1 from "../../assets/images/about/support1.png";
import support from "../../assets/images/about/support.png";

const Support = () => {
  return (
    <div className="flex flex-col items-center text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 bg-black">
      <div className="w-full max-w-[1280px] flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4 text-left">
          <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Support Sustainability
          </h4>

          <div>
            <h5 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-amber-500">
              Our Values
            </h5>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl mt-2 sm:mt-3 lg:mt-4">
              We pride ourselves on producing quality products while staying
              environmentally conscious. Our team consistently strives to innovate
              our production methods by using recycled materials and developing
              tools that promote a more eco-friendly lifestyle.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-amber-500">
              What We Offer
            </h5>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl mt-2 sm:mt-3 lg:mt-4">
              Our eco-friendly ranges prioritize the goals of our customers and
              our company with a refreshing twist on sustainability. We aim to
              reduce single-use plastics and other discarded materials into
              entirely new and exciting tools.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-2 sm:p-3 lg:p-4">
              <h4 className="font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl">
                5.4 Tons
              </h4>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2">
                Conserves at least 5.4 tons of VOC emissions annually.
              </p>
            </div>

            <div className="p-2 sm:p-3 lg:p-4">
              <h4 className="font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl">
                98%
              </h4>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2">
                Purifies emitted waste gas with up to 98% efficiency.
              </p>
            </div>

            <div className="p-2 sm:p-3 lg:p-4">
              <h4 className="font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl">
                1.8 Million
              </h4>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2">
                Generates 1.85 million kWh of electricity through solar panels.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[200px] sm:w-[260px] md:w-[320px] lg:w-[400px] h-[200px] sm:h-[260px] md:h-[320px] lg:h-[400px]">
            <img
              src={support}
              alt="Support Sustainability Background"
              className="w-full h-full rounded-lg shadow-lg object-cover"
            />
            <img
              src={support1}
              alt="Support Sustainability Overlay"
              className="w-[60%] h-[60%] rounded-lg shadow-lg object-cover absolute bottom-[-10%] left-[20%] sm:left-[15%] md:left-[-10%] lg:left-[-15%] xl:left-[-20%] z-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;