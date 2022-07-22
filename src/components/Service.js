import React from "react";
import "./styles/Service.css";
import { motion } from "framer-motion";
import ServiceData from "../data/ServiceData";
import { FaChartBar } from "react-icons/fa";
import Footer from "./Footer";

const Service = () => {
  return (
    <>
      <section className="service-section d-flex justify-content-center flex-column mx-auto col-10">
        <div className="heading-text text-center my-5 d-flex justify-content-center flex-column">
          <h1>What’s included</h1>
          <p>
            Get 100+ features out of the box with ​ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row pb-4">
                {ServiceData.map((val, index) => {
                  return (
                    <>
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{
                          opacity: 1,
                          scale: 1.1,
                          border: "1px solid #0e29f2",
                        }}
                        key={index}
                        className="card d-flex  justify-content-center align-items-start flex-column gy-4 col-lg-4 col-md-3 mx-auto"
                      >
                        <motion.div
                          initial={{ x: 10, opacity: 0, rotateZ: 270 }}
                          whileInView={{ x: 0, opacity: 1, rotateZ: 360 }}
                          transition={{ duration: 2 }}
                          className="icon-box"
                        >
                          <FaChartBar className="icon-box-img" />
                        </motion.div>
                        <h4>{val.title}</h4>
                        <ul>
                          <li>Duis aute irure dolor</li>
                          <li>Velit esse cillum dolore</li>
                          <li>Excepteur sint occaecat</li>
                          <li>Cupidatat non proident</li>
                          <li>Sunt in culpa qui officia</li>
                        </ul>
                        <div className="link">learn more</div>
                      </motion.div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="btn-read-more mx-auto ">Read More</div>
      </section>
    </>
  );
};

export default Service;
