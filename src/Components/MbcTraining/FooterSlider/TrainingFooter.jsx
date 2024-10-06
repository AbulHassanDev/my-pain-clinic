import React from "react";
import SlickSlider from "./SlickSlider";

const TrainingFooter = () => {
  const team = [
    {
      id: 1,
      images: "",
      name: "Mumbai",
    },
    {
      id: 2,
      images: "",
      name: "Royal club, Delhi",
    },
    {
      id: 3,
      images: "",
      name: "Royal club, Kolkata",
    },
  ];
  return (
    <div className="bg-[#F7F7FC] py-[2rem]">
      <div className=" mf:max-w-[1200px] mx-auto ">
        <SlickSlider team={team} />
      </div>
    </div>
  );
};

export default TrainingFooter;
