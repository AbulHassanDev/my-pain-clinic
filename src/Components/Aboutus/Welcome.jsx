import React from "react";

const Welcome = () => {
  return (
    <div className="Aboutwelcomebg h-[80vh] ">
      <div className=" max-w-7xl w-[90%] mx-auto  flex items-center h-[80vh]  ">
        <h2 className="font-medium lg:text-7xl md:text-5xl sm:text-3xl text-2xl text-[#ffffff] md:leading-[75px] leading-normal ">
          About us{" "}
          <span className="bg-gradient-to-r from-[#036DED]  to-[#5BD6DD] bg-clip-text text-transparent">
            “my <br /> pain clinic”
          </span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default Welcome;
