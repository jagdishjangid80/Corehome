import React from "react";
import Newsmain from "../../assets/images/about/News_press.png";
import Woman from "../../assets/images/about/woman.png";
import { ClockIcon } from "@heroicons/react/24/outline";
import Insta1 from "../../assets/images/istaimg1.png";
import Insta2 from "../../assets/images/istaimg2.png";
import Insta3 from "../../assets/images/istaimg3.png";
import Insta4 from "../../assets/images/istaimg4.png";
import Insta5 from "../../assets/images/istaimg5.png";
import Insta6 from "../../assets/images/istaimg6.png";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaEnvelope,
} from "react-icons/fa";

const NewsPress = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Header Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl font-bold"
        style={{ backgroundImage: `url(${Newsmain})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center">
          <p>CORE HOME</p>
          <p>NEWS & PRESS</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6">
        {/* News Card */}
        <div className="relative w-full md:w-[700px] h-[400px] rounded-lg overflow-hidden">
          <img src={Woman} alt="News" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-black/40">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              CLEAN MAMA PARTNERS WITH POPSHELF AND CORE HOME FOR AN EXCLUSIVE
              PRODUCT LINE
            </h2>
            <div className="flex justify-between items-center mt-4">
              <a href="#" className="text-sm underline hover:text-gray-300">
                Read More
              </a>
              <div className="text-gray-400 text-sm flex items-center gap-2">
                <p>January 13, 2025</p>
                <ClockIcon className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="w-full md:w-[500px] flex flex-col items-center">
          <div className="w-full p-6 grid grid-cols-2 sm:grid-cols-3 gap-4 rounded-lg shadow-lg text-center">
            {[
              { label: "All", bg: "bg-all.jpg" },
              { label: "Gadgets", bg: "bg-gadgets.jpg" },
              { label: "Health & Beauty", bg: "bg-health.jpg" },
              { label: "Pets", bg: "bg-pets.jpg" },
              { label: "Hydration", bg: "bg-hydration.jpg" },
              { label: "Cookware", bg: "bg-cookware.jpg" },
              { label: "Travel", bg: "bg-travel.jpg" },
            ].map((item, index) => (
              <button
                key={index}
                className="relative p-4 border border-white text-white rounded overflow-hidden group w-full h-20 flex items-center justify-center"
              >
                <span className="relative z-10 font-semibold">
                  {item.label}
                </span>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundImage: `url('/images/${item.bg}')` }}
                />
              </button>
            ))}
          </div>

          {/* Featured News Section */}
          <div className="w-full mt-4 flex flex-col sm:flex-row justify-start items-start border-t border-gray-500 pt-4">
            <div className="flex items-center gap-4">
              <img
                src={Woman}
                alt="Featured"
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="text-lg font-bold text-center">
                  <span className="inline-block w-16 border-t border-gray-400"></span>
                  <span className="mx-4">Featured</span>
                  <span className="inline-block w-16 border-t border-gray-400"></span>
                </p>
                <p className="text-lg font-bold">
                  CLEAN MAMA PARTNERS WITH POPSHELF AND CORE HOME FOR AN
                  EXCLUSIVE PRODUCT LINE
                </p>
                <p className="text-sm text-gray-400">Jan 13, 2025 in Gadgets</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="w-full mt-6 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 bg-black h-24"></div>
        <div className="w-full sm:w-1/2 flex flex-col items-center">
          <p className="text-lg font-bold text-center">
            <span className="inline-block w-16 border-t border-gray-400"></span>
            <span className="mx-4 text-white">Tags</span>
            <span className="inline-block w-16 border-t border-gray-400"></span>
          </p>
          <div className="grid grid-cols-3 gap-2 mt-4 sm:mt-0 p-4">
            {[
              "#Debut",
              "#Exclusive",
              "#POPSHELF",
              "#Clean Mama",
              "#Travel",
              "#Outdoors",
              "#Gadgets",
              "#Cosmetics",
              "#Health & Beauty",
              "#Pets",
              "#Games",
              "#Hydration",
              "#Kitchen",
              "#Cookware",
              "#Workspace",
              "#Video",
              "#Architecture",
              "#Nature",
              "#Aerial",
              "#Motivation",
              "#Photography",
              "#Adventure",
            ].map((tag, index) => (
              <span
                key={index}
                className="text-sm text-gray-500 text-center px-3 py-1 rounded cursor-pointer transition-colors duration-300 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full mt-12 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 bg-black h-32"></div>
        <div className="w-full sm:w-1/2 flex flex-col items-center text-center p-6">
          <p className="text-lg font-bold">
            <span className="inline-block w-24 border-t border-gray-400"></span>
            <span className="mx-4 text-white">Newsletter</span>
            <span className="inline-block w-24 border-t border-gray-400"></span>
          </p>
          <form className="mt-6 w-full max-w-md">
            <div className="mb-4 w-full text-left">
              <label className="block text-white text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-transparent border border-white text-white rounded-md focus:outline-none focus:ring-2"
              />
            </div>
            <div className="mb-4 w-full text-left">
              <label className="block text-white text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent border border-white text-white rounded-md focus:outline-none focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 text-black bg-white rounded-md hover:bg-yellow-800 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Stay in Touch Section */}
      <div className="w-full mt-12 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 bg-black h-32"></div>
        <div className="w-full sm:w-1/2 flex flex-col items-center text-center p-6">
          <p className="text-lg font-bold">
            <span className="inline-block w-24 border-t border-white"></span>
            <span className="mx-4">Stay in Touch</span>
            <span className="inline-block w-24 border-t border-white"></span>
          </p>
          <div className="flex gap-4 mt-4">
            {[
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaFacebook />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaPinterest />, link: "#" },
              { icon: <FaEnvelope />, link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="w-full mt-12 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 bg-black h-32"></div>
        <div className="w-full sm:w-1/2 flex flex-col items-center text-center p-6">
          <p className="text-lg font-bold">
            <span className="inline-block w-24 border-t border-white"></span>
            <span className="mx-4">Instagram</span>
            <span className="inline-block w-24 border-t border-white"></span>
          </p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[Insta1, Insta2, Insta3, Insta4, Insta5, Insta6].map(
              (image, index) => (
                <div
                  key={index}
                  className="relative w-[150px] h-[150px] group overflow-hidden mx-auto" // Use mx-auto for centering
                >
                  <img
                    src={image}
                    alt={`Instagram ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaInstagram className="text-black text-4xl" />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {/* Three-Part Footer Section */}
      <div className="w-full bg-gray-700 text-white p-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* About Section */}
          <div className="p-6 border border-gray-500 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-gray-300 text-sm">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
            </p>
            <button className="mt-4 px-4 py-2 text-white rounded-md hover:text-yellow-600 transition duration-300">
              Read Full Story
            </button>
          </div>

          {/* Newsletter Section */}
          <div className="p-6 border border-gray-500 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Newsletter</h2>
            <form>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-transparent border border-white text-white rounded-md focus:outline-none focus:ring-2 mb-2"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent border border-white text-white rounded-md focus:outline-none focus:ring-2 mb-2"
              />
              <button
                type="submit"
                className="w-full p-3 text-black bg-white rounded-md hover:bg-yellow-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>

            {/* Social Icons Row */}
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="#"
                className="text-white text-2xl hover:text-yellow-500 transition duration-300"
              >
                <FaInstagram className="text-white text-4xl" />
              </a>
              <a
                href="#"
                className="text-white text-2xl hover:text-yellow-500 transition duration-300"
              >
                <FaFacebook className="text-white text-4xl" />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="p-6 border border-gray-500 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-4">Navigation</h2>
            <ul className="text-gray-300 space-y-2">
              {[
                "All",
                "Cookware",
                "Gadgets",
                "Health & Beauty",
                "Hydration",
                "Pets",
                "Travel",
                "Contact",
                "Licensing",
                "Style Guide",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-yellow-500 cursor-pointer transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPress;
