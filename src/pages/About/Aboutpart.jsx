import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Support from "./Support";
import aboutlast from "../../assets/images/about/about4.png";
import aboutmain from "../../assets/images/about/aboutmain.png";
import Materials from "./Materials";
import Move from "./Move";
import Brand from "../Brand/Brand";
import PopsSection from "./PopsSection";

const Aboutpart = () => {
  const controls = useAnimation();
  const totalSections = 4;
  const isAnimating = useRef(false);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [sectionWidth, setSectionWidth] = useState(0);

  const getSectionWidth = () => {
    return window.innerWidth; // Dynamically get the width of the window
  };

  useEffect(() => {
    const updateWidth = () => {
      setSectionWidth(getSectionWidth());
    };

    // Listen to window resize
    window.addEventListener("resize", updateWidth);

    updateWidth(); // Set initial width on first render

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handleWheel = (event) => {
    if (isAnimating.current) return;
    event.preventDefault();
    isAnimating.current = true;

    setScrollIndex((prev) => {
      let newIndex = prev;
      if (event.deltaY > 0 && prev < totalSections - 1) {
        newIndex += 1;
      } else if (event.deltaY < 0 && prev > 0) {
        newIndex -= 1;
      }

      newIndex = Math.max(0, Math.min(newIndex, totalSections - 1));

      controls.start({ x: -newIndex * sectionWidth });

      return newIndex;
    });

    setTimeout(() => (isAnimating.current = false), 800);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [controls, sectionWidth]);

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-black">
        <motion.div
          animate={controls}
          transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
          className="flex flex-nowrap"
          style={{ width: `${totalSections * 100}vw` }}
        >
          {/* Section 1 */}
          <div className="h-full flex items-center justify-center text-white w-screen flex-shrink-0">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
              <div className="w-full md:w-1/2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
                  Where We Are
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 lg:mt-6">
                  Find our in-house product developers, designers, engineers,
                  marketing experts, and account managers based in NYC. We work
                  closely with our own vertically integrated factories in China
                  and partner factories around the world.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center relative">
                <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[600px]">
                  <img
                    src={aboutlast}
                    alt="Where We Are Background"
                    className="w-full h-[280px] sm:h-[360px] md:h-[400px] lg:h-[480px] rounded-lg shadow-lg object-cover"
                  />
                  <img
                    src={aboutmain}
                    alt="Where We Are Overlay"
                    className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[360px] h-[200px] sm:h-[260px] md:h-[300px] lg:h-[360px] rounded-lg shadow-lg object-cover absolute bottom-[-10%] right-[-20%] sm:right-[-10%] md:right-[-20%] lg:right-[-30%] z-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="h-full flex items-center justify-center text-white w-screen flex-shrink-0">
            <Support />
          </div>

          {/* Section 3 */}
          <div className="h-full flex items-center justify-center text-white w-screen flex-shrink-0">
            <Materials />
          </div>

          {/* Section 4 */}
          <div className="h-full flex items-center justify-center text-white w-screen flex-shrink-0">
            <Move />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {scrollIndex === totalSections - 1 && (
          <motion.div
            key="pops-section"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <PopsSection />
          </motion.div>
        )}
      </AnimatePresence>
      <Brand />
    </>
  );
};

export default Aboutpart;
