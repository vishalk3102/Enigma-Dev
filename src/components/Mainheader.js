import React from "react";
import "./styles/Mainheader.css";
import mainimg from "../../src/images/main-img1.png";
import { animations, motion } from "framer-motion";
const Mainheader = () => {
  return (
    <>
      <section className="main-header d-flex justify-content-center mb-10">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-md-6 order-1 order-lg-1 my-5  mx-auto leftside-box  d-flex justify-content-center flex-column">
                  <h1 className="mb-2 ">
                    We help and
                    <br />
                    solve your
                    <br />
                    business <span>problem.</span>
                  </h1>
                  <p>
                    Duis aute irure dolor in reprehenderit in <br />
                    voluptate velit esse cillum dolore eu fugiat nulla.
                  </p>
                  <div className="btn-read-more ">Read More</div>
                </div>
                <div className="col-lg-6 order-2 order-lg-2 img-box mt-1 mx-auto">
                  <img src={mainimg} alt="main-img" className="img" />
                  <motion.div
                    initial={{ x: "-800px", opacity: 0 }}
                    animate={{ opacity: 1, x: "0px", rotateZ: 180 }}
                    transition={{ duration: 2 }}
                    className="border-box"
                  >
                    .
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mainheader;
