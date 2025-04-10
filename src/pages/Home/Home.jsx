import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
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
  const imagesLeft = [background1, background3, background9, background4, background5];
  const imagesCenter = [background10, background11, background8, background7, background4];
  const imagesRight = [background2, background5, background6, background8, background10];

  const [showPops, setShowPops] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centerRef = useRef(null);
  const logoRef = useRef(null);
  const popsRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    const center = centerRef.current;
    const logo = logoRef.current;
    const pops = popsRef.current;
    const container = containerRef.current;

    if (!left || !right || !center || !logo || !pops || !container) return;

    gsap.set(logo, { scale: 1, opacity: 1 });
    gsap.set([left, right], { y: 0 });
    gsap.set(center, { y: 0 });
    gsap.set(pops, { opacity: 0 });

    const scrollDistance = window.innerHeight * 2;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
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

    tl.to(left, { y: "100%", ease: "none" }, 0)
      .to(right, { y: "100%", ease: "none" }, 0)
      .to(center, { y: "-100%", ease: "none" }, 0)
      .to(logo, { scale: 0.3, opacity: 0, ease: "none" }, 0)
      .to(pops, { opacity: 1, ease: "power1.in", duration: 0.3 }, 0.2);

    return () => {
      // Cleanup ScrollTriggers to prevent issues when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);  // Ensure this effect runs once on mount

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
          className="absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 pointer-events-none"
          style={{ opacity: showPops ? 1 : 0 }}
        >
          <PopsComponent showPops={showPops} />
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
