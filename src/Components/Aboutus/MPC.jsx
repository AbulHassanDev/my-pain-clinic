import React from "react";
import { motion } from "framer-motion";
import MYC from "../../assets/images/Aboutus_/whyMPC.webp";
const yAxisAnimation = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    delay: 0.8,
    y: { type: "spring", stiffness: 60 }, // Animating on the Y-axis
    opacity: { duration: 0.2 },
    ease: "easeIn",
    duration: 1,
  },
};
const MPC = () => {
  const styles = {
    borderTop: "1px solid",
    backgroundImage:
      "linear-gradient(283.4deg, #5BD6DD 23.54%, #036DED 70.28%)",
    backgroundClip: "border-box",
    backgroundOrigin: "border-box",
    border: "1px, 0px, 0px, 0px",
  };
  return (
    <div>
      <motion.div
        {...yAxisAnimation}
        className="my-6 flex items-center flex-col"
      >
        <h2 className="md:text-5xl text-3xl font-medium bg-gradient-to-r from-[#036DED]  to-[#5BD6DD] bg-clip-text text-transparent">
          Why MPC
        </h2>
        <div className="h-1 w-[115px]" style={styles}></div>
      </motion.div>
      <div className="bg-[#DDF0DA] md:my-[80px] my-3">
        <div className="max-w-7xl w-[90%] mx-auto flex flex-col lg:flex-row items-center">
          <div className="md:w-[60%] w-full">
            <img src={MYC} alt="" />
          </div>
          <div className="lg:w-[40%] w-full lg:my-12 my-6 lg:ml-12 ml-0">
            <h2 className="lg:text-4xl md:text-2xl text-xl text-[#000000] font-semibold md:leading-[48px] leading-normal">
              Your Journey to a Pain-free Vibrant life begins here
            </h2>
            <p className="lg:text-2xl md:text-xl text-base font-light text-[#454545] md:leading-[36px] leading-normal">
              Our tailored therapies, including Cryotherapy, Hyperbaric Oxygen
              Therapy, Hydrotherapy and Photobiomodulation Laser Therapy, are
              designed to alleviate pain, promoting a pain-free, vibrant life
              for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MPC;
