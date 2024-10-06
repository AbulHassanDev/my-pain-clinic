import React from "react";
import { motion, transform } from "framer-motion";
const Services = () => {
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
  const cardsData = {
    cards: [
      {
        id: 1,
        image: "/home/card1.webp",
        btnText: "Hydrotherapy",
      },
      {
        id: 1,
        image: "/home/card2.webp",
        btnText: "Hydrotherapy",
      },
      {
        id: 1,
        image: "/home/card3.webp",
        btnText: "Hydrotherapy",
      },
      {
        id: 1,
        image: "/home/card4.webp",
        btnText: "Hydrotherapy",
      },
      {
        id: 1,
        image: "/home/card5.webp",
        btnText: "Hydrotherapy",
      },
      {
        id: 1,
        image: "/home/card6.webp",
        btnText: "Hydrotherapy",
      },
    ],
  };

  return (
    <div className=" bg-[#fff] py-[2rem] " id="services">
      <motion.div {...yAxisAnimation} className="py-[2rem]">
        <h2 className=" textGradient text-[48px] font-medium text-center ">
          Our services
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient  "></div>
      </motion.div>

      {/* cards are here */}
      <div className=" grid mf:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[85%] mx-auto gap-[5rem] ">
        {cardsData.cards.map(({ id, image, btnText, listData }, idx) => {
          return (
            <div key={idx} className=" main_container group  w-[90%] mx-auto  ">
              <motion.div {...yAxisAnimation} className="">
                <img
                  src={image}
                  alt=""
                  className="  transition-all ease-linear delay-150 z-99 mx-auto  w-full relative     "
                />
              </motion.div>
              <button className=" bg-[#fff]/50 backdrop-blur-sm md:w-[70%] w-[60%] absolute z-10 bottom-4     text-[#fff] h-[60px] rounded-[11px]   transition-all ease-linear delay-150 mf:inset-x-[12%] inset-x-[1rem] flex justify-center items-center  mx-auto    ">
                <a
                  href=""
                  className=" bg-gradient-to-r from-[#036DED]  to-[#5BD6DD] bg-clip-text text-transparent mf:text-[20px] text-[14px] font-bold"
                >
                  {" "}
                  {btnText}
                </a>
                {/* mf:left-[20%] md:left-[5%] left-[12%] */}
              </button>

              <div className=" content  mx-auto mf:w-[100%] lg:rounded-[80px] rounded-[75px]  ">
                <ul className=" flex flex-col gap-[1rem]  ">
                  <li> Red Light Therapy</li>
                  <li>Hyperbaric Oxygen Therapy</li>
                  <li>Normatec Compression</li>
                  <li>Whole Body Cryotherapy</li>
                  <li>EMS Training</li>
                  <li>IV Therapy</li>
                  <li>Foot Balance</li>
                  <li>Far-Infrared Light Sauna</li>
                </ul>
              </div>

              {/* hover images are here */}
              <div className="absolute w-full bottom-[-3.5rem] inset-x-0  justify-between md:group-hover:flex hidden       ">
                <div className=" rounded-[20px] overflow-hidden   transition-all delay-150 ">
                  <img
                    src="/home/about_hover.webp"
                    alt=""
                    className=" w-[100px] z-0 "
                  />
                </div>
                <div className=" rounded-[20px] overflow-hidden   z-10">
                  <img
                    src="/home/abouthover1.webp"
                    alt=""
                    className=" w-[100px]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
