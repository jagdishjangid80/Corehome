import React from "react";
import support1 from "../../assets/images/about/support1.png";
import support from "../../assets/images/about/support.png";

const Support = () => {
  return (
    <div className="flex flex-col items-center text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-16 bg-black min-h-screen">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 lg:gap-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6 sm:space-y-8 text-center md:text-left">
          <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Support Sustainability
          </h4>

          <div className="space-y-4 sm:space-y-5">
            <h5 className="font-semibold text-lg sm:text-xl md:text-2xl text-amber-500">
              Our Values
            </h5>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              We pride ourselves on producing quality products while staying
              environmentally conscious. Our team consistently strives to
              innovate our production methods by using recycled materials and
              developing tools that promote a more eco-friendly lifestyle.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <h5 className="font-semibold text-lg sm:text-xl md:text-2xl text-amber-500">
              What We Offer
            </h5>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Our eco-friendly ranges prioritize the goals of our customers and
              our company with a refreshing twist on sustainability. We aim to
              reduce single-use plastics and other discarded materials into
              entirely new and exciting tools.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div className="p-2 text-center">
              <h4 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                5.4 Tons
              </h4>
              <p className="text-sm sm:text-base md:text-lg mt-2 leading-relaxed">
                Conserves at least 5.4 tons of VOC emissions annually.
              </p>
            </div>

            <div className="p-2 text-center">
              <h4 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                98%
              </h4>
              <p className="text-sm sm:text-base md:text-lg mt-2 leading-relaxed">
                Purifies emitted waste gas with up to 98% efficiency.
              </p>
            </div>

            <div className="p-2 text-center">
              <h4 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                1.8 Million
              </h4>
              <p className="text-sm sm:text-base md:text-lg mt-2 leading-relaxed">
                Generates 1.85 million kWh of electricity panels.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-end relative mb-8 md:mb-0">
          <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[430px] lg:max-w-[680px] h-[400px] sm:h-[500px] md:h-[600px]">
            {/* Base Image */}
            <img
              src={support}
              alt="Support Sustainability Background"
              className="w-full h-full rounded-lg shadow-lg object-cover hidden sm:block"  
            />

            {/* Overlay Image */}
            <img
              src={support1}
              alt="Support Sustainability Overlay"
              className="absolute top-[-40px] right-[-20px] sm:top-[-60px] sm:right-[-50px] 
              md:top-[-80px] md:right-[-60px] lg:top-[-100px] lg:right-[-70px]
              w-[55%] sm:w-[65%] md:w-[70%] lg:w-[75%] xl:w-[80%] h-auto 
              rounded-lg shadow-lg object-cover z-10 hidden sm:block"  
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
