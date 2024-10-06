import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import IconsSvg from "../../assets/images/Locations/icons_svg.svg";
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
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
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
                <div className=" mf:w-[362px] w-full relative h-[375px] overflow-hidden">
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                    src={items.images}
                    alt="img"
                  />
                  <div className="absolute inset-0 flex items-end">
                    <h2 className="mx-auto mb-4 px-8 py-3 text-lg font-bold text-white  rounded-md bg-opacity-25 backdrop-blur-lg  bg-[#FFF]/30  dark:bg-opacity-30 dark:bg-gray-900 dark:shadow-lg dark:text-white">
                      {items.name}
                    </h2>
                  </div>
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
