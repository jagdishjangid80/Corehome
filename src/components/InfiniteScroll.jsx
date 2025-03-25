import { motion } from "framer-motion";

const InfiniteScroll = ({ images, direction = "up" }) => {
  return (
    <div className="relative w-full h-screen flex overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full flex flex-col"
        initial={{ y: direction === "up" ? "0%" : "-90%" }}
        animate={{ y: direction === "up" ? ["0%", "-90%"] : ["-90%", "0%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {[...images, ...images].map((image, index) => (
          <div key={index} className="w-full h-auto">
            <img src={image} alt={`Background ${index + 1}`} className="w-full h-screen object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
