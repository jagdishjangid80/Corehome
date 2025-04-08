import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NewsPress from "./pages/News/News_press";
import Brand from "./pages/Brand/Brand";
import Contact from "./pages/Contact/Contact";
import Innovation from "./pages/Innovation/Innovation";
import NotFound from "./pages/Notfound/NotFound";
import Pfas from "./pages/pfaspage/pfaspage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "brand", element: <Brand /> },
      { path: "news_press", element: <NewsPress /> },
      { path: "contact", element: <Contact /> },
      { path: "innovation", element: <Innovation /> },
      { path: "pfaspage", element: <Pfas /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
