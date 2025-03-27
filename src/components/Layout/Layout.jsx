import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NewsPress from "../../pages/About/News_press";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <NewsPress/> */}
      <Footer />
    </>
  );
};

export default Layout;
