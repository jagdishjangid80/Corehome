import { motion } from "framer-motion";

const PopsSection = () => {
  const textLines = [
    "We Represent The Next",
    "generation Of Housewares,",
    "With An Extensive Portfolio",
    "Of In-House Brands",
    "To Explore",
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
    <div className="w-screen h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-black text-white flex items-center justify-center">
      <motion.div
        className="text-center w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] px-4 sm:px-6 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {textLines.map((line, index) => (
          <motion.p
            key={index}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-snug md:leading-normal"
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