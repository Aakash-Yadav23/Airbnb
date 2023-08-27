import React from "react";
import { BiSearch } from "react-icons/bi";

import { IoMdSwitch } from "react-icons/io";

const NavbarMobile = () => {
  return (
    <div className="md:hidden shadow-lg flex cursor-pointer w-full h-[50px] justify-between rounded-full border items-center px-[20px]">
      <div className="flex gap-[25px] items-center">
        <BiSearch size={23} />
        <div className="flex text-[14px] flex-col">
          <span>Anywhere</span>
          <div className="gap-1 text-[11px] items-center  text-gray-500 flex">
            <span>AnyWeek</span>
            <div className="w-[2px] bg-gray-400 h-[2px] rounded-full">

            </div>
            <span>Add Guests</span>
          </div>
        </div>
      </div>
      <div className="filter border rounded-full p-[7px]">
        <IoMdSwitch  size={20}/>
      </div>
    </div>
  );
};

export default NavbarMobile;
