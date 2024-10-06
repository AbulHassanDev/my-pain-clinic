import React from "react";
import Btn from "../../Btn";

const Header = () => {
  return (
    <header>
      {/* top welcome header is here */}
      <div className=" h-[80vh] flex flex-col justify-center items-center trainningHeaderPage">
        <div className=" flex justify-center items-center flex-col">
          <h2 className="md:text-5xl text-3xl font-medium bg-gradient-to-r from-[#036DED]  to-[#5BD6DD] bg-clip-text text-transparent py-[2rem]">
            MPC Training
          </h2>
          <p className=" mf:w-10/12 md:w-11/12 w-[90%] text-center mf:text-[20px] md:text-[16px] text-[14px] leading-8">
            MPC training uses electrical impulses to stimulate muscle
            contractions and reduces strain on your joints and ligaments, it
            allows for targeted muscle stimulation. By adjusting the electrical
            impulses, one can focus on specific muscle groups, making it
            possible to strengthen weakened muscles without overloading the rest
            of your body. EMS training aids in improving circulation and
            reducing inflammation, better blood flow ensures muscles are
            well-supplied with the nutrients. With the qualified EMS trainer,
            one can progress at a pace that suits you and adjust the intensity
            of your workouts as your recovery progresses. This customized
            approach can help prevent re-injury and  carefully ensures your
            complete strength recovery. 
          </p>
        </div>
      </div>

      {/* what is mpc training is here */}
      <div className=" relative py-[1rem] bg-[#F7F7FC] " id="about">
        <div className=" absolute right-0 top-0">
          <img src="/home/leaves.svg" alt="" className=" mf:w-auto w-[150px]" />
        </div>

        {/*  */}
        <div className="  md:w-[80%] w-[98%] mx-auto flex md:gap-[0rem] gap-[2rem] justify-around items-center mf:flex-row flex-col-reverse">
          <div className=" mf:w-[40%] w-[98%] ">
            <img
              src="/training/trainingImage.webp"
              alt=""
              className=" w-[100%]"
            />
          </div>
          <div className=" flex items-center mf:h-[800px] h-auto mf:w-[50%]">
            <div className=" flex flex-col gap-[0.5rem]  w-[100%] md:mx-0 mx-auto justify-center md:text-[16px] text-[14px]   text-[#000]">
              <h2 className="md:text-5xl text-3xl font-medium bg-gradient-to-r from-[#036DED]  to-[#5BD6DD] bg-clip-text text-transparent py-[2rem]">
                What is MPC Training
              </h2>
              <p>
                EMy Pain Clinic (MPC) training is a 20-minute, once-per-week
                bodyweight workout. 90% to 95% of your body's muscles, including
                your deep back and pelvic floor muscles which are activated
                during EMS training. Similar to the signals that our central
                nervous system sends to the rest of our body, EMS uses a
                high-frequency electric current to stimulate muscle
                contractions. The current flows throughout your muscles and the
                contractions reach deep within their fibers.{" "}
              </p>
              <p>
                The MPC device, transmitted via a wearable device such as a
                belt, sends minute electrical pulses to the muscles to target
                all four muscle groups for an efficient workout. At The Wellness
                Co, we use Visionbody's MPC suit-cutting-edge equipment that is
                wireless and enables a significantly broader range of motion
                during training, whether it is performed indoors or outdoors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
