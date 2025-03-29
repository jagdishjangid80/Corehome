import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Add NavLink for active state
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import PopUpCard from "../../pages/Resources/leadership";

const Navbar = ({ closeMenu }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showLeadershipPopup, setShowLeadershipPopup] = useState(false);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      <nav className="absolute left-60 top-1/2 text-2xl transform -translate-y-1/2 w-auto text-white">
        {[
          { to: "/", label: "Home" },
          {
            label: "About Us",
            subItems: [
              { to: "/about", label: "About Us" },
              { label: "Leadership", action: () => setShowLeadershipPopup(true) },
              { to: "/support", label: "Sustainability" },
              { to: "/news_press", label: "News & Press" },
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
        ].map(({ to, label, subItems }) => (
          <div key={label} className="relative hover:text-amber-300">
            {subItems ? (
              <button
                className="flex items-center justify-between w-48 text-white font-semibold py-2 px-3 rounded-md transition-all focus:outline-none"
                onClick={() => toggleDropdown(label)}
              >
                <span>{label}</span>
                {openDropdown === label ? (
                  <FaChevronDown className="ml-1 transition-transform" />
                ) : (
                  <FaChevronRight className="ml-1 transition-transform" />
                )}
              </button>
            ) : (
              <NavLink
                to={to}
                onClick={() => closeMenu()}
                className="block text-white font-semibold py-2 px-3 transition-colors rounded-md"
                activeClassName="text-amber-300" 
              >
                {label}
              </NavLink>
            )}
            {subItems && openDropdown === label && (
              <div className="absolute left-full top-0 w-48 py-2 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
                {subItems.map(({ to, label, action }) =>
                  action ? (
                    <button
                      key={label}
                      onClick={() => {
                        action();
                        setOpenDropdown(null);
                      }}
                      className="block w-full text-white py-1 font-semibold transition-colors text-left px-3"
                    >
                      {label}
                    </button>
                  ) : (
                    <Link
                      key={to}
                      to={to}
                      onClick={() => {
                        closeMenu();
                        setOpenDropdown(null);
                      }}
                      className="block w-full text-white py-1 font-semibold transition-colors text-left px-3"
                    >
                      {label}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Leadership Popup */}
      {showLeadershipPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <PopUpCard onClose={() => setShowLeadershipPopup(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
