import React, { useState, useEffect } from "react";
import { collaborate } from "../../assets/images/brandImages"; 
import ExtraData from "../../Js/Dataextra"; 
import CollaboratePopUp from "./CollaboratePopUp";

const CollaborateSection = () => {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (id) => {
    const popupCard = ExtraData.find((item) => item.id === id);
    if (popupCard) {
      setActivePopup(popupCard);
      console.log("Popup opened: ", popupCard);
    } else {
      console.log("Popup not found for ID:", id);
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActivePopup(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="w-full space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
      {collaborate.map((card, index) => (
        <div
          key={index}
          onClick={() => openPopup(card.id)}
          className="relative group flex flex-col items-center justify-center w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center">
              {card.title}
            </span>
            <button
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-3 sm:bottom-4 md:bottom-5 bg-white text-black px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-[#ebbb53] text-xs sm:text-sm md:text-base lg:text-lg"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      ))}

      {activePopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm sm:backdrop-blur-md flex items-center justify-center z-50 p-2">
          <CollaboratePopUp data={activePopup} onClose={() => setActivePopup(null)} />
        </div>
      )}
    </div>
  );
};

export default CollaborateSection;