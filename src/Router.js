import "./assets/styles/App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";

import React from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import { AnimatePresence } from "framer-motion";

const Router = () => {
  const location = useLocation();

  return (
    <div>
      <Nav />
      {/* <AnimatePresence> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* </AnimatePresence> */}
      <Footer />
    </div>
  );
};

export default Router;
