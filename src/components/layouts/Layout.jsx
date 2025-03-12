import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import About from "../../pages/About/About";
import Brand from "../../pages/Brand/Brand";
import Footer from "../common/Footer";
import Materials from "../../pages/About/Aboutpart";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <About/>
      <Materials/>
      <Brand/>
      <Footer/>
    </>
  );
};

export default Layout;
