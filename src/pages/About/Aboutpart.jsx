import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Support from "./Support";
import Materials from "./Materials";
import Brand from "../Brand/Brand";
import PopsSection from "./PopsSection";
import Move from "./Move";
import aboutlast from "../../assets/images/about/about4.png";
import aboutmain from "../../assets/images/about/aboutmain.png";
import "../../assets/styles/about.css";

gsap.registerPlugin(ScrollTrigger);

const Aboutpart = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [showPops, setShowPops] = useState(false);

  useEffect(() => {
    const sections = sectionsRef.current;
    const container = containerRef.current;
    const totalWidth = sections.length * window.innerWidth;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5,
        start: "top top",
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setShowPops(self.progress > 0.95);
        },
      },
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="w-screen h-screen overflow-hidden bg-black relative">
        <div className="flex flex-nowrap h-full">
          {/* Section 1: Where We Are */}
          <div ref={(el) => (sectionsRef.current[0] = el)} className="h-full flex items-center justify-center text-white w-screen flex-shrink-0">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
              <div className="w-full md:w-1/2">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                  Where We Are
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 sm:mt-3 lg:mt-4">
                  Find our in-house product developers, designers, engineers, marketing experts, and account managers based in NYC. We work closely with our own vertically integrated factories in China and partner factories around the world.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center relative">
                <div className="relative w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[600px]">
                  <img src={aboutlast} alt="Where We Are Background" className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[350px] rounded-lg shadow-lg object-cover" />
                  <img src={aboutmain} alt="Where We Are Overlay" className="w-[100px] sm:w-[150px] md:w-[200px] lg:w-[250px] h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] rounded-lg shadow-lg object-cover absolute bottom-[-10%] right-[-15%] sm:right-[-10%] lg:right-[-15%] z-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Support */}
          <div ref={(el) => (sectionsRef.current[1] = el)} className="h-full flex items-center justify-center text-white w-screen flex-shrink-0">
            <Support />
          </div>

          {/* Section 3: Materials */}
          <div ref={(el) => (sectionsRef.current[2] = el)} className="h-full flex items-center justify-center text-white w-screen flex-shrink-0">
            <Materials />
          </div>

          {/* Section 4: Move */}
          <div ref={(el) => (sectionsRef.current[3] = el)} className="h-full flex items-center justify-center text-white w-screen flex-shrink-0">
            <Move />
          </div>
        </div>

        {showPops && (
          <div className="absolute inset-0 bg-black bg-opacity-95 flex items-center justify-center fade-in">
            <PopsSection />
          </div>
        )}
      </div>
      <Brand />
    </>
  );
};

export default Aboutpart;
