import { ImQuotesLeft } from "react-icons/im";

import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const SlickSlider = ({ team }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="">
        <ul className="flex justify-center items-center ">
          {dots}
          <li
            className="relative cursor-pointer text-white flex items-center justify-center custom-slick"
            onClick={next}
          ></li>
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-[10px] h-[10px] rounded-full bg-gradient-to-r from-[#036DED] to-[#5BD6DD] transition-all duration-300"></div>
    ),
  };
  return (
    <div className="slider-container">
      <div className="relative my-12  ">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {team.map((items, id) => (
            <div key={id}>
              <div className="grid lg:grid-cols-1  my-12 lg:items-center text-[#000] w-[90%] mx-auto ">
                <div className=" mf:max-w-[1170px] text-center mx-auto  w-full relative  overflow-hidden py-[2rem]">
                  <div className="  ">
                    <img
                      className=" mx-auto"
                      src={"/training/avator.svg"}
                      alt="img"
                    />
                  </div>
                  <p className="py-[1.2rem] text-[30px] text-[#036DED] ">
                    <ImQuotesLeft className=" mx-auto " />
                  </p>
                  <p className=" mf:w-10/12 w-full mx-auto">
                    Excepturi praesentium beatae ut nemo commodi. Nemo omnis
                    repudiandae culpa quaerat soluta dolorem aspernatur et.
                    Repellendus sint reprehenderit dignissimos consequatur
                    maiores. Excepturi praesentium beatae ut nemo commodi. Nemo
                    omnis repudiandae culpa quaerat soluta dolorem aspernatur
                    et. Repellendus sint reprehenderit dignissimos consequatur
                    maiores.
                  </p>
                  <div className=" max-w-[300px] h-[1px] bg-[#808080] mx-auto my-[2rem]"></div>
                  <p className=" text-[#454545]/60 mx-auto text-center text-[20px] font-medium">
                    Lead Intranet Specialist
                  </p>
                  <p className=" text-[#036DED] mf:text-[30px] md:text-[14px] text-[16px] font-bold">
                    Devin Bartoletti
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div
          className="absolute z-30 sm:flex hidden gap-3 top-1/2  -right-10  bottom-1/2 justify-between -left-10 "
          style={{ textAlign: "center" }}
        >
          <div
            className="cursor-pointer prev_btn text-white w-8 h-8 bg-gradient-to-r from-[#036DED] to-[#5BD6DD] rounded-full flex items-center justify-center"
            onClick={previous}
          >
            <FaChevronLeft />
          </div>
          <div
            className=" cursor-pointer next_btn text-white w-8 h-8 bg-gradient-to-r from-[#036DED] to-[#5BD6DD] rounded-full flex items-center justify-center "
            onClick={next}
          >
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlickSlider;
