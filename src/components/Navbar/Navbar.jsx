import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import PopUpCard from "../../pages/Resources/leadership";
import PopsPage from "../../pages/Support/Supportpops";

const Navbar = ({ closeMenu }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showLeadershipPopup, setShowLeadershipPopup] = useState(false);
  const [showPopsPopup, setShowPopsPopup] = useState(false);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const handlePopupAction = (action) => {
    action();
    setOpenDropdown(null);
    closeMenu();
  };

  return (
    <>
      <nav className="w-full max-w-full text-white px-4 py-6 sm:absolute sm:left-60 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:w-auto md:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col space-y-4 sm:space-y-2 md:space-y-3 lg:space-y-4">
          {[
            { href: "/", label: "Home" },
            {
              label: "About Us",
              subItems: [
                { href: "/about", label: "About Us" },
                {
                  label: "Leadership",
                  action: () => setShowLeadershipPopup(true),
                },
                {
                  label: "Sustainability",
                  action: () => setShowPopsPopup(true),
                },
                { href: "/news_press", label: "News & Press" },
              ],
            },
            {
              label: "Our Brand",
              subItems: [
                { href: "/brand", label: "Our Brands" },
                { href: "/private-labeling", label: "Private Labeling" },
                { href: "/licensing", label: "Licensing" },
              ],
            },
            {
              label: "Resources",
              subItems: [
                { href: "/careers", label: "Careers" },
                { href: "/pfas", label: "PFAs" },
              ],
            },
            { href: "/collaboration", label: "Collaboration" },
            { href: "/innovation", label: "Innovation" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label, subItems }) => (
            <div key={label} className="relative hover:text-amber-300">
              {subItems ? (
                <button
                  className="flex items-center justify-between w-full sm:w-48 text-white font-semibold py-2 px-3 rounded-md transition-all focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl"
                  onClick={() => toggleDropdown(label)}
                >
                  <span>{label}</span>
                  {openDropdown === label ? (
                    <FaChevronDown className="ml-2 transition-transform" />
                  ) : (
                    <FaChevronRight className="ml-2 transition-transform" />
                  )}
                </button>
              ) : (
                <a
                  href={href}
                  className="block text-white font-semibold py-2 px-3 transition-colors rounded-md text-base sm:text-lg md:text-xl lg:text-2xl hover:text-amber-300"
                >
                  {label}
                </a>
              )}
              {subItems && openDropdown === label && (
                <div className="w-full sm:absolute sm:left-full sm:top-0 sm:w-48 py-2 bg-gray-900 rounded-lg shadow-lg border border-gray-700 mt-1 sm:mt-0">
                  {subItems.map(({ href, label, action }) =>
                    action ? (
                      <button
                        key={label}
                        onClick={() => handlePopupAction(action)}
                        className="block w-full text-white py-1 font-semibold transition-colors text-left px-3 text-sm sm:text-base md:text-lg lg:text-xl hover:text-amber-300"
                      >
                        {label}
                      </button>
                    ) : (
                      <a
                        key={href}
                        href={href}
                        className="block w-full text-white py-1 font-semibold transition-colors text-left px-3 text-sm sm:text-base md:text-lg lg:text-xl hover:text-amber-300"
                      >
                        {label}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {showLeadershipPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="w-full max-w-3xl">
            <PopUpCard onClose={() => setShowLeadershipPopup(false)} />
          </div>
        </div>
      )}

      {showPopsPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="w-full max-w-3xl">
            <PopsPage onClose={() => setShowPopsPopup(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
