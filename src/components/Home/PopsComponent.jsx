import React from "react";
import { motion } from "framer-motion";

const PopsComponent = ({ showPops }) => {
  if (!showPops) return null; 

  return (
    <>
      <motion.div
        className="absolute inset-0 bg-black flex justify-center items-center z-50 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-white sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-wide leading-tight"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Discover the future <br /> of housewares
        </motion.h1>
      </motion.div>
    </>
  );
};

export default PopsComponent;
