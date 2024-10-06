import React from "react";
import BodyBenefitsImage from "../../../assets/images/Benefits_/bodyBenefits.svg";
import { motion } from "framer-motion";
const yAxisAnimation = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    delay: 0.2,
    y: { type: "spring", stiffness: 60 }, // Animating on the Y-axis
    opacity: { duration: 0.2 },
    ease: "easeIn",
    duration: 1,
  },
};
const yAxisAnimationN = {
  initial: { y: -200, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    delay: 0.2,
    y: { type: "spring", stiffness: 60 }, // Animating on the Y-axis
    opacity: { duration: 0.2 },
    ease: "easeIn",
    duration: 1,
  },
};
export const BodyBenefits = () => {
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
      <div className=" bg-[#F1F1F6]">
        <div className="flex md:flex-row flex-col max-w-7xl mx-auto">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className=""
          >
            <img src={BodyBenefitsImage} alt="img" />
          </motion.div>
          <div className="w-full">
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="lg:text-5xl md:text-3xl text-lg font-medium text-sky
                            md:py-6 py-4 lg:ml-14 ml-6 
                        "
            >
              Body Benefits
            </motion.h2>
            <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:place-items-center lg:place-items-start lg:ml-14 ml-0 sm:text-base text-sm md:mb-8">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black sm:p-4 p-2"
              >
                <span className="font-normal">Enhances </span>
                <br />
                <span className="font-light"> Gut Health</span>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black sm:p-4 p-2"
              >
                <span className="font-normal">Increases</span>
                <br />
                <span className="font-light">Testosterone production </span>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black sm:p-4 p-2"
              >
                <span className="font-normal">Restore optimum</span>
                <br />
                <span className="font-light">Vitamin levels </span>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black sm:p-4 p-2"
              >
                <span className="font-normal">Revitalizes</span>
                <br />
                <span className="font-light">Skin, Hair & Nails</span>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black sm:p-4 p-2"
              >
                <span className="font-normal">Accelerates</span>
                <br />
                <span className="font-light">Wound Healing</span>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black sm:p-4 p-2"
              >
                <span className="font-normal">Enhances</span>
                <br />
                <span className="font-light">Gut Health</span>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black sm:p-4 p-2"
              >
                <span className="font-normal">Restore optimum</span>
                <br />
                <span className="font-light">Vitamin levels</span>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.4,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black sm:p-4 p-2"
              >
                <span className="font-normal">Enhances</span>
                <br />
                <span className="font-light">Gut Health</span>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.5,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black sm:p-4 p-2"
              >
                <span className="font-normal">Restore optimum</span>
                <br />
                <span className="font-light">Vitamin levels</span>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.5,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black sm:p-4 p-2"
              >
                <span className="font-normal">Revitalizes</span>
                <br />
                <span className="font-light">Skin, Hair & Nails</span>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.5,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black sm:p-4 p-2"
              >
                <span className="font-normal">Restore optimum</span>
                <br />
                <span className="font-light">Vitamin levels</span>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="my-6 md:ml-0 ml-6"
            >
              <motion.a
                href="#"
                className={`md:py-4 py-2  md:px-8 px-4 rounded-md border-gradient text-white font-medium md:text-base text-sm text-center hover:bg-sky  lg:ml-14 ml-0`}
              >
                Consult now
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
