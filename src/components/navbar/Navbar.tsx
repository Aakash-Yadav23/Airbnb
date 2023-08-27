import React from "react";

import { BiLogoAirbnb } from "react-icons/bi";
import NavbarMid from "./NavbarMid";
import NavbarLast from "./NavbarLast";
import NavbarMobile from "./NavbarMobile";
import NavbarScroll from "./NavbarScroll";
const Navbar = () => {
  return (
    <>
    <div className=" flex justify-between z-[100] w-full bg-white   p-[15px] px-[15px] lg:px-0">
      <div className="logo   hidden md:flex gap-1 text-red-500 items-center">
        <BiLogoAirbnb size={40} />
        <span className="font-bold  text-[24px]">airbnb</span>
      </div>
      <NavbarMobile />
      <div className="hidden md:block">
        <NavbarMid />
      </div>
      <div className="hidden md:block">
        <NavbarLast />
      </div>
    </div>

    </>

  );
};

export default Navbar;
