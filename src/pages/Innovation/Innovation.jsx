import React, { useState } from "react";
import back from "../../assets/images/about/innovation.png"; 
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Header from "../../components/Header/Header";
import StepIndicator from "../../components/StepIndicator"; 

const Innovation = () => {
  const [step, setStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    productName: "",
    email: "",
  });

  const options = ["Web Search", "Core Home Website", "Inventor Community", "Other"];

  const handleOptionClick = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.firstName || !formData.lastName || !formData.productName)) {
      alert("Please fill in all required fields.");
      return;
    }
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    if (!formData.email) {
      alert("Please enter your email.");
      return;
    }
    console.log("Form submitted:", { ...formData, selectedOptions });
    setFormData({ firstName: "", lastName: "", productName: "", email: "" });
    setSelectedOptions([]);
    setStep(1);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-stretch min-h-screen w-full bg-black text-white mt-24 md:mt-[0px]">
        {/* Left Image Section */}
        <div className="hidden md:block md:w-1/2 h-auto relative">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${back})`, backgroundSize: "cover" }}
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-md" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
              Let's Innovate
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center">
          <div className="w-full max-w-xl">
            {step === 1 && (
              <div>
                <p className="text-white mb-4 text-xl sm:text-2xl drop-shadow-md">
                  Let's start with your names.
                </p>
                <p className="text-white mb-4 text-xl sm:text-2xl drop-shadow-md">
                  Please fill in the details below so that we can get in contact with you about our product.
                </p>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white text-lg drop-shadow-md">
                      FIRST NAME*
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="e.g. John"
                      className="w-full border-b p-2 bg-transparent focus:outline-none text-white text-lg"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white text-lg drop-shadow-md">
                      LAST NAME*
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="e.g. Doe"
                      className="w-full border-b p-2 bg-transparent focus:outline-none text-white text-lg"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="productName" className="block text-white text-lg drop-shadow-md">
                      PRODUCT NAME*
                    </label>
                    <input
                      id="productName"
                      name="productName"
                      type="text"
                      value={formData.productName}
                      onChange={handleInputChange}
                      placeholder="Product Name"
                      className="w-full border-b p-2 bg-transparent focus:outline-none text-white text-lg"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-white text-black p-3 rounded-md hover:bg-[#ebbb53] text-lg font-semibold"
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
                      className={`w-full p-3 rounded-md border border-white text-lg ${
                        selectedOptions.includes(option) ? "bg-[#ebbb53]" : "bg-transparent text-white"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    onClick={prevStep}
                    className="bg-transparent border border-white p-2 rounded-md hover:bg-gray-700"
                  >
                    <ArrowLeftIcon className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextStep}
                    className="w-2/3 bg-white text-black p-3 rounded-md hover:bg-[#ebbb53] text-lg font-semibold"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white text-lg">
                      Have you previously had this product manufactured or prototyped?*
                    </label>
                    <textarea placeholder="Type Here" className="w-full border-b p-2 bg-transparent text-white text-lg" required />
                  </div>
                  <div>
                    <label className="block text-white text-lg">
                      Do you have any CAD drawings or blueprints?*
                    </label>
                    <textarea placeholder="Type Here" className="w-full border-b p-2 bg-transparent text-white text-lg" required />
                  </div>
                </form>
                <div className="flex justify-between mt-6">
                  <button onClick={prevStep} className="bg-transparent border border-white p-2 rounded-md hover:bg-gray-700">
                    <ArrowLeftIcon className="w-6 h-6 text-white" />
                  </button>
                  <button onClick={nextStep} className="w-2/3 bg-white text-black p-3 rounded-md hover:bg-[#ebbb53] text-lg font-semibold">
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white text-lg">
                      Have you filed with the USPTO for a trademark?*
                    </label>
                    <textarea placeholder="Type Here" className="w-full border-b p-2 bg-transparent text-white text-lg" required />
                  </div>
                  <div>
                    <label className="block text-white text-lg">
                      Have you submitted your idea to other companies?*
                    </label>
                    <textarea placeholder="Type Here" className="w-full border-b p-2 bg-transparent text-white text-lg" required />
                  </div>
                </form>
                <div className="flex justify-between mt-6">
                  <button onClick={prevStep} className="bg-transparent border border-white p-2 rounded-md hover:bg-gray-700">
                    <ArrowLeftIcon className="w-6 h-6 text-white" />
                  </button>
                  <button onClick={nextStep} className="w-2/3 bg-white text-black p-3 rounded-md hover:bg-[#ebbb53] text-lg font-semibold">
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Complete Submission</h2>
                <p className="text-lg">
                  Thanks for completing the form. <br />
                  Enter your email and we’ll contact you shortly.
                </p>
                <div className="mt-4">
                  <label htmlFor="email" className="block text-white text-lg">
                    ENTER YOUR EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jd@example.com"
                    className="w-full border-b p-2 bg-transparent text-white text-lg"
                    required
                  />
                </div>
                <div className="flex justify-between gap-2 w-full mt-6">
                  <button onClick={prevStep} className="bg-transparent border border-white p-2 rounded-md hover:bg-gray-700">
                    <ArrowLeftIcon className="w-6 h-6 text-white" />
                  </button>
                  <button onClick={handleSubmit} className="w-2/3 bg-white text-black p-3 rounded-md hover:bg-[#ebbb53] text-lg font-semibold">
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>

          
          <StepIndicator className="mt-4" currentStep={step - 1} totalSteps={5} />
        </div>
      </div>
    </>
  );
};

export default Innovation;
