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
  move1,
  move2,
  move3,
  move4,
  move5,
  move6,
  move7,
  move8,
  move9,
  move10,
  move11,
  move12,
  move13,
  move14,
  move15,
  move16,
  move17,
  move18,
  move19,
  move20,
  move21,
];

const Move = () => {
  return (
    <div className="flex gap-6 overflow-hidden min-h-screen md:h-[400px] sm:h-[300px] relative w-full">
      <motion.div
        className="flex flex-col gap-4"
        animate={{ y: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`move${index}`}
            className="w-auto max-w-full h-35 object-cover"
          />
        ))}
      </motion.div>
      <motion.div
        className="flex flex-col gap-4"
        animate={{ y: ["-100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`move${index}`}
            className="w-auto max-w-full h-35 object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Move;
