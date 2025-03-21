import { motion } from "framer-motion";

const PopsSection = () => {
  const textLines = [
    "We represent the next generation",
    "of housewares, with an extensive",
    "portfolio of in-house brands",
    "to explore",
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, 
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-screen h-[50vh] bg-black text-white flex items-center justify-center">
      <motion.div
        className="text-center w-full max-w-[50%] px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {textLines.map((line, index) => (
          <motion.p
            key={index}
            className="text-6xl font-bold leading-tight"
            variants={lineVariants}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default PopsSection;