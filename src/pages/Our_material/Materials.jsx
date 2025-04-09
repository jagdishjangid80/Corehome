import React from "react";
import aboutlast from "../../assets/images/brand/back.png";

const Materials = () => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <h4 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4 text-white">Our Materials</h4>

      <div className="max-w-3xl space-y-6">
        <p className="text-lg sm:text-xl md:text-2xl text-white">
          We pride ourselves on only using the highest quality, food-safe materials to ensure optimal impact on the environment and our customers.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl text-white">
          To find out more about <span className="text-amber-400">PFAs.</span>
        </p>
        <div className="flex justify-center">
          <img
            src={aboutlast}
            alt="Materials"
            className="rounded-lg shadow-xl object-cover w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[700px] xl:max-w-[700px] h-auto max-h-[500px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[550px] xl:max-h-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Materials;