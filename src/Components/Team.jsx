import React from "react";
import { FaFacebook } from "react-icons/fa";

const Team = () => {
  const cardsData = [
    {
      id: 1,
      image: "/home/team1.webp",
      name: "Mike Washoski",
      title: "Therapist",
      pargraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
    {
      id: 1,
      image: "/home/team2.webp",
      name: "Mike Washoski",
      title: "Therapist",
      pargraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
    {
      id: 1,
      image: "/home/team2.webp",
      name: "Mike Washoski",
      title: "Therapist",
      pargraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
    {
      id: 1,
      image: "/home/team1.webp",
      name: "Mike Washoski",
      title: "Therapist",
      pargraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
  ];
  return (
    <div className="">
      <div className="py-[2rem]">
        <h2 className=" textGradient text-[48px] font-medium text-center ">
          Meet Our Team
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient  "></div>
      </div>
      {/* cards are here */}
      <div className="mf:h-[976px] h-auto py-[2rem] teamBg flex justify-center items-center">
        <div className=" grid mf:grid-cols-2 gap-x-[1rem] gap-y-[2.5rem]  text-[#fff]  place-content-center w-[85%] mx-auto   ">
          {cardsData.map(({ id, image, name, title, pargraph }) => {
            return (
              <div
                key={id}
                className="flex sm:flex-row flex-col gap-[0.5rem] px-[1rem] mf:w-[80%] bg-[#151515] justify-between items-end cursor-pointer transition-all ease-linear delay-150 rounded-[12px] shadow-lg group  hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-300 h-[335px] "
              >
                <div className="md:w-[50%] w-full   transition-all ease-linear delay-150 ">
                  <img
                    src={image}
                    alt=""
                    className=" w-full group-hover:scale-105 transition-all ease-linear delay-150 group-hover:mb-[1rem] "
                  />
                </div>
                <div className="md:w-[50%] w-full">
                  <h2 className=" text-[24px] font-semibold">{name}</h2>
                  <p>{title}</p>
                  <p className=" text-[#AAAAAA] group-hover:font-medium group-hover:text-[#d5d0d0] text-base lg:leading-7 leading-normal ">
                    {pargraph}
                  </p>
                  <div className="flex gap-[0.8rem] my-[1rem] items-center ">
                    <a href="#" className=" text-[#5BD6DD] text-[15px]">
                      <FaFacebook className="" />
                    </a>
                    <a href="#">
                      <img src="/home/twiter.svg" alt="" />
                    </a>
                    <a href="#">
                      <img src="/home/insta.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
