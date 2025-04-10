import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
import "../../assets/styles/about.css";
import image1 from "../../assets/images/about/about.png";
import about1 from "../../assets/images/about/ab1.png";
import about2 from "../../assets/images/about/ab2.png";
import about3 from "../../assets/images/about/ab3.png";
import about4 from "../../assets/images/about/ab4.png";
import about5 from "../../assets/images/about/ab5.png";
import about6 from "../../assets/images/about/ab6.png";
import about7 from "../../assets/images/about/ab7.png";
import about8 from "../../assets/images/about/ab8.png";
import about9 from "../../assets/images/about/ab9.png";
import img1 from "../../assets/images/about/img1.png";
import img2 from "../../assets/images/about/img2.png";
import img3 from "../../assets/images/about/img3.png";
import img4 from "../../assets/images/about/img4.png";
import img5 from "../../assets/images/about/img5.png";
import img6 from "../../assets/images/about/img6.png";
import img7 from "../../assets/images/about/img7.png";
import img8 from "../../assets/images/about/img8.png";
import ab1 from "../../assets/images/categories/ab1.png";
import ab2 from "../../assets/images/categories/ab2.png";
import ab3 from "../../assets/images/categories/ab3.png";
import ab4 from "../../assets/images/categories/ab4.png";
import ab5 from "../../assets/images/categories/ab5.png";
import ab6 from "../../assets/images/categories/ab6.png";
import ab7 from "../../assets/images/categories/ab7.png";
import ab8 from "../../assets/images/categories/ab8.png";
import ab9 from "../../assets/images/categories/ab9.png";
import ab10 from "../../assets/images/categories/ab10.png";
import ab11 from "../../assets/images/categories/ab11.png";
import ab12 from "../../assets/images/categories/ab12.png";
import ab13 from "../../assets/images/categories/ab13.png";
import ab14 from "../../assets/images/categories/ab14.png";
import ab15 from "../../assets/images/categories/ab15.png";
import ab16 from "../../assets/images/categories/ab16.png";
import ab17 from "../../assets/images/categories/ab17.png";
import ab18 from "../../assets/images/categories/ab18.png";
import ab19 from "../../assets/images/categories/ab19.png";
import ab20 from "../../assets/images/categories/ab20.png";

const values = [
  "Revolutionize Kitchenware",
  "Capture Integrity",
  "Curate Innovative Designs",
  "Prioritize Collaboration",
  "Support Sustainability",
  "Demonstrate Commitment to Quality",
  "Push the Boundaries of Aesthetic and Function",
  "Optimize Customer Experience",
];

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const categoriesWithImages = [
  { name: "Hydration", image: ab1 },
  { name: "Cookware", image: ab6 },
  { name: "Tools & Gadgets", image: ab11 },
  { name: "Food Prep", image: ab16 },
  { name: "Flatware", image: ab2 },
  { name: "Cutlery", image: ab7 },
  { name: "Lunch-to-go", image: ab12 },
  { name: "Bath", image: ab17 },
  { name: "Barware", image: ab3 },
  { name: "Bakeware", image: ab8 },
  { name: "Games", image: ab13 },
  { name: "Home Decor", image: ab18 },
  { name: "Stationery", image: ab4 },
  { name: "Cleaning Accessories", image: ab9 },
  { name: "Food Storage", image: ab14 },
  { name: "Dinnerware & Serveware", image: ab19 },
  { name: "Sustainable Accessories", image: ab5 },
  { name: "Kitchen Electrics", image: ab10 },
  { name: "Health & Beauty", image: ab15 },
  { name: "Home textiles", image: ab20 },
];

