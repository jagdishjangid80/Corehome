import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home"; 
import About from "./pages/About/About";
import Brand from "./pages/Brand/Brand";
import Contact from "./pages/Contact/Contact";
import Innovation from "./pages/Innovation/Innovation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "brand", element: <Brand /> },
      { path: "contact", element: <Contact /> },
      { path: "innovation", element: <Innovation /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;