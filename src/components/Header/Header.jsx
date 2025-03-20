import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import backgroundImage from "../../assets/images/background3.png";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 bg-black transition-all duration-300 ${
          isScrolled ? "h-16 sm:h-20 md:h-24" : "h-20 sm:h-24 md:h-28"
        } flex items-center justify-between px-4 sm:px-6 md:px-8`}
      >
        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 text-white cursor-pointer p-2 transition-opacity duration-300"
        >
          <FontAwesomeIcon
            icon={faBarsStaggered}
            size="lg"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform duration-300 rotate-[120deg] hover:rotate-0"
          />
          <span className="hidden md:inline text-lg md:text-xl font-bold">
            MENU
          </span>
        </button>

        
        <img
          src={logo}
          alt="Logo"
          className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 h-auto"
        />

       
        <button className="flex items-center gap-2 text-white cursor-pointer p-2 transition-opacity duration-300">
          <span className="hidden md:inline text-lg md:text-xl font-bold">
            SEARCH
          </span>
          <MagnifyingGlassIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </button>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col text-white transition-opacity"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
        >
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 md:p-8">
            <button
              onClick={closeMenu}
              className="flex items-center gap-2 mb-4 sm:mb-0"
            >
              <XMarkIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              <span className="text-lg sm:text-xl md:text-2xl xl:text-3xl">
                MENU
              </span>
            </button>
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
              <span className="uppercase tracking-widest text-xs sm:text-sm md:text-lg">
                Follow
              </span>
              <div className="w-8 h-[2px] bg-white sm:w-10 md:w-12"></div>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {[
                  { icon: <FaTwitter />, hoverColor: "hover:bg-gray-900" },
                  { icon: <FaFacebook />, hoverColor: "hover:bg-blue-600" },
                  { icon: <FaInstagram />, hoverColor: "hover:bg-pink-500" },
                ].map(({ icon, hoverColor }, idx) => (
                  <div
                    key={idx}
                    className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 ${hoverColor} transition-all cursor-pointer`}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <nav className="absolute w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl flex flex-col gap-3 sm:gap-4 md:gap-5">
            {[
              { to: "/", label: "Home", section: "home" },
              {
                label: "About Us",
                subItems: [
                  { to: "/about", label: "About Us" },
                  { to: "/leadership", label: "Leadership" },
                  { to: "/sustainability", label: "Sustainability" },
                  { to: "/news", label: "News & Press" },
                ],
              },
              {
                label: "Our Brand",
                subItems: [
                  { to: "/brand", label: "Our Brands" },
                  { to: "/private-labeling", label: "Private Labeling" },
                  { to: "/licensing", label: "Licensing" },
                ],
              },
              {
                label: "Resources",
                subItems: [
                  { to: "/careers", label: "Careers" },
                  { to: "/pfas", label: "PFAs" },
                ],
              },
              { to: "/collaboration", label: "Collaboration" },
              { to: "/innovation", label: "Innovation" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label, subItems, section }) => (
              <div key={label} className="relative w-full">
                {subItems ? (
                  <button
                    className="flex items-center w-full font-bold transition-all"
                    onClick={() => toggleDropdown(label)}
                  >
                    {label}
                    <FaChevronDown
                      className={`ml-2 transition-transform ${
                        openDropdown === label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={to}
                    onClick={() =>
                      section ? handleNavClick(section) : closeMenu()
                    }
                    className="block w-full font-bold hover:text-yellow-500"
                  >
                    {label}
                  </Link>
                )}
                {subItems && openDropdown === label && (
                  <div className="flex flex-col bg-gray-900 mt-2 py-2 px-4 rounded-lg shadow-lg">
                    {subItems.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        onClick={closeMenu}
                        className="py-1 font-bold transition hover:text-yellow-500"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;