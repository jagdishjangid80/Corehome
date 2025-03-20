import React from "react";
import { Outlet } from "react-router-dom"; 
import Header from "../Header/Header"; 
import Footer from "../Footer/Footer"; 
import About from "../../pages/About/About";
import Brand from "../../pages/Brand/Brand";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
