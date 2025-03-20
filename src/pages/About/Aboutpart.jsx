import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Support from "./Support";
import aboutlast from "../../assets/images/about/about4.png";
import aboutmain from "../../assets/images/about/aboutmain.png";
import Materials from "./Materials";
import Move from "./Move";

const Aboutpart = () => {
  const controls = useAnimation();
  const totalSections = 4;
  const isAnimating = useRef(false);

  const getSectionWidth = () =>
    typeof window !== "undefined" ? window.innerWidth : 1920;

  const [sectionWidth, setSectionWidth] = useState(getSectionWidth);
  const [scrollIndex, setScrollIndex] = useState(
    Number(localStorage.getItem("scrollIndex")) || 0
  );

  useEffect(() => {
    const updateWidth = () => setSectionWidth(getSectionWidth());
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const boundedIndex = Math.max(0, Math.min(scrollIndex, totalSections - 1));
    controls.start({ x: -boundedIndex * sectionWidth });
  }, [scrollIndex, sectionWidth, controls]);

  useEffect(() => {
    const handleScroll = (event) => {
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
        localStorage.setItem("scrollIndex", newIndex);
        controls.start({ x: -newIndex * sectionWidth });

        return newIndex;
      });

      setTimeout(() => (isAnimating.current = false), 800);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [controls, sectionWidth]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      <motion.div
        animate={controls}
        transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
        className="flex flex-nowrap"
        style={{ width: `${totalSections * 100}vw` }}
      >
        {/* Section 1: Where We Are */}
        <div className="h-full flex items-center justify-center text-white w-screen flex-shrink-0">
          <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-6 sm:gap-8 lg:gap-10 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
            <div className="md:w-1/2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
                Where We Are
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-3 sm:mt-4 lg:mt-6">
                Find our in-house product developers, designers, engineers,
                marketing experts, and account managers based in NYC. We work
                closely with our own vertically integrated factories in China
                and partner factories around the world.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center relative">
              <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[720px]">
                <img
                  src={aboutlast}
                  alt="Where We Are Background"
                  className="w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[500px] xl:h-[600px] rounded-lg shadow-lg object-cover"
                />
                <img
                  src={aboutmain}
                  alt="Where We Are Overlay"
                  className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] rounded-lg shadow-lg object-cover absolute bottom-[-10%] sm:bottom-[-10%] md:bottom-[-20%] right-[-25%] sm:right-[-8%] md:right-[-30%] lg:right-[-40%] z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Support */}
        <div className="h-full flex items-center justify-center text-white w-screen flex-shrink-0">
          <Support />
        </div>

        {/* Section 3: Materials */}
        <div className="h-full flex items-center justify-center text-white w-screen flex-shrink-0">
          <Materials />
        </div>

        {/* Section 4: Move */}
        <div className="h-full flex items-center justify-center text-white w-screen flex-shrink-0">
          <Move />
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutpart;