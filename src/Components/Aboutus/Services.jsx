import React from "react";
import Image from "../../assets/images/Aboutus_/services.webp";
const Services = () => {
  return (
    <div className=" bg-[#F7F7FC] py-6">
      <div className="max-w-7xl w-[90%] mx-auto  flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-2/3 w-full">
          <p className="font-medium md:text-4xl text-xl md:leading-[61px] leading-normal ">
            WE AIM AT OBTAINING SUPERIOR OUTCOMES USING STATE-OF-THE-ART
            TECHNOLOGIES & RESEARCH EVIDENCE.
          </p>
        </div>
        <div className=" md:w-1/3 w-full ">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
