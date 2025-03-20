import React, { useState } from "react";
import back from "../../assets/images/about/innovation.png";
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
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-4 py-6 sm:px-6 md:px-12 lg:px-20 bg-black text-white">
      <div
        className="relative w-full md:w-1/2 h-72 sm:h-80 md:h-96 lg:h-[500px] bg-cover bg-center flex items-center justify-center text-white text-xl font-bold"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl">Let's Innovate</div>
      </div>
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12">
        {step === 1 && (
          <div>
            <p className="text-white mb-4 text-lg sm:text-xl">Let's start with your names.</p>
            <form className="space-y-4">
              <div>
                <label className="block text-white">FIRST NAME*</label>
                <input type="text" placeholder="e.g. John" className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0" required />
              </div>
              <div>
                <label className="block text-white">LAST NAME*</label>
                <input type="text" placeholder="e.g. Doe" className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0" required />
              </div>
              <div>
                <label className="block text-white">PRODUCT NAME*</label>
                <input type="text" placeholder="Product Name" className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0" required />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={nextStep} className="w-full bg-white text-black p-2 rounded-md hover:bg-[#ebbb53] cursor-pointer">
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
                  className={`w-full p-2 rounded-md border border-white cursor-pointer transition duration-300 ease-in-out ${
                    selectedOptions.includes(option) ? "bg-[#ebbb53] shadow-lg" : "bg-transparent text-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button onClick={prevStep} className="bg-transparent border border-white p-2 rounded-md hover:bg-gray-700 cursor-pointer">
                <ArrowLeftIcon className="w-6 h-6 text-white" />
              </button>
              <button onClick={nextStep} className="w-2/3 bg-white text-black p-2 rounded-md hover:bg-[#ebbb53] cursor-pointer">
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-white">Have you previously had this product manufactured or prototyped? If yes, explain.*</label>
                <textarea placeholder="Type Here" className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0" required />
              </div>
              <div>
                <label className="block text-white">Do you have any CAD drawings, product blueprints? Or professional renderings of your products?*</label>
                <textarea placeholder="Type Here" className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0" required />
              </div>
            </form>
            <div className="flex justify-between mt-6">
              <button onClick={prevStep} className="bg-transparent border border-white p-2 rounded-md hover:bg-gray-700 cursor-pointer">
                <ArrowLeftIcon className="w-6 h-6 text-white" />
              </button>
              <button onClick={nextStep} className="w-2/3 bg-white text-black p-2 rounded-md hover:bg-[#ebbb53] cursor-pointer">
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-white">Have you filed with the USPTO for a specific trademark?*</label>
                <textarea placeholder="Type Here" className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0" required />
              </div>
              <div>
                <label className="block text-white">Have you submitted your product idea to any other companies for consideration?*</label>
                <textarea placeholder="Type Here" className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0" required />
              </div>
            </form>
            <div className="flex justify-between mt-6">
              <button onClick={prevStep} className="bg-transparent border border-white p-2 rounded-md hover:bg-gray-700 cursor-pointer">
                <ArrowLeftIcon className="w-6 h-6 text-white" />
              </button>
              <button onClick={nextStep} className="w-2/3 bg-white text-black p-2 rounded-md hover:bg-[#ebbb53] cursor-pointer">
                Next Step
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="text-slate-50">
            <h2 className="text-xl font-bold mb-4">Complete Submission</h2>
            <p className="text-sm sm:text-base">
              Thanks for taking the time to complete this form. <br /> Please enter your email below and we will be in contact with you shortly.
            </p>
            <div className="mt-4">
              <label className="block text-white">ENTER YOUR EMAIL</label>
              <input type="email" placeholder="jd@example.com" className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0" required />
            </div>
            <div className="flex justify-between gap-2 w-full mt-5">
              <button onClick={prevStep} className="bg-transparent border border-white p-2 rounded-md hover:bg-gray-700 cursor-pointer">
                <ArrowLeftIcon className="w-6 h-6 text-white" />
              </button>
              <button onClick={() => setStep(1)} className="w-2/3 bg-white text-black p-2 rounded-md hover:bg-[#ebbb53] cursor-pointer">
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Innovation;
