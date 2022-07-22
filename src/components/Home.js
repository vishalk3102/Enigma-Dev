import React from "react";
import Mainheader from "./Mainheader";
import Mainsection from "./Mainsection";
import Service from "./Service";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Pricing from "./Pricing";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Mainheader />
      <Mainsection />
      <Service />
      <Pricing />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
