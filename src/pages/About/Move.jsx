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
  return (
    <div className="flex gap-6 overflow-hidden w-full min-h-screen md:h-[500px] sm:h-[400px] lg:h-[600px] xl:h-[700px] relative">
      <motion.div
        className="flex flex-col gap-6"
        animate={{ y: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`move${index}`}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain"
          />
        ))}
      </motion.div>
      <motion.div
        className="flex flex-col gap-6"
        animate={{ y: ["-100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`move${index}`}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Move;
