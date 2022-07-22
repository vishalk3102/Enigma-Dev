import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./styles/Pricing.css";
import PricingData from "../data/PricingData";

const Pricing = () => {
  return (
    <>
      <section className="pricing-section my-7">
        <div className="heading-text mt-5">
          <h1>Pricing Table</h1>
          <p className="my-3">
            Vel risus commodo viverra maecenas accumsan lacus vel facilisis.
            Eutincidunt tortor aliquam nulla facilisi cras fermentu
            <br /> m odio eu. Cras semper auctor neque vitae tempus quam.
          </p>
        </div>
        <div className="container-fluid card-box col-10">
          <div className="row">
            <div className="col-10 mx-auto">
              <div class=" row pricing-card mb-5 mb-lg-0 ">
                {PricingData.map((val, index) => {
                  return (
                    <>
                      <div key={index} class="card-body gy-5">
                        <h5 class="text-center">{val.title}</h5>
                        <h6 class="text-center">
                          $ <span class="price">{val.price}</span>
                        </h6>
                        <hr className="mx-auto" />
                        <ul className="mx-auto">
                          <li className="text-center mx-auto">
                            Beautifully Designed
                            <hr />
                          </li>
                          <li className="text-center mx-auto">
                            100% Responsive
                            <hr />
                          </li>
                          <li className=" text-center mx-auto">
                            Smooth Interactions
                            <hr />
                          </li>
                          <li className="text-center mx-auto">Great Support</li>
                        </ul>
                        <div class="arrow-div d-grid">
                          <FaArrowRight class="arrow-img" />
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
export default Pricing;
