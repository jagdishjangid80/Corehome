import React from "react";
import support1 from "../../assets/images/about/support1.png";
import support from "../../assets/images/about/support.png";

const Support = () => {
  return (
    <div className="flex flex-col md:flex-row items-center text-2xl p-6 space-y-10 md:space-y-0 md:space-x-10">
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h4 className="font-bold text-6xl mb-4 text-white">
          Support Sustainability
        </h4>

        <div>
          <h5 className="font-semibold text-3xl text-amber-500">Our Values</h5>
          <p className="text-2xl text-white mt-2">
            We pride ourselves on producing quality products while staying
            environmentally conscious. Our team consistently strives to innovate
            our production methods by using recycled materials and developing
            tools that promote a more eco-friendly lifestyle.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-3xl text-amber-500">
            What We Offer
          </h4>
          <p className="text-2xl text-white mt-2">
            Our eco-friendly ranges prioritize the goals of our customers and
            our company with a refreshing twist on sustainability. We aim to
            reduce single-waste plastics and other discarded materials into
            entirely new and exciting tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4">
            <h4 className="font-extrabold text-3xl">5.4 Tons</h4>
            <p className="text-2xl text-white mt-2">
              Conserves at least 5.4 tons of VOC emissions annually.
            </p>
          </div>

          <div className="p-4">
            <h4 className="text-3xl font-extrabold">98%</h4>
            <p className="text-2xl text-white mt-2">
              Purifies emitted waste gas with up to 98% efficiency.
            </p>
          </div>

          <div className="p-4">
            <h4 className="text-3xl font-extrabold">1.8 Million</h4>
            <p className="text-2xl text-white mt-2">
              Generates 1.85 million kWh of electricity through solar panels.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[300px] md:h-[400px]">
          <img
            src={support}
            alt="Support Sustainability"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg object-cover"
          />
          <img
            src={support1}
            alt="Support Sustainability"
            className="w-[80%] h-[80%] rounded-lg shadow-lg object-cover absolute bottom-[3%] right-[-60%] z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
