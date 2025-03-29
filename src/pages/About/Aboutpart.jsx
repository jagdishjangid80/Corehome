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
import "../../assets/styles/about.css"; // Ensure styles are included if needed

gsap.registerPlugin(ScrollTrigger);

const AboutPart = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [showPops, setShowPops] = useState(false);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean); // Filter out null refs
    const container = containerRef.current;

    const updateSectionWidths = () => {
      const viewportWidth = window.innerWidth;
      sections.forEach((section) => {
        section.style.width = `${viewportWidth}px`;
      });
      ScrollTrigger.refresh();
    };

    // Initial setup
    updateSectionWidths();

    // GSAP animation
    const animation = gsap.to(sections, {
      x: () => -(sections.length - 1) * window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 0.5,
        start: "top top+=100", // Adjusted start point
        end: () => `+=${(sections.length - 1) * window.innerWidth}`,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Trigger PopsSection when nearing the end (95% progress)
          setShowPops(self.progress > 0.95);
        },
      },
    });

    // Debounced resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateSectionWidths();
        animation.scrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
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
        <div className="flex flex-col md:flex-row items-center text-center md:text-left p-4 max-w-[1280px] mx-auto md:gap-16">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              Where We Are
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-3 text-white">
              Find our in-house product developers, designers, engineers, marketing
              experts, and account managers based in NYC. We work closely with our
              vertically integrated factories in China and partner factories around
              the world.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-[500px]">
              <img
                src={aboutLast}
                alt="Background Image"
                className="w-[600px] h-[600px] rounded-lg shadow-lg object-cover"
              />
              <img
                src={aboutMain}
                alt="Overlay Image"
                className="absolute top-[-10%] right-[-15%] md:top-[-6%] md:right-[-60%] w-[70%] h-auto rounded-lg shadow-lg object-cover z-10"
              />
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
        className="relative w-screen h-screen bg-black mt-[100px] overflow-hidden"
      >
        <div className="flex h-full flex-nowrap">
          {sectionsData.map((section, index) => (
            <div
              key={index}
              ref={(el) => (sectionsRef.current[index] = el)}
              className="flex-shrink-0 h-full flex items-center justify-center text-white w-screen"
            >
              {section.content}
            </div>
          ))}
        </div>

        {/* PopsSection Overlay */}
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