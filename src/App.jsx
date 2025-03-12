import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout.jsx";
import Home from "./pages/Home";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Innovation from "./pages/Innovation.jsx";
import Brand from "./pages/Brand/Brand.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="innovation" element={<Innovation />} />
          <Route path="brand" element={<Brand />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
