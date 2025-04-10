import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import PopUpCard from "../../pages/Resources/leadership";
import PopsPage from "../../pages/Support/Supportpops";
import CollaborationPopup from "../../pages/collaboration/CollaboratePopUp";
import { useNavigate } from "react-router-dom";

const Navbar = ({ closeMenu }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [popup, setPopup] = useState(null); // 'leadership', 'sustainability', 'collaboration'
  const navbarRef = useRef(null); // To detect clicks outside the navbar
  const navigate = useNavigate();

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const handlePopupAction = (type) => {
    setPopup(type);
    setOpenDropdown(null);
    closeMenu();
  };

  const handleRoute = (href) => {
    closeMenu();
    navigate(href);
  };

  const closePopup = () => setPopup(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null); // Close the dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className="w-full max-w-full text-white px-4 py-6 sm:absolute sm:left-60 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:w-auto md:px-6 lg:px-8 xl:px-10"
      >
        <div className="flex flex-col space-y-4 sm:space-y-2 md:space-y-3 lg:space-y-4">
          {[
            { href: "/", label: "Home" },
            {
              label: "About Us",
              subItems: [
                { href: "/about", label: "About Us" },
                { label: "Leadership", popup: "leadership" },
                { label: "Sustainability", popup: "sustainability" },
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
                { href: "/pfaspage", label: "PFAs" },
              ],
            },
            { label: "Collaboration", popup: "collaboration" },
            { href: "/innovation", label: "Innovation" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label, subItems, popup }) => (
            <div key={label} className="relative hover:text-amber-300">
              {subItems ? (
                <button
                  onClick={() => toggleDropdown(label)}
                  className="flex items-center justify-between w-full sm:w-48 text-white font-semibold py-2 px-3 rounded-md transition-all text-base sm:text-lg md:text-xl lg:text-2xl"
                  aria-label={`Toggle ${label} dropdown`}
                >
                  <span>{label}</span>
                  {openDropdown === label ? (
                    <FaChevronDown className="ml-2" />
                  ) : (
                    <FaChevronRight className="ml-2" />
                  )}
                </button>
              ) : popup ? (
                <button
                  onClick={() => handlePopupAction(popup)}
                  className="block w-full text-left text-white font-semibold py-2 px-3 rounded-md transition-colors text-base sm:text-lg md:text-xl lg:text-2xl hover:text-amber-300"
                  aria-label={`Open ${label} popup`}
                >
                  {label}
                </button>
              ) : (
                <button
                  onClick={() => handleRoute(href)}
                  className="block w-full text-left text-white font-semibold py-2 px-3 rounded-md transition-colors text-base sm:text-lg md:text-xl lg:text-2xl hover:text-amber-300"
                >
                  {label}
                </button>
              )}

              {subItems && openDropdown === label && (
                <div className="w-full sm:absolute sm:left-full sm:top-0 sm:w-48 py-2 bg-gray-900 rounded-lg shadow-lg border border-gray-700 mt-1 sm:mt-0 z-40">
                  {subItems.map(({ href, label, popup }) => (
                    <button
                      key={label}
                      onClick={() =>
                        popup ? handlePopupAction(popup) : handleRoute(href)
                      }
                      className="block w-full text-white py-1 font-semibold transition-colors text-left px-3 text-sm sm:text-base md:text-lg lg:text-xl hover:text-amber-300"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Popups */}
      {popup === "leadership" && (
        <Modal>
          <PopUpCard onClose={closePopup} />
        </Modal>
      )}
      {popup === "sustainability" && (
        <Modal>
          <PopsPage onClose={closePopup} />
        </Modal>
      )}
      {popup === "collaboration" && (
        <Modal>
          <CollaborationPopup onClose={closePopup} />
        </Modal>
      )}
    </>
  );
};

const Modal = ({ children }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
    <div className="relative w-full max-w-3xl bg-gray-800 rounded-lg shadow-lg">
      {children}
    </div>
  </div>
);

export default Navbar;