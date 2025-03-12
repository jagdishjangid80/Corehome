import React, { useState } from "react";
import back from "../../assets/images/about/contact.png";

const Contact = () => {
  const [selectedButton, setSelectedButton] = useState("Customer Service");

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-6 bg-black text-white">
      <div
        className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 bg-cover bg-center flex items-center justify-center text-white text-lg sm:text-xl font-semibold"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="bg-opacity-50 p-4 sm:p-6 rounded-lg">Let's Connect</div>
      </div>
      <div className="w-full lg:w-1/2 p-6 sm:p-8 mt-6 lg:mt-0">
        <div className="mb-6 flex gap-3 sm:gap-4">
          <button
            className={`px-3 sm:px-4 py-2 rounded-md border-2 cursor-pointer transition ${
              selectedButton === "Customer Service"
                ? "bg-white text-black"
                : "bg-black text-white hover:bg-white hover:text-black"
            }`}
            onClick={() => setSelectedButton("Customer Service")}
          >
            Customer Service
          </button>
          <button
            className={`px-3 sm:px-4 py-2 rounded-md border-2 cursor-pointer transition ${
              selectedButton === "Sales Department"
                ? "bg-white text-black"
                : "bg-black text-white hover:bg-white hover:text-black"
            }`}
            onClick={() => setSelectedButton("Sales Department")}
          >
            Sales Department
          </button>
        </div>

        <p className="text-white mb-4 text-sm sm:text-base">
          Please fill in the details below and a member from our team will get back to you shortly.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-white text-sm sm:text-base">Full Name*</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0 text-sm sm:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm sm:text-base">Email*</label>
            <input
              type="email"
              placeholder="e.g. john@example.com"
              className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0 text-sm sm:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm sm:text-base">Message*</label>
            <textarea
              placeholder="Your message..."
              className="w-full border-b p-2 bg-transparent focus:outline-none focus:ring-0 text-sm sm:text-base"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black p-2 rounded-md hover:bg-[#ebbb53] cursor-pointer transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
