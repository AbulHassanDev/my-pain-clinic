import React from "react";

const Roadmap = () => {
  return (
    <>
      <div className=" relative h-auto py-[2rem] ">
        <div className="py-[2rem]">
          <h2 className="mf:text-5xl text-3xl font-medium bg-gradient-to-r from-[#036DED]  to-[#5BD6DD] bg-clip-text text-transparent py-[1rem] text-center">
            Why MPC Training
          </h2>
          <div className=" w-[100px] h-[2px] mx-auto border-gradient  "></div>
        </div>

        {/* road map is here */}
        <div>
          <img
            src="/training/roadmap.svg"
            alt=""
            className="mx-auto mf:block hidden absolute inset-x-0 bottom-[0.5rem] "
          />
        </div>
        <div className=" flex flex-col py-[3rem] h-auto  w-[90%] mx-auto ">
          {/* card1 is here */}
          <div className="  md:max-w-[600px] w-[95%] md:mx-0 mx-auto mt-[1rem]">
            <div className="flex justify-center items-center gap-[2rem] md:flex-row flex-col">
              <div>
                <img src="/training/hex1.svg" alt="" />
              </div>
              <div className=" border-[1px] border-[#15BFFD] cursor-pointer  transition-all ease-linear delay-150 hover:scale-105  bg-[#ffff] text-[#000]   flex items-center justify-center px-[1rem] text-[14px] rounded-[15px] shadow-xl h-[196px] w-[492px]   ">
                <p>
                  According to research and clinical trials, electrical
                  stimulation enhances sport-specific skills and performance and
                  complements resistance and strength training.
                </p>
              </div>
            </div>
          </div>

          {/* card2 is here */}
          <div className="   flex justify-end items-end md:mr-[2rem] mr-0 ">
            <div className="  md:max-w-[600px] w-full md:mx-0 mx-auto mt-[1rem]">
              <div className="flex justify-center items-center gap-[2rem] md:flex-row flex-col-reverse ">
                <div className=" border-[1px] border-[#15BFFD] cursor-pointer  transition-all ease-linear delay-150 hover:scale-105  bg-[#ffff] text-[#000]   flex items-center justify-center px-[1rem] text-[14px] rounded-[15px] shadow-xl h-[196px] w-full max-w-[492px]    ">
                  <p>
                    MPC training targets 400 muscles at once and keeps your body
                    engaged for up to 72 hours after your session.
                  </p>
                </div>
                <div>
                  <img src="/training/hex2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* card 3 is here */}
          <div className="  md:max-w-[600px] w-[95%] md:mx-0 mx-auto mt-[1rem]">
            <div className="flex justify-center items-center gap-[2rem] md:flex-row flex-col">
              <div>
                <img src="/training/hex3.svg" alt="" />
              </div>
              <div className=" border-[1px] border-[#15BFFD] cursor-pointer  transition-all ease-linear delay-150 hover:scale-105  bg-[#ffff] text-[#000]   flex items-center justify-center px-[1rem] text-[14px] rounded-[15px] shadow-xl h-[196px] w-[492px]   ">
                <p>
                  If you have a busy schedule, MPC training is an excellent
                  workout solution for you. It is very time-efficient as using
                  an MPC machine for just 20 minutes will yield the same results
                  as working out in the gym for several hours.
                </p>
              </div>
            </div>
          </div>

          {/* card4 is here */}
          <div className="   flex justify-end items-end md:mr-[2rem] mr-0">
            <div className="  md:max-w-[600px] w-[95%] md:mx-0 mx-auto mt-[1rem]">
              <div className="flex justify-center items-center gap-[2rem] md:flex-row flex-col-reverse">
                <div className=" border-[1px] border-[#15BFFD] cursor-pointer  transition-all ease-linear delay-150 hover:scale-105  bg-[#ffff] text-[#000]   flex items-center justify-center px-[1rem] text-[14px] rounded-[15px] shadow-xl h-[196px] w-[492px]   ">
                  <p>
                    An MPC device helps your body enter a high metabolic state,
                    which helps tone and sculpt your entire body, including
                    those troublesome areas around your hips, thighs, and waist.
                  </p>
                </div>
                <div>
                  <img src="/training/hex4.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* card 3 is here */}
          <div className="  md:max-w-[600px] w-[95%] md:mx-0 mx-auto mt-[1rem]">
            <div className="flex justify-center items-center gap-[2rem] md:flex-row flex-col">
              <div>
                <img src="/training/hex5.svg" alt="" />
              </div>
              <div className=" border-[1px] border-[#15BFFD] cursor-pointer  transition-all ease-linear delay-150 hover:scale-105  bg-[#ffff] text-[#000]   flex items-center justify-center px-[1rem] text-[14px] rounded-[15px] shadow-xl h-[196px] w-[492px]   ">
                <p>
                  If you have a busy schedule, MPC training is an excellent
                  workout solution for you. It is very time-efficient as using
                  an MPC machine for just 20 minutes will yield the same results
                  as working out in the gym for several hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
