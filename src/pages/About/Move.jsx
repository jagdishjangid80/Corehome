import React from "react";
import { motion } from "framer-motion";
import move1 from "../../assets/images/about/move1.png";
import move2 from "../../assets/images/about/move2.png";
import move3 from "../../assets/images/about/move3.png";
import move4 from "../../assets/images/about/move4.png";
import move5 from "../../assets/images/about/move5.png";
import move6 from "../../assets/images/about/move6.png";
import move7 from "../../assets/images/about/move7.png";
import move8 from "../../assets/images/about/move8.png";
import move9 from "../../assets/images/about/move9.png";
import move10 from "../../assets/images/about/move10.png";
import move11 from "../../assets/images/about/move11.png";
import move12 from "../../assets/images/about/move12.png";
import move13 from "../../assets/images/about/move13.png";
import move14 from "../../assets/images/about/move14.png";
import move15 from "../../assets/images/about/move15.png";
import move16 from "../../assets/images/about/move16.png";
import move17 from "../../assets/images/about/move17.png";
import move18 from "../../assets/images/about/move18.png";
import move19 from "../../assets/images/about/move19.png";
import move20 from "../../assets/images/about/move20.png";
import move21 from "../../assets/images/about/move21.png";

const images = [
  move1, move2, move3, move4, move5, move6, move7, move8, move9, move10,
  move11, move12, move13, move14, move15, move16, move17, move18, move19,
  move20, move21,
];

const Move = () => {
  const scrollVariants = {
    up: {
      y: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      },
    },
    down: {
      y: ["-50%", "0%"],
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center px-4 sm:px-6 lg:px-8 bg-black">
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Image Columns */}
      <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-[100vw] h-full">
        {/* Upward Scrolling Column */}
        <motion.div
          className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16"
          variants={scrollVariants}
          animate="up"
          style={{ minHeight: "200%" }}
          initial={{ y: "0%" }}
        >
          {images.map((img, index) => (
            <img
              key={`up-${index}`}
              src={img}
              alt={`move${index + 1}`}
              className="w-30 h-30
                sm:w-20 sm:h-20 
                md:w-24 md:h-24 
                lg:w-28 lg:h-28 
                xl:w-38 xl:h-38 
                object-contain flex-shrink-0"
              loading="lazy"
            />
          ))}
        </motion.div>

        {/* Downward Scrolling Column */}
        <motion.div
          className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16"
          variants={scrollVariants}
          animate="down"
          style={{ minHeight: "200%" }}
          initial={{ y: "-50%" }}
        >
          {images.map((img, index) => (
            <img
              key={`down-${index}`}
              src={img}
              alt={`move${index + 1}`}
              className="w-30 h-30
                sm:w-20 sm:h-20 
                md:w-24 md:h-24 
                lg:w-28 lg:h-28 
                xl:w-38 xl:h-38 
                object-contain flex-shrink-0"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Move;