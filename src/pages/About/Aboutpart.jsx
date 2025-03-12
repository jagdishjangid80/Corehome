import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Support from "./Support";
import aboutlast from "../../assets/images/about/about4.png";
import aboutmain from "../../assets/images/about/aboutmain.png";
import Materials from "./Materials";
import Move from "./move";

const ScrollComponent = () => {
  const controls = useAnimation();
  const totalCards = 3;

  const getSectionWidth = () =>
    typeof window !== "undefined" ? window.innerWidth : 1920;

  const [sectionWidth, setSectionWidth] = useState(getSectionWidth());
  const [scrollIndex, setScrollIndex] = useState(
    () => Number(localStorage.getItem("scrollIndex")) || 0
  );
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const updateWidth = () => setSectionWidth(getSectionWidth());
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const storedIndex = Number(localStorage.getItem("scrollIndex")) || 0;
    setScrollIndex(storedIndex);
    controls.start({ x: -storedIndex * sectionWidth });
  }, [controls, sectionWidth]);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isAnimating) return;
      event.preventDefault();
      setIsAnimating(true);

      setScrollIndex((prev) => {
        let newIndex = prev;

        if (event.deltaY > 0 && prev < totalCards) {
          newIndex = Math.min(prev + 1, totalCards);
        } else if (event.deltaY < 0 && prev > 0) {
          newIndex = Math.max(prev - 1, 0);
        }

        localStorage.setItem("scrollIndex", newIndex);
        controls.start({ x: -newIndex * sectionWidth });
        return newIndex;
      });

      setTimeout(() => setIsAnimating(false), 1000);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isAnimating, scrollIndex, totalCards, controls, sectionWidth]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <motion.div
        animate={controls}
        transition={{ type: "tween", duration: 1 }}
        className="flex"
        style={{ width: `${(totalCards + 1) * 100}vw` }}
      >
        <div
          className="h-full flex items-center justify-center text-white"
          style={{ width: sectionWidth }}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left px-4 md:px-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold">
                Where We Are
              </h1>
              <p className="text-sm sm:text-base md:text-2xl">
                Find our in-house product developers, designers, engineers,
                marketing experts, and account managers based in NYC.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center relative">
              <div className="relative w-[550px] h-[500px] sm:w-[200px] sm:h-[200px] md:w-[400px] md:h-[400px] lg:w-[650px] lg:h-[600px] flex justify-center">
                <img
                  src={aboutlast}
                  alt="Who We Are"
                  className="w-full h-full rounded-lg shadow-lg object-cover absolute bottom-0 right-0 z-10"
                />
                
                <img
                  src={aboutmain}
                  alt="Who We Are"
                  className="w-[80%] h-[80%] sm:w-[60%] sm:h-[60%] md:w-[85%] md:h-[85%] lg:w-[85%] lg:h-[85%] rounded-lg shadow-lg object-cover absolute bottom-[-5%] sm:bottom-[-2%] md:bottom-[-3%] right-[-30%] sm:right-[-5%] md:right-[-28%] lg:right-[-10%] z-20"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-full flex items-center justify-center text-white"
          style={{ width: sectionWidth }}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-8 pt-10 md:pt-20">
            <Support />
          </div>
        </div>
        <div
          className="h-full flex items-center justify-center text-white"
          style={{ width: sectionWidth }}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-8 pt-10 md:pt-20">
            <Materials />
          </div>
        </div>
        <div
          className="h-full flex items-center justify-center text-white"
          style={{ width: sectionWidth }}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-8 pt-10 md:pt-20">
            <Move />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollComponent;
