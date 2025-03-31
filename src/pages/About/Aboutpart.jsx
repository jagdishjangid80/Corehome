import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Support from "../Support/Support";
import Materials from "../Our_material/Materials";
import Brand from "../Brand/Brand";
import PopsSection from "../../components/PopsCard/PopsSection";
import Move from "./Move";
import aboutLast from "../../assets/images/about/about4.png";
import aboutMain from "../../assets/images/about/aboutmain.png";
import "../../assets/styles/about.css";

gsap.registerPlugin(ScrollTrigger);

const AboutPart = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [showPops, setShowPops] = useState(false);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean);
    const container = containerRef.current;

    const updateSectionWidths = () => {
      const viewportWidth = window.innerWidth;
      sections.forEach((section) => {
        section.style.width = `${viewportWidth}px`;
      });
      ScrollTrigger.refresh();
    };

    updateSectionWidths();

    const animation = gsap.to(sections, {
      x: () => -(sections.length - 1) * window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5,
        start: "top top+=50",
        end: () => `+=${(sections.length - 1) * window.innerWidth}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setShowPops(self.progress > 0.95);
        },
      },
    });

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateSectionWidths();
        animation.scrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      animation.kill();
    };
  }, []);

  const sectionsData = [
    {
      title: "Where We Are",
      content: (
        <div className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-4 sm:mb-6">
                Where We Are
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
                Find our in-house product developers, designers, engineers,
                marketing experts, and account managers based in NYC. We work
                closely with our vertically integrated factories in China and
                partner factories around the world.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center relative mt-6 md:mt-0">
              <div className="relative w-full max-w-[300px]  sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px]">
                <img
                  src={aboutLast}
                  alt="Background Image"
                  className="w-full h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:h-[500px] xl:h-[700px] rounded-lg shadow-lg object-cover"
                />

                <img
                  src={aboutMain}
                  alt="Overlay Image"
                  className="absolute top-[-8%] right-[-12%] sm:top-[-10%] sm:right-[-15%] 
                    md:top-[-12%] md:right-[-20%] lg:top-[-15%] lg:right-[-25%] 
                    xl:top-[-15%] xl:right-[-30%] w-[60%] sm:w-[65%] md:w-[70%] 
                    h-auto rounded-lg shadow-lg object-cover z-10"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    { title: "Support", content: <Support /> },
    { title: "Materials", content: <Materials /> },
    { title: "Move", content: <Move /> },
  ];

  return (
    <div className="overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-screen h-screen bg-black mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-[100px] overflow-hidden"
      >
        <div className="flex h-full flex-nowrap">
          {sectionsData.map((section, index) => (
            <div
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="flex-shrink-0 h-full w-screen flex items-center justify-center text-white"
            >
              {section.content}
            </div>
          ))}
        </div>

        {showPops && (
          <div
            className={`absolute inset-0 bg-black bg-opacity-95 flex items-center justify-center transition-opacity duration-500 z-20 ${
              showPops ? "opacity-100" : "opacity-0"
            }`}
          >
            <PopsSection />
          </div>
        )}
      </div>
      <Brand />
    </div>
  );
};

export default AboutPart;
