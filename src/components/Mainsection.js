import React from "react";
import { animations, motion } from "framer-motion";
import slidingimg from "../../src/images/slidingimg.jpeg";
import "./styles/Mainsection.css";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Mainsection = () => {
  const AnimationOne = useAnimation();
  const [ref1, inView1] = useInView();
  useEffect(() => {
    if (inView1) {
      AnimationOne.start({
        opacity: 1,
        x: "100px",
        transition: {
          duration: 2,
        },
      });
    }
    if (!inView1) {
      AnimationOne.start({ opacity: 0, x: "-400px" });
    }
  }, [inView1]);

  return (
    <>
      <section className="main-section">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row slidingimg-box my-4">
              <motion.div ref={ref1} animate={AnimationOne}>
                <img
                  src={slidingimg}
                  alt="sliding-img"
                  className="sliding-img"
                />
              </motion.div>
            </div>
            <div className="row main-section-text mx-auto d-flex justify-content-center py-2 ">
              <div className="mainsection-leftside-box col-lg-3 col-md-3 my-auto mx-auto ">
                <h2>Benefits of Coaching for Individuals.</h2>
              </div>
              <div className="middle-box col-lg-3 col-md-3 my-auto mx-auto">
                <p>
                  Sed pulvinar proin gravida hendrerit lectus. Faucibus et.
                  <br />
                  molestie ac feugiat sed. Malesuada fames ac turpis egestas.
                  <br />
                  maecenas pharetra convallis posuere morbi. Turpis egestas.
                  <br />
                  integer eget aliquet nibh praesent. Vitae et leo duis ut.
                  <br />
                  diam quam nulla porttitor massa. Quis lectus nulla at volutpat
                  diam ut venenatis tellus.
                  <br /> Eget nullam non nisi est.
                  <br />
                  sit amet facilisis magna etiam.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: "80px" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className=" rightside-box col-lg-3 col-md-3 my-auto mx-auto"
              >
                <ul>
                  <li>Establish and act toward achieving goals</li>
                  <br />
                  <li>Increased level of engagement</li>
                  <br />
                  <li>Safe Place to Gain Perspective</li>
                  <br />
                  <li>Deeper Level of Learning</li>
                  <br />
                  <li>Build Personal Awareness</li>
                  <br />
                  <li>Boost your networking opportunities</li>
                  <br />
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mainsection;
