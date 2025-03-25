import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 50 && currentScroll < 800) {
        setShowPops(true);
        setShowLogo(false);
      } else if (currentScroll >= 800) {
        setShowPops(false);
      } else {
        setShowLogo(true);
      }

      if (currentScroll < prevScrollY && currentScroll < 800) {
        timeout = setTimeout(() => {
          setShowPops(false);
        }, 1000);
      }

      setPrevScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [prevScrollY]);

  return (
    <>
      <motion.div className="relative w-full h-screen flex overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="hidden md:block md:w-1/3 background-container">
            <InfiniteScroll images={imagesLeft} direction="down" />
          </div>
          <div className="hidden md:block md:w-1/3 background-container">
            <InfiniteScroll images={imagesCenter} direction="up" />
          </div>
          <div className="hidden md:block md:w-1/3 background-container">
            <InfiniteScroll images={imagesRight} direction="down" />
          </div>
        </div>
        <LogoComponent showPops={showPops} showLogo={showLogo} />
        <PopsComponent showPops={showPops} />
        <div className="smoke-overlay-bottom"></div>

        <motion.div
          className="absolute bottom-10 w-full flex justify-center items-center text-center z-52"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: showPops ? 0 : 1, scale: showPops ? 0.8 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-white text-lg md:text-xl lg:text-2xl font-extrabold">
            SCROLL TO <span className="text-yellow-400">ENTER</span>
          </p>
        </motion.div>
      </motion.div>

      <About />
    </>
  );
};

export default Home;
