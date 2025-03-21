import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Home.css";
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
import logo from "../../assets/images/manu.png";
import InfiniteScroll from "../../components/InfiniteScroll";
import About from "../About/About";

const Home = () => {
  const imagesLeft = [background1, background3, background9, background4, background5];
  const imagesCenter = [background10, background11, background8, background7, background4];
  const imagesRight = [background2, background5, background6, background8, background10];

  const [showPops, setShowPops] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [reverseScrollActive, setReverseScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      if (currentScroll > 50 && currentScroll < 800) {
        setShowPops(true);
        setShowLogo(false);
      } else if (currentScroll >= 800) {
        setShowPops(false);
      }

      if (currentScroll < prevScrollY && currentScroll < 800) {
        setReverseScrollActive(true);
      } else {
        setReverseScrollActive(false);
      }

      if (reverseScrollActive && currentScroll < 100) {
        setShowPops(false);
        setShowLogo(true);
      }

      setPrevScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY, reverseScrollActive]);

  return (
    <>
      <motion.div className="relative w-full h-screen flex overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="hidden md:block md:w-1/3 h-full overflow-hidden">
            <InfiniteScroll images={imagesLeft} direction="down" />
          </div>
          <div className="relative w-full md:w-1/3 h-full flex flex-col justify-center items-center overflow-hidden">
            <InfiniteScroll images={imagesCenter} direction="up" />
          </div>
          <div className="relative w-full md:w-1/3 h-full overflow-hidden">
            <InfiniteScroll images={imagesRight} direction="down" />
          </div>
        </div>
        {showLogo && (
          <motion.div
            className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: showPops ? 0.2 : 1, opacity: showPops ? 0 : 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={logo} alt="Logo" className="w-[320px] sm:w-[180px] md:w-[300px] lg:w-[400px]" />
          </motion.div>
        )}
        {showPops && (
          <motion.div
            className="absolute inset-0 bg-black flex justify-center items-center z-50 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-white text-6xl font-bold"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              Discover the future of housewares
            </motion.h1>
          </motion.div>
        )}
      </motion.div>
      <About />
    </>
  );
};

export default Home;
