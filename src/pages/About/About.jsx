import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import ab6 from "../../assets/images/categories/ab6.png";
import ab11 from "../../assets/images/categories/ab11.png";
import ab16 from "../../assets/images/categories/ab16.png";
import ab2 from "../../assets/images/categories/ab2.png";
import ab7 from "../../assets/images/categories/ab7.png";
import ab12 from "../../assets/images/categories/ab12.png";
import ab17 from "../../assets/images/categories/ab17.png";
import ab3 from "../../assets/images/categories/ab3.png";
import ab8 from "../../assets/images/categories/ab8.png";
import ab13 from "../../assets/images/categories/ab13.png";
import ab18 from "../../assets/images/categories/ab18.png";
import ab4 from "../../assets/images/categories/ab4.png";
import ab9 from "../../assets/images/categories/ab9.png";
import ab14 from "../../assets/images/categories/ab14.png";
import ab19 from "../../assets/images/categories/ab19.png";
import ab5 from "../../assets/images/categories/ab5.png";
import ab10 from "../../assets/images/categories/ab10.png";
import ab15 from "../../assets/images/categories/ab15.png";
import ab20 from "../../assets/images/categories/ab20.png";
import Aboutpart from "../About/Aboutpart";
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
  { name: "Home Textiles", image: ab20 },
];

const imageArray = [about1, about2, about3, about4, about5];
const imageArray1 = [about6, about7, about8, about9, about4];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImage1, setCurrentImage1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageArray.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage1((prevImage) => (prevImage + 1) % imageArray1.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-black text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-6 sm:pb-10 lg:pb-16">
          <div className="flex flex-col items-center md:items-start justify-center">
            <h1 className="text-xl sm:text-6xl md:text-3xl lg:text-8xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
              About Us
            </h1>
            <img
              src={image1}
              alt="About Us"
              className="w-full h-auto max-w-[200px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[480px] xl:max-w-[560px] rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center items-center md:items-start space-y-4 sm:space-y-6 md:space-y-5 lg:space-y-8 self-center">
            <p className="text-lg sm:text-lg md:text-lg lg:text-1xl xl:text-2xl leading-relaxed">
              Our mission is simple: to make sustainable, trend-forward products
              that people will love. Our guiding light in creating unique
              products for the home are innovation, originality, collaboration,
              and sustainability. Thinking outside of the box is how we stay at
              the forefront of design, constantly striving to bring exciting,
              sustainably-sourced products to market.
            </p>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full">
              <Link to="/brand">
                <button className="w-full md:w-auto px-4 py-2 md:px-5 md:py-2.5 bg-white text-black sm:text-2xl md:text-base lg:text-lg font-bold uppercase rounded hover:bg-[#ebbb53] transition duration-300">
                  Explore Our Brands
                </button>
              </Link>

              <button className="w-full md:w-auto px-4 py-2 md:px-5 md:py-2.5 border border-white sm:text-2xl md:text-base lg:text-lg font-bold uppercase rounded hover:bg-white hover:text-black transition duration-300">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 lg:gap-4 w-full">
              {values.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-start space-x-2 md:space-x-3 lg:space-x-4 p-2"
                >
                  {images[index] && (
                    <img
                      src={images[index]}
                      alt={item}
                      className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0"
                    />
                  )}
                  <span className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-6 sm:pb-10 lg:pb-16">
          <div className="space-y-4 sm:space-y-6 md:space-y-5 lg:space-y-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-8xl xl:text-5xl font-bold">
              Who We Are
            </h1>
            <p className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              A forward-thinking team of in-house product developers, designers,
              engineers, marketing experts, and account managers.
            </p>
            <div className="space-y-4 md:space-y-5 lg:space-y-6">
              <div>
                <h2 className="text-lg sm:text-lg md:text-2xl lg:text-5xl xl:text-4xl font-bold text-amber-400">
                  Passion
                </h2>
                <p className="text-lg sm:text-lg md:text-lg lg:text-4xl xl:text-2xl leading-relaxed">
                  We aim to foster an environment where everyone can bring their
                  best selves and feel excited about each new day.
                </p>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-7xl xl:text-4xl font-bold text-amber-400">
                  Creativity
                </h2>
                <p className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  We pride ourselves on being trend-savvy and ahead of the curve
                  when bringing unique products to the houseware market.
                </p>
              </div>
              <div>
                <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-amber-400">
                  Innovation
                </h2>
                <p className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
                  With every product, we prioritize performance alongside style
                  and sacrifice nothing in favor of having it all. By working
                  closely with our very own factories, we ensure only the very
                  best arrives in your home.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={imageArray[currentImage]}
              alt="Who We Are"
              className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[640px] xl:max-w-[780px] rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* What We Do Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 pb-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-start">
            <img
              src={imageArray1[currentImage1]}
              alt="What We Do"
              className="w-full max-w-[340px] sm:max-w-[400px] lg:h-[785px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[700px] rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-7xl xl:text-5xl font-bold">
              What We Do
            </h1>
            <p className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              We combine cutting-edge technology with bold aesthetics to produce
              home and lifestyle essentials.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-3">
              {categoriesWithImages.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-15 h-15 sm:w-14 sm:h-14 md:w-15 md:h-15 lg:w-18 lg:h-18"
                  />
                  <span className="font-semibold text-lg sm:text-lg md:text-base lg:text-lg mt-2 text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Aboutpart />
      </div>
    </>
  );
};

export default About;
