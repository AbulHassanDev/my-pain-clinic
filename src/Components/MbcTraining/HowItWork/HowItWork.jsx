import React from "react";
import SlickSlider from "./SlickSlider";
import Btn from "../../Btn";

const HowItWork = () => {
  const team = [
    {
      id: 1,
      paragraph:
        "Low-intensity electrical pulses generated by the device will pass through the electrodes and into your primary muscle groups. You should feel a buzzing or tingling sensation. Every program can be tailored to your needs.",
      name: "Mumbai",
    },
    {
      id: 2,
      paragraph:
        "You will change into a set of undergarments made especially for our suits that will fit underneath them and conduct electricity before each training session.",
      name: "Royal club, Delhi",
    },
    {
      id: 3,
      paragraph:
        "Once your training session starts, you will be guided through a series of exercises and motions based on your comfort level and fitness objectives",
      name: "Royal club, Kolkata",
    },
    {
      id: 4,
      paragraph:
        "Lastly, the trainer will help you take off the MPC training suit. The whole procedure will last around 30 to 35 minutes.",
      name: "Royal club, Delhi",
    },
    {
      id: 5,
      paragraph:
        "The trainer will also get you secured into the suit and wet down the electrodes on it.",
      name: "Royal club, Kolkata",
    },
  ];
  return (
    <>
      <div className=" mf:w-[90%] mx-auto">
        <SlickSlider team={team} />
      </div>
      <div className=" bg-gradient-to-tr from-[#E7E7F4] to-[#FEFEFE] flex justify-around py-[2rem] mf:flex-row  flex-col  mx-auto">
        <div className=" mf:w-[40%] w-[98%]">
          <img
            src="/training/mpcTraining.webp"
            alt=""
            className=" w-[100%] rounded-[26px]"
          />
        </div>
        <div className=" text-[#000] flex-[0.6] ">
          <div className="py-[2rem]">
            <h2 className=" textGradient text-[48px] font-medium  ">
              MPC Training
            </h2>
          </div>
          <p className=" mf:text-[20px] md:text-[16px] text-[14px] ">
            Patented and FDA Cleared Electrical Muscle Stimulation is the future
            of exercising. Combining normal exercise with the modern technology
            of electrodes attached to the body opens up a whole new world of
            productivity and body optimization. The benefits of EMS have become
            so scientifically proven and well-received that even professional
            athletes seek out EMS training to stay in peak physical condition.
            Not just this, EMS workouts are relatively new, but it’s a technique
            that’s already been used by physical therapists for years. The EMS
            machines are even used to increase blood flow to an area and help
            reduce muscle damage to an
          </p>
          <Btn text={"Book Now"} style={"border-gradient text-[#fff]  "} />
        </div>
      </div>
    </>
  );
};

export default HowItWork;
