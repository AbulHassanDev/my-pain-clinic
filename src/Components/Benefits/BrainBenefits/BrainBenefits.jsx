import React from "react";

import BrainBenefitsImage from "../../../assets/images/Benefits_/brainBenefits.svg";
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
const BrainBenefits = () => {
  return (
    <div>
      <div className=" bg-[#E4E4F1]">
        <div className="flex md:flex-row flex-col max-w-7xl mx-auto">
          <motion.dev
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="w-auto h-auto"
          >
            <img src={BrainBenefitsImage} alt="img" />
          </motion.dev>
          <div className="w-full ">
            <motion.h2
              initial={{ x: 200, opacity: 0 }}
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
              Brain function Benefits
            </motion.h2>
            <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:place-items-center lg:place-items-start lg:ml-14 ml-0 sm:text-base text-sm">
              <motion.dev
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
                className="text-black p-2"
              >
                <span className="font-normal">Cures</span>
                <br />
                <span className="font-light">
                  {" "}
                  Migraine and Tension Headaches{" "}
                </span>
              </motion.dev>
              <motion.dev
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
                className="text-black p-2"
              >
                <span className="font-normal">Fights</span>
                <br />
                <span className="font-light">Psychological Problems</span>
              </motion.dev>
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
                className="text-black p-2"
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
                  delay: 0.4,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black p-2"
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
                  delay: 0.4,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black p-2"
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
                  delay: 0.4,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black p-2"
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
                className="text-black p-2"
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
                className="text-black p-2"
              >
                <span className="font-normal">Enhances</span>
                <br />
                <span className="font-light">Gut Health</span>
              </motion.div>
              <motion.dev
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
                className="text-black p-2"
              >
                <span className="font-normal">Restore optimum</span>
                <br />
                <span className="font-light">Vitamin levels</span>
              </motion.dev>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.6,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black p-2"
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
                  delay: 0.6,
                  x: { type: "spring", stiffness: 50 },
                  opacity: { duration: 0.2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-black p-2"
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
              className="lg:mt-6 my-6 md:ml-0 ml-6"
            >
              <motion.a
                href="#"
                className="md:py-4 py-2 md:px-8 px-4 rounded-md border-gradient text-white font-medium md:text-base text-sm text-center hover:bg-sky  lg:ml-14 ml-0"
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

export default BrainBenefits;
