import React, { useState } from "react";
import back from "../assets/images/about/innovation.png";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const Innovation = () => {
  const [step, setStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ["Web Search", "Core Home Website", "Inventor Community", "Other"];

  const handleOptionClick = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full p-6 bg-black text-white">
      <div
        className="relative w-full md:w-1/2 h-96 bg-cover bg-center flex items-center justify-center text-white text-xl font-bold "
        style={{ backgroundImage: `url(${back})`  }}
      >
        <div className="text-White font-extrabold text-3xl">Let's Innovate</div>
      </div>
      <div className="w-full md:w-1/2 p-8 mt-6 md:mt-0">
        {step === 1 && (
          <div>
            <p className="text-white mb-4">Let's start with your names.</p>
            <form className="space-y-4">
              <div>
                <label className="block text-white">FIRST NAME*</label>
                <input
                  type="text"
                  placeholder="e.g. John"
                  className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0"
                  required
                />
              </div>
              <div>
                <label className="block text-white">LAST NAME*</label>
                <input
                  type="text"
                  placeholder="e.g. Doe"
                  className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0"
                  required
                />
              </div>
              <div>
                <label className="block text-white">PRODUCT NAME*</label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full bg-white text-black p-2 rounded-md hover:bg-[#ebbb53] cursor-pointer"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
         {step === 2 && (
          <div>
            <div className="grid grid-cols-2 gap-4">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleOptionClick(option)}
                  className={`w-full p-2 rounded-md border border-white cursor-pointer ${
                    selectedOptions.includes(option) ? "hover:bg-[#ebbb53] shadow-lg" : "bg-transparent text-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={prevStep}
                className="bg-transparent border border-amber-50 w-[8%] text-white p-2 rounded-md hover:bg-gray-700 cursor-pointer"
              >
                <ArrowLeftIcon className="w-7 h-7 text-white cursor-pointer" />
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="w-[50%] bg-white text-black p-2 rounded-md hover:bg-[#ebbb53] cursor-pointer"
              >
                Next Step
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <form className="space-y-4">
            <div>
              <label className="block text-white">
                Have you previously had this product manufactured or prototyped?
                If yes, explain.*
              </label>
              <textarea
                placeholder="Type Here..."
                className="w-[70%] border-b p-2 bg-transparent focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div>
              <label className="block text-white">
                Do you have any CAD drawings, product blueprints? Or
                professional renderings of your products?*
              </label>
              <textarea
                placeholder="Type Here..."
                className="w-[70%] border-b p-2 bg-transparent focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-transparent border border-amber-50 w-[8%] text-white p-2 rounded-md hover:bg-gray-700 cursor-pointer"
              >
                <ArrowLeftIcon className="w-7 h-7 text-white cursor-pointer" />
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="w-[50%] bg-white text-black p-2 rounded-md hover:bg-[#ebbb53] cursor-pointer"
              >
                Next Step
              </button>
            </div>
          </form>
        )}
        {step === 4 && (
          <form className="space-y-4">
            <div>
              <label className="block text-white">
                Have you filed with the USPTO for a specific trademark?*
              </label>
              <textarea
                placeholder="Type Here..."
                className="w-[70%] border-b p-2 bg-transparent focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div>
              <label className="block text-white">
                Have you submitted your product idea to any other companies for
                consideration?*
              </label>
              <textarea
                placeholder="Type Here..."
                className="w-[70%] border-b p-2 bg-transparent focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-transparent border border-amber-50 w-[8%]  text-white p-2 rounded-md hover:bg-gray-700 cursor-pointer"
              >
                <ArrowLeftIcon className="w-7 h-7 text-white cursor-pointer" />
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="w-[50%] bg-white text-black p-2 rounded-md hover:bg-[#ebbb53] cursor-pointer"
              >
                Next Step
              </button>
            </div>
          </form>
        )}
        {step === 5 && (
          <div className="text-slate-50">
            <h2 className="text-xl font-bold mb-4">Complete Submission</h2>
            <p>
              Thanks for taking the time to complete this form. <br />
              Please enter your email below and we will be in contact with you
              shortly.
            </p>

            <div className="mt-4">
              <label className="block text-white">ENTER YOUR EMAIL</label>
              <input
                type="email"
                placeholder="jd@example.com"
                className="w-[70%] border-b p-2 bg-transparent focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div className="flex justify-between gap-2 w-full mt-5">
              <button
                type="button"
                onClick={prevStep}
                className="bg-transparent border border-amber-50 w-1/3 sm:w-1/4 md:w-[8%] text-white p-2 rounded-md hover:bg-gray-700 cursor-pointer"
              >
                <ArrowLeftIcon className="w-7 h-7 text-white" />
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-2/3 sm:w-3/4 md:w-[50%] bg-white text-black p-2 rounded-md hover:bg-[#ebbb53] cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-4 space-x-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={`h-2 w-2 rounded-full ${
                step === num ? "bg-yellow-500" : "bg-white"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Innovation;
