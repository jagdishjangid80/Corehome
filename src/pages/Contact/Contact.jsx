import React, { useState } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import back from "../../assets/images/about/contact.png";

const Contact = () => {
  const [selectedButton, setSelectedButton] = useState("Customer Service");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [verified, setVerified] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!verified) {
      alert("Please verify that you are not a robot.");
      return;
    }
    console.log("Form submitted:", { ...formData, department: selectedButton });
    setFormData({ fullName: "", email: "", message: "" });
    setVerified(false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-16 py-8">
      <div className="relative w-full lg:w-1/2 h-80 sm:h-96 md:h-screen">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <motion.div
          initial={{ scale: 1.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeIn" }}
          className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg"
        >
          Let's Connect
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center mt-8 lg:mt-0">
        <div className="bg-[#000000aa] shadow-lg shadow-black p-8 sm:p-12 md:p-16 w-full max-w-xl rounded-lg">
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
            {["Customer Service", "Sales Department"].map((dept) => (
              <button
                key={dept}
                className={`flex-1 px-4 sm:px-6 py-2 text-lg sm:text-xl border-2 rounded-md cursor-pointer transition shadow-lg ${
                  selectedButton === dept
                    ? "bg-white text-black"
                    : "bg-black text-white hover:bg-white hover:text-black"
                }`}
                onClick={() => setSelectedButton(dept)}
              >
                {dept}
              </button>
            ))}
          </div>

          <p className="text-white mb-6 text-center text-lg sm:text-xl">
            Please fill in the details below and a member from our team will get
            back to you shortly.
          </p>

          <form className="space-y-6 w-full" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-white text-lg">
                Full Name*
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. John Doe"
                className="w-full border-b p-3 sm:p-4 bg-transparent focus:outline-none focus:ring-0 text-lg text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white text-lg">
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. john@example.com"
                className="w-full border-b p-3 sm:p-4 bg-transparent focus:outline-none focus:ring-0 text-lg text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white text-lg">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                className="w-full border-b p-3 sm:p-4 bg-transparent focus:outline-none focus:ring-0 text-lg text-white"
                required
              ></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={() => setVerified(true)}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-white text-black p-3 sm:p-4 text-lg rounded-md hover:bg-[#ebbb53] cursor-pointer transition shadow-lg text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
