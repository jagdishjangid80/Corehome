import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Navbar = ({ closeMenu }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="absolute w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl flex flex-col gap-3">
      {[
        { to: "/", label: "Home" },
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
      ].map(({ to, label, subItems }) => (
        <div key={label} className="relative w-full">
          {subItems ? (
            <button
              className="flex items-center w-full font-semibold transition-all"
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
            <Link to={to} onClick={closeMenu} className="block w-full font-semibold hover:text-yellow-500">
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
                  className="py-1 font-semibold transition hover:text-yellow-500"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
    
  );
};

export default Navbar;
