import { motion, useScroll, useTransform } from "framer-motion";
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

  // Scroll tracking
  const { scrollY } = useScroll();

  // Get viewport height dynamically
  const vh = window.innerHeight;
  const scrollThreshold = vh * 0.2; // 20% of screen height

  // Logo animations: Scale down (0 to 20%), then fade out (20% to 40%)
  const logoScale = useTransform(scrollY, [0, scrollThreshold], [1, 0.5]);
  const logoOpacity = useTransform(scrollY, [scrollThreshold, scrollThreshold * 2], [1, 0]);

  // Popup animation: Fade in from 20% to 40% scroll
  const popupOpacity = useTransform(scrollY, [scrollThreshold, scrollThreshold * 2], [0, 1]);

  return (
    <>
      {/* Home content - Fixed in place, doesn't scroll */}
      <motion.div
        className="fixed w-full h-screen flex justify-center items-center overflow-hidden top-0 left-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Logo - Visible by default, centered */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          initial={{ opacity: 1, scale: 1 }} // Visible by default
          style={{
            scale: logoScale,
            opacity: logoOpacity,
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-[320px] sm:w-[180px] md:w-[300px] lg:w-[400px] xl:w-[500px]"
          />
        </motion.div>

        {/* Background elements */}
        <motion.div
          className="absolute inset-0 bg-black/30 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        />

        <div className="hidden md:block md:w-1/3 h-full overflow-hidden">
          <InfiniteScroll images={imagesLeft} direction="down" />
        </div>
        <div className="relative w-full md:w-1/3 h-full flex flex-col justify-center items-center overflow-hidden">
          <InfiniteScroll images={imagesCenter} direction="up" />
        </div>
        <div className="relative w-full md:w-1/3 h-full overflow-hidden">
          <InfiniteScroll images={imagesRight} direction="down" />
        </div>

        <div className="absolute bottom-0 w-full h-30 bg-gradient-to-t from-black to-transparent z-10"></div>
      </motion.div>

      {/* Scrollable container for popup and subsequent content */}
      <div className="relative">
        {/* Spacer to allow scrolling before popup fully appears */}
        <div style={{ height: `${scrollThreshold * 2}px` }}></div>

        {/* Full Popup Page - Scrolls in, full screen with black background */}
        <motion.div
          className="relative w-full h-screen bg-black text-white flex items-center justify-center z-30"
          style={{
            opacity: popupOpacity,
          }}
        >
          <div className="text-center p-8">
            <p className="text-5xl md:text-5xl font-extrabold max-w-2xl">
              Discover the future of housewares
            </p>
          </div>
        </motion.div>

        {/* About section - Below popup */}
        <div className="relative z-20">
          <About />
        </div>
      </div>
    </>
  );
};

export default Home;