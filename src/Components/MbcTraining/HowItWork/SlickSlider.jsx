import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import IconsSvg from "../../../assets/images/Locations/icons_svg.svg";
import { Autoplay } from "swiper/modules";
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
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    Autoplay: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
          >
            {/* <img className="" src={IconsSvg} alt="" /> */}

            {/* <FaChevronRight /> */}
          </li>
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
              <div className="grid lg:grid-cols-1 mx-4 my-12 lg:items-center ">
                <div className=" mf:max-w-[363px] w-full relative h-[254px] overflow-hidden  shadow-xl border border-[#1FC7D4] rounded-[15px]">
                  <p className=" text-2xl text-[#000] mt-[2rem]">
                    <a
                      href="#"
                      className=" text-[24px] font-bold bg-gradient-to-r from-[#036DED]  to-[#5BD6DD] bg-clip-text text-transparent ml-[1rem] "
                    >
                      {" "}
                      0{id + 1}
                    </a>
                  </p>
                  <p className=" text-[#000] md:w-[90%] w-[92%] mx-auto my-auto py-[1rem]">
                    {items.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div
          className="absolute z-30 sm:flex hidden gap-3 top-1/2  -right-10  bottom-1/2 justify-between -left-10 "
          style={{ textAlign: "center" }}
        ></div>
      </div>
    </div>
  );
};

export default SlickSlider;
