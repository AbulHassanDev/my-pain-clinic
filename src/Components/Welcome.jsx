import { IoPlay } from "react-icons/io5";
import { motion } from "framer-motion";

const Welcome = () => {
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

  return (
    <div className="w-full md:h-screen h-auto welcomebg text-[#fff] bg-[#F7F7FC] relative ">
      <div className="flex justify-center items-center gap-[3rem] md:h-screen h-auto py-[8rem] md:w-[80%] w-[90%] md:mx-0 mx-auto">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <h2 className="mf:text-[48px] text-[22px] font-medium md:leading-[56px] md:w-9/12">
            A vision for your well being
          </h2>
          <p className=" mf:text-[20px] text-[14px] text-[#DEE3E4] md:my-2 my-1 md:w-10/12 w-11/12">
            Clinical excellence, pain Management and sports medicine
            rehabilitation
          </p>
          <div className=" flex items-center gap-[2rem]">
            <button className=" w-[200px] h-[53px] flex justify-center items-center text-[#fff] text-[16px]  rounded-[6px] transition-all ease-linear delay-150 border_gradient hovergradient md:my-[1rem] my-[0.3rem]  ">
              Consult now
            </button>
            <div className="  text-[#000] border-gradient h-[50px] w-[50px] flex  justify-center items-center rounded-full text-[30px] hover:scale-105 transition-all ease-linear delay-150 mf:hidden  cursor-pointer   ">
              <IoPlay />
            </div>
          </div>

          <div className=" flex items-center gap-[0.3rem] cursor-pointer">
            <div className="  text-[#000] border-gradient h-[30px] w-[30px] flex justify-center items-center rounded-full hover:scale-105">
              <IoPlay />
            </div>
            <a className="textGradient md:text-[16px] text-[14px] font-semibold ">
              Learn more about MPC
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="  text-[#000] border-gradient h-[160px] w-[160px]  justify-center items-center rounded-full text-[80px] mf:flex hidden cursor-pointer  "
        >
          <IoPlay />
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
