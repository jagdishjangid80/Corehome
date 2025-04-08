import { useEffect, useState } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black text-white shadow-2xl hover:bg-orange-400 transition duration-300"
        aria-label="Scroll to top"
      >
        <ChevronDoubleUpIcon className="h-4 w-4 font-bold" />
      </button>
    )
  );
}
