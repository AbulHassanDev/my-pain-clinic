import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [showSerach, setShowSearch] = useState(false);
  const location = useLocation();
  const navLinks = [
    {
      id: 1,
      text: "About",
      linkTo: "/aboutus",
    },
    {
      id: 2,
      text: "Assesments",
      linkTo: "#",
    },
    {
      id: 3,
      text: "Services",
      linkTo: "/services",
    },
    {
      id: 4,
      text: "Treatments",
      linkTo: "#treatment",
    },
    {
      id: 5,
      text: "Blogs",
      linkTo: "#benefits",
    },
    {
      id: 6,
      text: "Testimonials",
      linkTo: "#testmonials",
    },
    {
      id: 7,
      text: "Gallery",
      linkTo: "#location",
    },
    {
      id: 8,
      text: "Contact",
      linkTo: "#contact",
    },
  ];
  return (
    <nav className=" bg-[#080808] h-[87px] flex mf:justify-around justify-between px-[1rem] items-center text-[#B1B4B6] fixed top-0 w-[100%] z-50">
      <div>
        <Link to="/">
          <img src="/logo.svg" alt="" />
        </Link>
      </div>
      <div className=" relative">
        <div
          className={`" absolute top-3 left-4 transition bg-transparent "  `}
        >
          <FaSearch className=" md:block hidden" />
          <RxCross2
            onClick={() => setShowSearch(!showSerach)}
            className={` ${!showSerach ? " hidden " : " block"}`}
          />
        </div>
        <input
          type="text"
          placeholder="Search ..."
          className={`bg-transparent border border-[#6C757D] h-[42px] md:w-[237px] w-[300px] rounded-[6px] px-[2.5rem] text-[16px] font-semibold transition md:relative  ${
            !showSerach ? " md:block hidden " : " block"
          }  `}
        />
        <div
          className="  md:hidden block transition bg-transparent text-2xl "
          onClick={() => setShowSearch(!showSerach)}
        >
          {!showSerach ? <FaSearch /> : ""}
        </div>
      </div>
      {/* desktop menu is here */}
      <div className=" mf:flex justify-center items-center gap-[1.5rem] text-[16px] font-medium transition hidden ">
        {navLinks.map(({ id, text, linkTo }, idx) => {
          return (
            <Link
              to={linkTo}
              className={` " text-[#FAFAFA] transition-all ease-out delay-150 hover:scale-105  text_gradient "`}
            >
              {text}
            </Link>
          );
        })}
      </div>

      {/* mobile menu is here */}
      <div
        className={`" mf:hidden items-center right-0   text-[16px] font-medium   absolute h-screen  bg-black text-[#fff] flex shadow-xl  flex-col gap-[2rem] w-[300px] rounded-[30px]  py-[2rem] transition-all ease-linear delay-150 z-20 " ${
          show ? " hidden " : "top-4"
        } `}
      >
        {navLinks.map(({ id, text, linkTo }, idx) => {
          return (
            <Link
              to={linkTo}
              className="text-[#FAFAFA] transition-all ease-out delay-150 hover:scale-105  text_gradient"
            >
              {text}
            </Link>
          );
        })}
        <div
          className=" text-[30px] mf:hidden block absolute left-4 top-4 "
          onClick={() => setShow(!show)}
        >
          <RxCross2 />
        </div>
      </div>

      <div>
        <button className=" flex justify-center gap-[1rem] rounded-[36px] mf:w-[200px] mf:px-[0rem] px-[0.8rem] py-[0.8rem]  items-center transition border-gradient text-[#fff] hover:scale-105">
          {" "}
          <IoCall className=" md:text-[18px] text-[16px]" />{" "}
          <span className=" text-[14px] font-bold mf:block hidden">
            +91 81694 00905
          </span>{" "}
        </button>
      </div>

      <div
        className=" text-[30px] mf:hidden block "
        onClick={() => setShow(!show)}
      >
        <HiMenuAlt2 />
      </div>
    </nav>
  );
};

export default Navbar;
