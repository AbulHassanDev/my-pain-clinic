import React from "react";
import Btn from "./Btn";
import { motion } from "framer-motion";
const About = () => {
  const yAxisAnimation = {
    initial: { y: -100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
      delay: 0.6,
      y: { type: "spring", stiffness: 50 }, // Animating on the Y-axis
      opacity: { duration: 0.2 },
      ease: "easeIn",
      duration: 1,
    },
  };
  return (
    <div className=" relative py-[1rem] bg-[#F7F7FC] " id="about">
      <div className=" absolute right-0 top-0">
        <img src="/home/leaves.svg" alt="" className=" mf:w-auto w-[150px]" />
      </div>
      <motion.div {...yAxisAnimation} className="py-[2rem]">
        <h2 className=" textGradient text-[48px] font-medium text-center ">
          About us
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient  "></div>
      </motion.div>

      {/*  */}
      <motion.dev
        initial={{ x: 200, y: -100, opacity: 0 }} // Set initial position to center
        whileInView={{ x: 0, y: 0, opacity: 1 }} // Move to center when in view
        viewport={{ once: false }}
        transition={{
          delay: 0.2, // Increased delay for smoother scrolling
          x: { type: "spring", stiffness: 60 }, // Reduced stiffness for smoother motion
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" flex justify-center items-center mf:flex-row flex-col-reverse"
      >
        <div className=" mf:w-[50%] w-auto">
          <img src="/home/aboutimage.webp" alt="" className=" w-[100%]" />
        </div>
        <div className=" flex items-end mf:h-[800px] h-auto">
          <div className=" flex flex-col gap-[0.5rem] md:w-[550px] w-[95%] md:mx-0 mx-auto justify-end md:text-[16px] text-[14px]  text-justify">
            <p>
              Welcome to My Pain Clinic, a premier establishment under the
              esteemed
            </p>
            <p>
              banner of M/s. Global Body Fix, setting the gold standard for pain
              management
            </p>
            <p>and rehabilitation across the Asia-Pacific region.</p>
            <p>
              Nestled in the vibrant heart of Mumbai's Bandra-West, our clinic
              is more than
            </p>
            <p>
              just a healthcare facility; it's a sanctuary of advanced solutions
              and
            </p>
            <p>
              compassionate care. We seamlessly blend cutting-edge technology in
            </p>
            <p>
              Physiotherapy and Sports Rehabilitation with a commitment to your
              well-being.
            </p>
            <p>
              My Pain Clinic stands at the forefront of clinical excellence,
              offering innovative
            </p>
            <p>pain management and rehabilitation solutions.</p>
            <p>
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            <div className=" flex gap-[2rem] md:flex-row flex-col md:justify-start  justify-center items-center">
              <Btn
                text={"Learn more"}
                style={"border-gradient text-[#fff] hover:scale-105 "}
              />
              <Btn
                text={"How we work"}
                style={
                  "border_gradient  hovergradient hover:text-[#fff] hover:scale-105"
                }
              />
            </div>
          </div>
        </div>
      </motion.dev>
    </div>
  );
};

export default About;
