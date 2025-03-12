import React, { useState } from "react";
import PopUpCard1 from "../ExtraCard/Cardpops";
import popupData1 from "../../Js/Dataextra";
import { extraCards, collaborate, careerInnovationCards } from "../../../assets/images/brandImages";
const ExtraCardpops = () => {
  const [activePopup, setActivePopup] = useState(null);
  console.log("Active Popup Index:", activePopup);
  console.log("Popup Data:", activePopup !== null ? popupData1[activePopup] : "No Data");
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mx-auto mt-10 px-4">
        {extraCards.map((card, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center justify-center w-full h-95 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 w-full h-full">
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <span className="text-xl  text-white text-center">{card.title}</span>
            </div>
            <button
              onClick={() => setActivePopup(index)}
              className="absolute bottom-4 bg-white cursor-pointer text-black px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-[#ebbb53]"
            >
              LEARN MORE
            </button>
          </div>
        ))}
      </div>
      <div className="w-full mx-auto mt-10 px-4 justify-center text-center">
        {collaborate.map((card, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center justify-center w-full h-50 bg-white hover:bg-[#ebbb53] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl  text-white">{card.title}</span>
            </div>
            <button
              onClick={() => setActivePopup(extraCards.length + index)}
              className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition duration-300 bg-white text-black px-4 py-2 rounded-sm hover:bg-[#ebbb53]"
            >
              <p className="text-black text-lg text-center cursor-pointer">LEARN MORE</p>
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 max-w-full h-full mx-auto mt-10">
        {careerInnovationCards.map((card, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center justify-center w-full h-40 bg-white hover:bg-[#ebbb53] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center ">
              <span className="text-xl text-white">{card.title}</span>
            </div>
            <button
              onClick={() => setActivePopup(index + extraCards.length + collaborate.length)}
              className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition duration-300 bg-white text-black px-4 py-2 rounded-sm hover:bg-[#ebbb53]"
            >
              <p className="text-black text-lg text-center ">{card.button}</p>
            </button>
          </div>
        ))}
      </div>
      {activePopup !== null && popupData1[activePopup] && (
        <PopUpCard1 data={popupData1[activePopup]} onClose={() => setActivePopup(null)} />
      )}
    </>
  );
};

export default ExtraCardpops;