const imageArray = [about1, about2, about3, about4, about5];
const imageArray1 = [about6, about7, about8, about9, about4];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImage1, setCurrentImage1] = useState(0);
  const [isMouseMoved, setIsMouseMoved] = useState(false);
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [showPops, setShowPops] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageArray.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage1((prev) => (prev + 1) % imageArray1.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsMouseMoved(true);
      window.removeEventListener("mousemove", handleMouseMove);
    };

    const handleScroll = () => {
      setIsMouseMoved(true);
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMouseMoved) return;

    gsap.registerPlugin(ScrollTrigger);
    const sections = sectionsRef.current.filter(Boolean);
    const container = containerRef.current;

    const updateSectionWidths = () => {
      const viewportWidth = window.innerWidth;
      sections.forEach((section) => {
        section.style.width = `${viewportWidth}px`;
      });
      ScrollTrigger.refresh();
    };

    updateSectionWidths();

    const animation = gsap.to(sections, {
      x: () => -(sections.length - 1) * window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 2,
        start: "top top",
        end: () => `+=${(sections.length - 1) * window.innerWidth}`,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.2, max: 0.8 },
          delay: 0.5,
        },
        onUpdate: (self) => {
          const progress = self.progress;
          setShowPops(progress > 0.95);
        },
      },
    });

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        updateSectionWidths();
        animation.scrollTrigger.refresh();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      animation.kill();
    };
  }, [isMouseMoved]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.1 },
    }),
  };

  const sectionsData = [
    {
      title: "Where We Are",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isMouseMoved ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 h-full flex items-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-3 sm:mb-4">
                Where We Are
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed">
                Find our in-house product developers, designers, engineers,
                marketing experts, and account managers based in NYC. We work
                closely with our vertically integrated factories in China and
                partner factories around the world.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-end relative mt-4 md:mt-0">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                <img
                  src={aboutLast}
                  alt="Background Location Image"
                  className="w-full h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[650px] xl:min-h-[650px] rounded-lg shadow-lg object-cover"
                />
                <img
                  src={aboutMain}
                  alt="Overlay Location Image"
                  className="absolute bottom-0 right-0 sm:bottom-[-10%] sm:right-[-10%] 
      md:bottom-[-12%] md:right-[-15%] lg:bottom-[-15%] lg:right-[-20%] 
      xl:bottom-[-5%] xl:right-[-25%] w-[60%] sm:w-[65%] md:w-[70%] 
      h-auto rounded-lg shadow-lg object-cover z-10"
                />
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Support",
      content: (
        <div
          style={{ marginTop: "150px" }}
          className="w-full h-full flex items-start justify-center"
        >
          <Support />
        </div>
      ),
    },
    {
      title: "Materials",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          <Materials />
        </div>
      ),
    },
    {
      title: "Move",
      content: (
        <div className="w-full h-full flex items-center justify-center">
          <Move />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-16 md:pt-20 lg:pt-24">
      {/* About Us Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        <div className="flex flex-col items-center md:items-start justify-center space-y-4 md:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold">
            About Us
          </h1>
          <img
            src={image1}
            alt="About Us"
            className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[480px] xl:max-w-[560px] rounded-lg shadow-lg md:block hidden"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start space-y-6 md:space-y-8">
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
          >
            Our mission is simple: to make sustainable, trend-forward products
            that people will love. Our guiding light in creating unique products
            for the home are innovation, originality, collaboration, and
            sustainability. Thinking outside of the box is how we stay at the
            forefront of design, constantly striving to bring exciting,
            sustainably-sourced products to market.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 w-full justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={1}
          >
            <Link to="/brand">
              <motion.button
                className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base md:text-lg lg:text-2xl uppercase bg-white text-black rounded hover:bg-[#ebbb53] transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Brands
              </motion.button>
            </Link>
            <motion.button
              className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base md:text-lg lg:text-2xl uppercase border border-white rounded hover:bg-white hover:text-black transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={2}
          >
            {values.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-2"
                variants={fadeIn}
                custom={index + 3}
              >
                {images[index] && (
                  <img
                    src={images[index]}
                    alt={item}
                    className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
                  />
                )}
                <span className="text-sm sm:text-base md:text-lg lg:text-lg font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="space-y-6 md:space-y-8"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold"
          >
            Who We Are
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
            }}
            className="text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed"
          >
            A forward-thinking team of in-house product developers, designers,
            engineers, marketing experts, and account managers.
          </motion.p>
          {[
            {
              title: "Passion",
              text: "We aim to foster an environment where everyone can bring their best selves and feel excited about each new day.",
            },
            {
              title: "Creativity",
              text: "We pride ourselves on being trend-savvy and ahead of the curve when bringing unique products to the houseware market.",
            },
            {
              title: "Innovation",
              text: "With every product, we prioritize performance alongside style and sacrifice nothing in favor of having it all.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: index * 0.3 },
                },
              }}
              className="space-y-2"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-amber-400">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center md:justify-end">
          <img
            src={imageArray[currentImage]}
            alt="Who We Are"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[600px] xl:max-w-[780px] rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        <div className="flex justify-center md:justify-start">
          <img
            src={imageArray1[currentImage1]}
            alt="What We Do"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[600px] xl:max-w-[700px] rounded-lg shadow-lg object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold">
            What We Do
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed">
            We combine cutting-edge technology with bold aesthetics to produce
            home and lifestyle essentials.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {categoriesWithImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
                <span className="text-sm sm:text-base md:text-lg font-semibold mt-2">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="relative w-screen h-screen bg-black mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-[100px] overflow-hidden"
        >
          <div className="flex h-full flex-nowrap">
            {sectionsData.map((section, index) => (
              <div
                key={index}
                ref={(el) => (sectionsRef.current[index] = el)}
                className="flex-shrink-0 h-full w-screen flex items-center justify-center text-white"
                style={{ margin: 0, padding: 0 }}
              >
                {section.content}
              </div>
            ))}
          </div>

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
    </div>
  );
};

export default About;
