import React, { useState } from "react";
import PopUpCard1 from "../../../components/PopsCard/Cardpops";
import popupData1 from "../../../Js/Dataextra";
import { extraCards, collaborate, careerInnovationCards } from "../../../assets/images/brandImages";

const ExtraCardpops = () => {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (index) => {
    if (popupData1[index]) {
      setActivePopup(index);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full mb-5">
        {extraCards.map((card, index) => (
          <div
            key={index}
            onClick={() => openPopup(index)}
            className="relative group flex flex-col items-center justify-center w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="absolute inset-0">
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center px-4">
                {card.title}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  openPopup(index);
                }}
                className="absolute bottom-3 sm:bottom-4 md:bottom-5 bg-white text-black px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-[#ebbb53] text-xs sm:text-sm md:text-base lg:text-lg"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Collaborate Section */}
      <div className="w-full space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
        {collaborate.map((card, index) => (
          <div
            key={index}
            onClick={() => openPopup(extraCards.length + index)}
            className="relative group flex flex-col items-center justify-center w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white text-center">
                {card.title}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openPopup(extraCards.length + index);
                }}
                className="absolute bottom-3 sm:bottom-4 md:bottom-5 bg-white text-black px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-[#ebbb53] text-xs sm:text-sm md:text-base lg:text-lg"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Career & Innovation Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full mt-5">
        {careerInnovationCards.map((card, index) => (
          <div
            key={index}
            onClick={() => openPopup(index + extraCards.length + collaborate.length)}
            className="relative group flex flex-col items-center justify-center w-full h-[200px] sm:h-[250px] md:h-[300px] bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">
                {card.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {activePopup !== null && popupData1[activePopup] && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <PopUpCard1 data={popupData1[activePopup]} onClose={() => setActivePopup(null)} />
        </div>
      )}
    </>
  );
};

export default ExtraCardpops;