import React from "react";
import { motion } from "framer-motion";

const PopsComponent = ({ showPops }) => {
  if (!showPops) return null; // Prevent unnecessary rendering

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
          className="text-white sm:text-3xl md:text-2xl lg:text-5xl font-bold text-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Discover the future of housewares
        </motion.h1>
      </motion.div>
    </>
  );
};

export default PopsComponent;
