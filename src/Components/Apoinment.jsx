import React from "react";
import { motion } from "framer-motion";
import Btn from "./Btn";
const yAxisAnimation = {
  initial: { y: -200, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    delay: 0.8,
    y: { type: "spring", stiffness: 40 }, // Animating on the Y-axis
    opacity: { duration: 0.2 },
    ease: "easeIn",
    duration: 1,
  },
};
const Input = ({ label, type, style }) => {
  return (
    <div
      className=" flex flex-col gap-[0.5rem] w-[98%] mx-auto "
      id="treatment"
    >
      <label
        htmlFor=""
        className="mf:text-[35px] md:text-[24px] text-[16px] w-[95%]"
      >
        {label}
      </label>
      <input
        type={type}
        className={` border-b-2 bg-transparent  font-semibold outline-none mf:w-[450px] md:w-[350px] w-[95%] transition-all ease-linear delay-150 focus:bg-[#000]/10 py-[0.5rem] focus:border px-4 ${style}`}
      />
    </div>
  );
};

const Apoinment = () => {
  return (
    <div className=" py-[2rem]">
      <motion.div {...yAxisAnimation} className="py-[4rem]">
        <h2 className=" textGradient text-[48px] font-medium text-center  ">
          Book Appoinment
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient  "></div>
      </motion.div>
      {/* form is here */}
      <div className=" h-[1000px] flex flex-col justify-center apointment text-[#fff] mf:px-[8rem] md:px-[3rem] px-[1rem]">
        <motion.h2
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
          className="mf:text-[72px] md:text-[text-[50px] text-[30px] font-bold   "
        >
          Book Appointment
        </motion.h2>
        <motion.p
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
          className=" font-[Allura] mf:text-[80px] md:text-[50px] text-[30px]"
        >
          Now
        </motion.p>
        <div className=" grid md:grid-cols-2 grid-cols-1   gap-[2rem]  mf:w-[85%] w-[100%]  ">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className=" "
          >
            <Input label={"Your Name"} type={"text"} />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className=" "
          >
            <Input label={"Email Address"} type={"email"} />
          </motion.div>
          <motion.div
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
            className=" "
          >
            <Input label={"Select Service"} type={"catogry"} />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className=" "
          >
            <Input label={"Date"} type={"date"} />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            delay: 0.5,
            x: { type: "spring", stiffness: 50 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" mf:w-[75%] w-[100%]  my-[2rem] "
        >
          <label
            htmlFor=""
            className="mf:text-[35px] md:text-[24px] text-[16px] w-[95%]"
          >
            Write your message
          </label>
          <textarea
            name=""
            id=""
            className=" bg-transparent border-b-2 w-full outline-none"
          ></textarea>

          <div>
            <Btn
              text={"Submit now"}
              style={"border-gradient text-[#fff] hover:scale-105"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Apoinment;
