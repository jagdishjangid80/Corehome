import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InfiniteScroll from "../../components/InfiniteScroll";
import About from "../About/About";
import "../../assets/styles/Home.css";
import LogoComponent from "../../components/Home/LogoComponent";
import PopsComponent from "../../components/Home/PopsComponent";
import MenuBar from "../../components/Navbar/Navbar";

import background1 from "../../assets/images/background1.png";
import background2 from "../../assets/images/background2.png";
import background3 from "../../assets/images/background3.png";
import background4 from "../../assets/images/background4.png";
import background5 from "../../assets/images/background5.png";
import background6 from "../../assets/images/background6.png";
import background7 from "../../assets/images/background7.png";
import background8 from "../../assets/images/background8.png";
import background9 from "../../assets/images/background9.png";
import background10 from "../../assets/images/background10.png";
import background11 from "../../assets/images/background11.png";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const imagesLeft = [background1, background3, background9, background4, background5];
  const imagesCenter = [background10, background11, background8, background7, background4];
  const imagesRight = [background2, background5, background6, background8, background10];

  const [showPops, setShowPops] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centerRef = useRef(null);
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScrollDirection = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScrollDirection);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        onUpdate: (self) => {
          if (self.progress > 0.2) {
            setShowLogo(false);
            setShowPops(true);
          } else {
            setShowLogo(true);
            setShowPops(false);
          }
        },
      },
    });

    tl.to(leftRef.current, { y: "90%", duration: 4, ease: "power1.inOut" }, 0);
    tl.to(rightRef.current, { y: "90%", duration: 4, ease: "power1.inOut" }, 0);
    tl.to(centerRef.current, { y: "-90%", duration: 4, ease: "power1.inOut" }, 0);

    tl.to(logoRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 3,
      ease: "power2.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, []);

  useEffect(() => {
    if (scrollDirection === "up") {
      setShowPops(false);
      setShowLogo(true);
    }
  }, [scrollDirection]);

  return (
    <>
      <MenuBar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <div
        ref={containerRef}
        className="relative w-full h-screen flex overflow-hidden bg-black"
      >
        <div className="absolute inset-0 flex">
          {/* Left Images - Hidden on Mobile */}
          <div ref={leftRef} className="hidden lg:block lg:w-1/3">
            <InfiniteScroll images={imagesLeft} direction="down" />
          </div>

          {/* Center Images - Always visible */}
          <div ref={centerRef} className="w-1/2 lg:w-1/3">
            <InfiniteScroll images={imagesCenter} direction="up" />
          </div>

          {/* Right Images - Visible on mobile too */}
          <div ref={rightRef} className="w-1/2 lg:w-1/3">
            <InfiniteScroll images={imagesRight} direction="down" />
          </div>
        </div>

        <LogoComponent ref={logoRef} showPops={showPops} showLogo={showLogo} />

        {showPops && <PopsComponent showPops={showPops} />}

        <motion.div
          className="absolute bottom-10 w-full flex justify-center items-center text-center z-50"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: showPops ? 0 : 1, scale: showPops ? 0.8 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wider">
            SCROLL TO <span className="text-yellow-400">ENTER</span>
          </p>
        </motion.div>
      </div>

      <About className="mt-[100vh]" />
    </>
  );
};

export default Home;
