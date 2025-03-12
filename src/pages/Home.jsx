import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import background1 from "../assets/images/background1.png";
import background2 from "../assets/images/background2.png";
import background3 from "../assets/images/background3.png";
import background4 from "../assets/images/background4.png";
import background5 from "../assets/images/background5.png";
import logo from "../assets/images/manu.png";

export default function HomePage() {
  const [entered, setEntered] = useState(false);
  const [showText, setShowText] = useState(true);
  const [popupVisible, setPopupVisible] = useState(true);
  const textRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupVisible(false);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  const imageColumns = [
    {
      images: [background1, background2, background3, background4, background5],
      direction: -1,
    },
    {
      images: [background5, background4, background3, background2, background1],
      direction: -1,
    },
    {
      images: [background2, background3, background5, background1, background4],
      direction: -1,
    },
  ];

  const handleScroll = (e) => {
    if (!entered && e.deltaY > 50) {
      setEntered(true);
    } else if (entered && e.deltaY < -50) {
      setEntered(false);
      setShowText(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setShowText(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black text-white transition-all duration-700"
      onWheel={handleScroll}
    >
      <AnimatePresence>
        {!entered ? (
          <>
            <div className="absolute inset-0 flex">
              {imageColumns.map((column, index) => (
                <div
                  key={index}
                  className="w-1/3 h-full relative overflow-hidden flex flex-col"
                >
                  <motion.div
                    className="flex flex-col"
                    animate={{ y: [column.direction * 1000, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 15,
                      ease: "linear",
                    }}
                  >
                    {[...column.images, ...column.images].map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="Background"
                        className="w-full h-full object-cover"
                      />
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img
                src={logo}
                alt="Logo"
                className="w-3/4 md:w-1/2 lg:w-[500px] mx-auto"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-14 left-1/2 -translate-x-1/2 text-center z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <p className="text-xl md:text-2xl font-semibold animate-bounce uppercase">
                SCROLL TO <span className="text-yellow-400">ENTER</span>
              </p>
            </motion.div>
          </>
        ) : (
          <motion.div
            className="fixed inset-0 flex justify-center items-center bg-black"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {popupVisible && (
              <motion.h1
                ref={textRef}
                className="text-white font-bold text-center"
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1.25 }}
                exit={{ opacity: 0, scale: 0.2 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 900 }}
              >
                Discover the Future of Housewares
              </motion.h1>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
