import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/manu.png";
import backgroundImage1 from "../../assets/images/background1.png";
import backgroundImage2 from "../../assets/images/background2.png";
import backgroundImage3 from "../../assets/images/background3.png";
import backgroundImage4 from "../../assets/images/background4.png";
import "../../assets/styles/header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  

  const backgroundImages = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
  ];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }
  };

  // Close menu when navigating
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);  // Close menu if URL changes
    }
  }, [location]);

  return (
    <>
      <header
        className={`header-bg fixed top-0 w-full z-100 transition-all duration-300 h-[100px] flex items-center justify-between px-4 sm:px-6 md:px-8 ${
          isScrolled
            ? "bg-transparent"
            : "bg-gradient-to-b from-black via-black to-transparent"
        }`}
      >
        {isScrolled && (
          <div className="header-content w-full flex justify-between items-center">
            <button
              onClick={toggleMenu}
              className="flex items-center gap-3 text-white cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center w-5 h-5 cursor-pointer space-y-1 rotate-[120deg] transition-transform duration-300 hover:rotate-0">
                <div className="w-4 h-1 bg-white rounded-full"></div>
                <div className="w-6 h-1 bg-white rounded-full"></div>
                <div className="w-4 h-1 bg-white rounded-full"></div>
              </div>
              <span className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold">
                MENU
              </span>
            </button>

            <img
              src={logo}
              alt="Logo"
              className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 h-auto"
            />

            <button className="flex items-center gap-2 text-white cursor-pointer p-2">
              <span className="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold">
                SEARCH
              </span>
              <MagnifyingGlassIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>
          </div>
        )}
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col text-white transition-opacity"
          style={{
            backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 md:p-8">
            <button
              onClick={closeMenu}
              className="flex items-center gap-2 mb-4 sm:mb-0"
            >
              <XMarkIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              <span className="text-lg sm:text-xl md:text-2xl xl:text-2xl">
                MENU
              </span>
            </button>
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
              <span className="uppercase tracking-widest text-xs sm:text-sm md:text-lg">
                Follow
              </span>
              <div className="w-8 h-[2px] bg-white sm:w-10 md:w-12"></div>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {[FaTwitter, FaFacebook, FaInstagram].map((Icon, idx) => (
                  <Icon
                    key={idx}
                    className="w-5 h-5 sm:w-5 sm:h-4 md:w-6 lg:h-6 text-white cursor-pointer hover:opacity-70"
                  />
                ))}
              </div>
            </div>
          </div>
          <Navbar closeMenu={closeMenu} />
          <div className="absolute bottom-4 right-4 p-4">
            <img
              src={menu}
              alt="Menu Icon"
              className="w-20 sm:w-30 md:w-30 lg:w-30 h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-expanded={isOpen}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className={`${
//             isOpen ? "block" : "hidden"
//           } md:flex md:items-center md:w-auto md:order-1 w-full`}
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/about"
//                 className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="/contact"
//                 className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
