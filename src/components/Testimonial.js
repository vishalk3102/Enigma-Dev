import React from "react";
import "./styles/Testimonial.css";
import TestimonialData from "../data/TestimonialData";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial-section mx-auto col-10 ">
        <div className="heading-text text-center  mt-5 mx-auto d-flex justify-content-center">
          <h1>Testimonials</h1>
        </div>
        <div className="container-fluid d-flex justify-content-center flex-column">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex justify-content-center">
                {TestimonialData.map((val, index) => {
                  return (
                    <>
                      <div className="testimonial-card d-flex  align-items-center col-5 gy-4 mx-auto mb-4">
                        <motion.div
                          initial={{ opacity: 0, x: "-100px", rotate: 180 }}
                          whileInView={{ opacity: 1, x: "0px", rotate: 360 }}
                          transition={{
                            duration: 2,
                          }}
                          className="testimonial-img-box"
                        >
                          <img src={val.img} alt="testimg" />
                        </motion.div>
                        <div className="text">
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.velit minima
                            <br /> autem, debitis aepellendus, quae distinctio.
                          </p>
                          <span>{val.name}</span>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
