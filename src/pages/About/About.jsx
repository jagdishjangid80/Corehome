import img1 from "../../assets/images/about/img1.png";
import image1 from "../../assets/images/about/about.png";
import img2 from "../../assets/images/about/img2.png";
import img3 from "../../assets/images/about/img3.png";
import img4 from "../../assets/images/about/img4.png";
import img5 from "../../assets/images/about/img5.png";
import img6 from "../../assets/images/about/img6.png";
import img7 from "../../assets/images/about/img7.png";
import img8 from "../../assets/images/about/img8.png";
import aboutRight from "../../assets/images/about/about2.png";
// import aboutlast from "../../assets/images/about/about4.png";
import aboutWhatWeDo from "../../assets/images/about/about3.png";
// Import the category images
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
  { name: "Home Textiles", image: ab20 },
];
const About = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            About Us
          </h1>
          <img
            src={image1}
            alt="About Us"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg mt-4"
          />
        </div>
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-2xl sm:text-xl md:text-2xl">
            Our mission is simple: to make sustainable, trend-forward products
            that people will love. Our guiding light in creating unique products
            for the home are innovation, originality, collaboration, and
            sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <button
              className="px-6 py-3 bg-white text-black font-bold uppercase rounded-sm shadow-sm hover:bg-[#ebbb53] transition"
              aria-label="Explore Our Brands"
            >
              Explore Our Brands
            </button>
            <button
              className="px-6 py-3 bg-transparent text-white border border-white font-bold uppercase rounded-sm shadow-sm hover:bg-white hover:text-black transition"
              aria-label="Learn More"
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {values.map((item, index) => (
              <div key={index} className="flex items-center text-lg space-x-4 p-2">
                <img
                  src={images[index]}
                  alt={item}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-md font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-5xl font-bold">Who We Are</h1>
            <p className="text-2xl">
              A forward-thinking team of in-house product developers, designers,
              engineers, marketing experts, and account managers.
            </p>
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-yellow-400">Passion</h2>
                <p className="text-2xl mt-2">
                  We aim to foster an environment where everyone can bring their
                  best selves and feel excited about each new day.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-yellow-400">
                  Creativity
                </h2>
                <p className="text-2xl mt-2">
                  We pride ourselves on being trend-savvy and ahead of the curve
                  when bringing unique products to the houseware market.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-yellow-400">
                  Innovation
                </h2>
                <p className="text-2xl mt-2">
                  With every product, we prioritize performance alongside style
                  and sacrifice nothing in favor of having it all.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={aboutRight}
              alt="Who We Are"
              className="w-[450px] h-[450px] md:w-[500px] md:h-[500px] rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={aboutWhatWeDo}
              alt="What We Do"
              className="w-[450px] h-[450px] md:w-[500px] md:h-[500px] rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-6 h-full mt-6 sm:mt-[25px]">
            <h1 className="text-5xl md:text-4xl font-bold text-center md:text-left">
              What We Do
            </h1>
            <p className="text-2xl text-center md:text-left">
              We combine cutting-edge technology with bold aesthetics to produce
              home and lifestyle essentials.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-5 place-items-center">
              {categoriesWithImages.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-full"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-15 h-15 md:w-12 md:h-12 object-contain"
                  />
                  <span className="text-md sm:text-md font-semibold text-center mt-2">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
