import React from "react";
import { Routes, Route } from "react-router-dom";
import ".././node_modules/bootstrap/dist/css/bootstrap.min.css";
import ".././node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Service from "./components/Service";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
