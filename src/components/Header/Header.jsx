import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/manu.png";
import backgroundImage from "../../assets/images/background3.png";
import "../../assets/styles/header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 1.05);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`header-bg fixed top-0 w-full z-100 bg-black transition-all duration-300 h-[100px] flex items-center justify-between px-4 sm:px-6 md:px-8`}
      >
        {isScrolled && (
          <div className="header-content w-full flex justify-between items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
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
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 md:p-8">
            <button onClick={closeMenu} className="flex items-center gap-2 mb-4 sm:mb-0">
              <XMarkIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              <span className="text-lg sm:text-xl md:text-2xl xl:text-2xl">MENU</span>
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