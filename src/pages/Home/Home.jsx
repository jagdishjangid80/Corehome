import { motion } from "framer-motion";
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
import About from '../About/About'

const Home = () => {
  const imagesLeft = [background1, background3, background9, background4, background5];
  const imagesCenter = [background10, background11, background8, background7, background4];
  const imagesRight = [background2, background5, background6, background8, background10];

  return (
    <>
    <motion.div
      className="relative w-full h-screen flex overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div>
        <img
          src={logo}
          alt="Logo"
          className="absolute z-20 w-[320px] sm:w-[180px] md:w-[300px] lg:w-[400px] xl:w-[500px] top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className="absolute bottom-5 text-center z-20 w-full px-4 flex justify-center">
        <p className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          SCROLL TO <span className="text-yellow-400">ENTER</span>
        </p>
      </div>

      <motion.div
        className="absolute inset-0 bg-black/30 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
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
    <About/>
    </>
  );
};

export default Home;
