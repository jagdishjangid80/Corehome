import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Home.css";
import InfiniteScroll from "../../components/InfiniteScroll";
import About from "../About/About";
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
        {/* Background Infinite Scroll Sections */}
        <div className="absolute inset-0 flex">
          <div className="hidden md:block md:w-1/3 background-container">
            <InfiniteScroll images={imagesLeft} direction="down" />
          </div>

          <div className="w-full md:w-2/3 background-container flex">
            <div className="w-full md:w-1/2">
              <InfiniteScroll images={imagesCenter} direction="up" />
            </div>
            <div className="w-full md:w-1/2">
              <InfiniteScroll images={imagesRight} direction="down" />
            </div>
          </div>
        </div>

        {/* Logo */}
        {showLogo && (
          <motion.div
            className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: showPops ? 0.2 : 1, opacity: showPops ? 0 : 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={logo}
              alt="Logo"
              className="w-[550px] sm:w-[180px] md:w-[320px] lg:w-[550px]"
            />
          </motion.div>
        )}

        {/* Pop-up Text */}
        {showPops && (
          <motion.div
            className="absolute inset-0 bg-black flex justify-center items-center z-50 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-white sm:text-3xl md:text-2xl lg:text-5xl font-bold text-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              Discover the future of housewares
            </motion.h1>
          </motion.div>
        )}

        {/* Blur Effect & Scroll Text */}

        <div className="absolute bottom-8 w-full flex justify-center items-center text-center">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-extrabold">
            SCROLL TO <span className="text-yellow-400">ENTER</span>
          </p>
        </div>
        <div className="smoke-overlay-bottom "></div>
      </motion.div>

      <About />
    </>
  );
};

export default Home;
