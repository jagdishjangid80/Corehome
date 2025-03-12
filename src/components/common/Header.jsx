import { useState, useEffect } from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TbAlignRight } from "react-icons/tb";
import logo from "../../assets/images/logo.png";
import backgroundImage from "../../assets/images/background3.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 flex justify-between items-center transition-all duration-300 
        bg-black h-[70px] md:h-[80px] px-4 md:px-8`}
      >
        <button
          className={`p-2 flex items-center gap-2 cursor-pointer transition-opacity duration-300
          ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setMenuOpen(true)}
        >
          <TbAlignRight
            className={`w-7 h-7 text-white cursor-pointer transition-transform duration-500
            ${isScrolled ? "rotate-[130deg]" : "rotate-0"}`}
          />
          <span className="text-white font-bold hidden md:inline">Menu</span>
        </button>

        <div
          className={`transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img src={logo} alt="Logo" className="w-[90px] md:w-[100px] h-auto" />
        </div>

        <button
          className={`p-2 flex items-center gap-2 cursor-pointer transition-opacity duration-300
          ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <MagnifyingGlassIcon className="w-7 h-7 text-white cursor-pointer" />
          <span className="text-white font-bold hidden md:inline">Search</span>
        </button>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col text-white"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-between items-center p-5">
            <button
              className="p-2 flex items-center gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <XMarkIcon className="w-8 h-11 text-white " />
              <span className="text-white text-2xl">MENU</span>
            </button>

            <div className="flex items-center">
              <span className="mr-3 text-2xl">Follow Core home</span>
              <div className="flex space-x-3">
                <FaFacebook className="text-white text-2xl cursor-pointer" />
                <FaTwitter className="text-white text-2xl cursor-pointer" />
                <FaInstagram className="text-white text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
          <nav className="absolute w-1/5 left-1/5 top-1/2 transform -translate-y-1/2 text-2xl gap-6 flex flex-col items-start">
            {[
              {
                label: "About Us",
                subItems: [
                  { href: "/about", label: "About Us" },
                  { href: "#leadership", label: "Leadership" },
                  {
                    href: "#sustainability",
                    label: "Supporting Sustainability",
                  },
                  { href: "#news", label: "News & Press" },
                ],
              },
              {
                label: "Our Brand",
                subItems: [
                  { href: "/brand", label: "Our Brands" },
                  { href: "#private-labeling", label: "Private Labeling" },
                  { href: "#licensing", label: "Licensing" },
                ],
              },
              {
                label: "Resources",
                subItems: [
                  { href: "#careers", label: "Careers" },
                  { href: "#pfas", label: "PFAs" },
                ],
              },
              { href: "/collaboration", label: "Collaboration" },
              { href: "/innovation", label: "Innovation" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label, subItems }) => (
              <div key={label} className="relative w-full">
                {subItems ? (
                  <button
                    className="flex items-center w-full text-white focus:outline-none cursor-pointer hover:text-[#ebbb53] transition"
                    onClick={() => toggleDropdown(label)}
                  >
                    {label}
                    <FaChevronDown
                      className={`ml-2 transition-transform ${
                        openDropdown === label ? "rotate-180" : "rotate-0"
                      } `}
                    />
                  </button>
                ) : (
                  <a
                    href={href}
                    className="text-white block w-full cursor-pointer hover:text-[#ebbb53]  transition"
                  >
                    {label}
                  </a>
                )}

                {subItems && openDropdown === label && (
                  <div className="flex flex-col bg-gray-900 text-white mt-2 py-2 px-4 rounded-lg shadow-lg ">
                    {subItems.map(({ href, label }) => (
                      <a
                        key={href}
                        href={href}
                        className="py-1 cursor-pointer text-white  transition duration-300 hover:text-[#ebbb53]"
                      >
                        {label}
                      </a>
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
