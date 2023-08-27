import React from "react";
import { BiSearch } from "react-icons/bi";



const NavbarMid = () => {
  return (
    <div className="flex text-[14px] items-center shadow-md gap-[10px] p-[10px] px-[20px] border rounded-full">
      <span className="font-medium  cursor-pointer" >
        Anywhere
      </span>
      <hr className="bg-gray-300 h-[25px] w-[.5px]" />
      <span className="font-medium    cursor-pointer">
        Any week
      </span>
      <hr className="bg-gray-300 h-[25px] w-[.5px]" />

      <div className="flex gap-[25px] items-center w-ful justify-center">
        <span className="font-extralight cursor-pointer ">
          Add guests
        </span>
        <div className="search p-[7px] font-bold cursor-pointer rounded-full bg-red-600 text-white">
          <BiSearch />
        </div>
      </div>
    </div>
  );
};



export default NavbarMid;
