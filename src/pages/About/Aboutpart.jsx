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
        onUpdate: (self) => setShowPops(self.progress > 0.95),
      },
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-[80px]">
      <div ref={containerRef} className="w-screen h-screen overflow-hidden bg-black relative">
        <div className="flex h-full w-screen">
          {["Where We Are", <Support />, <Materials />, <Move />].map((content, index) => (
            <div
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="h-full flex items-center justify-center text-white w-screen flex-shrink-0"
            >
              {typeof content === "string" ? (
                <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-2 sm:gap-4 lg:gap-6 px-2 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
                  <div className="w-full md:w-1/2">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">{content}</h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-1 sm:mt-2 lg:mt-3">
                      Find our in-house product developers, designers, engineers, marketing experts, and account managers based in NYC. We work closely with our own vertically integrated factories in China and partner factories around the world.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center relative">
                    <div className="relative w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
                      <img src={aboutlast} alt="Where We Are Background" className="w-full h-[120px] sm:h-[180px] md:h-[220px] lg:h-[500px] rounded-lg shadow-lg object-cover" />
                      <img src={aboutmain} alt="Where We Are Overlay" className="w-[80px] sm:w-[120px] md:w-[160px] lg:w-[300px] h-[80px] sm:h-[120px] md:h-[160px] lg:h-[300px] rounded-lg shadow-lg object-cover absolute bottom-[-5%] right-[-10%] sm:right-[-5%] lg:right-[-10%] z-10" />
                    </div>
                  </div>
                </div>
              ) : (
                content
              )}
            </div>
          ))}
        </div>
        {showPops && (
          <div className="absolute inset-0 bg-black bg-opacity-95 flex items-center justify-center fade-in">
            <PopsSection />
          </div>
        )}
      </div>
      <Brand />
    </div>
  );
};

export default Aboutpart;
