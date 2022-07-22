import React from "react";
import "./styles/Contact.css";
import contactimg from "../../src/images/contactimg.jpg";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <section className="contact-section col-12 mx-auto">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="consultation text-center ">
                  <h1>Do You Need A Consultation?</h1>
                  <p>
                    Quam nulla porttitor massa id neque aliquam vestibulum morbi
                    blandit. Neque vitae tempus quam pellentesque nec nam
                    aliquam sem. Neque ornare aenean euismod.
                  </p>
                  <div className=" form-box d-flex align-items-center justify-content-center">
                    <div>
                      <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Enter your Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter you Email address"
                      />
                    </div>

                    <button type="submit" class="submit-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" container-fluid col-12 contact-box">
        <div className="row d-flex justify-content-center flex-column pb-0">
          <div className="contact-main-box">
            <div className=" col-lg-6 col-md-6 contact-img-box order-1 order-lg-1">
              <img src={contactimg} alt="" />
              <motion.div
                initial={{ x: "-800px", opacity: 0 }}
                animate={{ opacity: 1, x: "0px", rotateZ: 180 }}
                transition={{ duration: 2 }}
                className="border-box-two"
              >
                .
              </motion.div>{" "}
            </div>
            <div className="contact-text-box col-lg-6 col-md-6 order-2 order-lg-2">
              <h1>Get in Touch</h1>
              <span>enigmadev@gmail.com</span>
              <span>3732237482</span>
              <h3>Address</h3>
              <p>
                2865 Monroe Avenue <br /> Fort Myers <br /> Province full
                Florida <br /> 33901
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
