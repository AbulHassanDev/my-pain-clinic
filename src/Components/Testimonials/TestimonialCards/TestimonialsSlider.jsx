import { ImQuotesLeft } from "react-icons/im";

import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
export default function TestimonialSlider({ team }) {
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
              <div className="grid lg:grid-cols-1  my-12 lg:items-center text-[#000] w-[100%] mx-auto  ">
                <div className=" mf:max-w-[1170px] text-center mx-auto  w-full relative  overflow-hidden py-[2rem]">
                  <p className=" mf:w-12/12 w-full mx-auto mf:text-[24px] md:text-[20px] text-[14px]">
                    {items.paragraph1}
                  </p>
                  <br />
                  <br />
                  <p className=" mf:w-10/12 w-full mx-auto mf:text-[24px] md:text-[20px] text-[14px] ">
                    {items.para2}
                  </p>

                  <a className=" textGradient my-8 text-[30px]">{items.name}</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div
          className="absolute z-30 sm:flex hidden gap-3 top-  1/2  -right-10  bottom-1/2 justify-between -left-10 "
          style={{ textAlign: "center" }}
        >
          <div
            className="cursor-pointer prev_btn  w-[50px] h-[50px] text-[30px] border text-[#036DED] border-[#036DED]  rounded-full flex items-center justify-center hover:bg-[#036DED] hover:text-[#fff] transition-all ease-linear delay-150 "
            onClick={previous}
          >
            <FaChevronLeft />
          </div>
          <div
            className=" cursor-pointer next_btn  w-[50px] h-[50px] text-[30px] border text-[#036DED] border-[#036DED]  rounded-full flex items-center justify-center hover:bg-[#036DED] hover:text-[#fff] transition-all ease-linear delay-150 "
            onClick={next}
          >
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
