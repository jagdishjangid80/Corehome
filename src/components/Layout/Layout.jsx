import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton";
import Leadership from '../../pages/Resources/leadership';
const Layout = () => {
  useEffect(() => {
    const element = document.createElement("div");
    element.id = "custom-element";
    document.body.appendChild(element);

    return () => {
      const existingElement = document.getElementById("custom-element");
      if (existingElement) {
        document.body.removeChild(existingElement);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet /> 
        {/* <Leadership/> */}
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
