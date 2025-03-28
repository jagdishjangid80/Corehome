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

const AboutPart = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [showPops, setShowPops] = useState(false);

  useEffect(() => {
    const sections = sectionsRef.current;
    const container = containerRef.current;

    sections.forEach((section) => {
      section.style.width = `${window.innerWidth}px`;
    });

    const totalWidth = sections.length * window.innerWidth;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5,
        start: "top top",
        end: `+=${totalWidth}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => setShowPops(self.progress > 0.95),
      },
    });

    const handleResize = () => {
      sections.forEach((section) => {
        section.style.width = `${window.innerWidth}px`;
      });
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-[80px]">
      <div
        ref={containerRef}
        className="w-screen h-screen overflow-hidden bg-black relative"
      >
        <div className="flex h-full">
          {["Where We Are", <Support />, <Materials />, <Move />].map(
            (content, index) => (
              <div
                key={index}
                ref={(el) => (sectionsRef.current[index] = el)}
                className="h-full flex items-center justify-center text-white flex-shrink-0"
              >
                {typeof content === "string" ? (
                  <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row items-center text-center md:text-left px-4 py-6">
                    <div className="w-full md:w-1/2">
                      <h1 className="text-3xl md:text-4xl font-semibold">
                        {content}
                      </h1>
                      <p className="text-base md:text-lg mt-3">
                        Find our in-house product developers, designers,
                        engineers, marketing experts, and account managers based
                        in NYC. We work closely with our own vertically
                        integrated factories in China and partner factories
                        around the world.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center relative">
                      <div className="relative w-full max-w-[500px]">
                        <img
                          src={aboutlast}
                          alt="Where We Are Background"
                          className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg shadow-lg object-cover"
                        />
                        <img
                          src={aboutmain}
                          alt="Where We Are Overlay"
                          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-lg shadow-lg object-cover absolute bottom-[-5%] right-[-10%] z-10"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  content
                )}
              </div>
            )
          )}
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

export default AboutPart;