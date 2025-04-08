import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InfiniteScroll from "../../components/InfiniteScroll";
import About from "../About/About";
import "../../assets/styles/Home.css";
import LogoComponent from "../../components/Home/LogoComponent";
import PopsComponent from "../../components/Home/PopsComponent";

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
  const imagesLeft = [
    background1,
    background3,
    background9,
    background4,
    background5,
  ];
  const imagesCenter = [
    background10,
    background11,
    background8,
    background7,
    background4,
  ];
  const imagesRight = [
    background2,
    background5,
    background6,
    background8,
    background10,
  ];

  const [showPops, setShowPops] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centerRef = useRef(null);
  const logoRef = useRef(null);
  const popsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (
      containerRef.current &&
      leftRef.current &&
      rightRef.current &&
      centerRef.current &&
      logoRef.current &&
      popsRef.current
    ) {
 
      gsap.set(logoRef.current, { scale: 1, opacity: 1 });
      gsap.set([leftRef.current, rightRef.current], { y: 0 });
      gsap.set(centerRef.current, { y: 0 });
      gsap.set(popsRef.current, { opacity: 0 });

   
      const scrollDistance = window.innerHeight * 2;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            setShowLogo(progress < 0.75); 
            setShowPops(progress > 0.5);  
          },
        },
      });

      // Background and logo animations
      tl.to(leftRef.current, { y: "100%", ease: "none" }, 0)
        .to(rightRef.current, { y: "100%", ease: "none" }, 0)
        .to(centerRef.current, { y: "-100%", ease: "none" }, 0)
        .to(logoRef.current, { 
          scale: 0.3, 
          opacity: 0, 
          ease: "none" 
        }, 0)
        .to(popsRef.current, { 
          opacity: 1, 
          ease: "power1.in", 
          duration: 0.3 
        }, 0.2); 

    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full h-screen flex overflow-hidden bg-black"
      >
        <div className="absolute inset-0 flex">
          <div ref={leftRef} className="hidden lg:block lg:w-1/3">
            <InfiniteScroll images={imagesLeft} direction="down" />
          </div>
          <div ref={centerRef} className="w-1/2 lg:w-1/3">
            <InfiniteScroll images={imagesCenter} direction="up" />
          </div>
          <div ref={rightRef} className="w-1/2 lg:w-1/3">
            <InfiniteScroll images={imagesRight} direction="down" />
          </div>
        </div>
        <div
          ref={logoRef}
          className="absolute inset-0 flex items-center justify-center z-40"
        >
          <LogoComponent showPops={showPops} showLogo={showLogo} />
        </div>
        <div
          ref={popsRef}
          className="absolute inset-0 flex items-center justify-center z-30"
        >
          {showPops && <PopsComponent showPops={showPops} />}
        </div>
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