import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NewsPress from "../../pages/News/News_press";
import Contact from "../../pages/Contact/Contact";
import Innovation from "../../pages/Innovation/Innovation";
import Pfsa from '../../pages/Resources/Pfaspage';
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        {/* <Contact/>
        <Innovation/>
        <NewsPress/>
        <Pfsa/> */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;