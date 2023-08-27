'use client'
import React, { useState } from "react";

import Button from "../inputs/Button";
import { BiGlobe } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
// import { BiGlobe } from 'react-icons/bi'
// import { BiGlobe } from 'react-icons/bi'
// import { BiGlobe } from 'react-icons/bi'

const NavbarLast = () => {
  const [openAccount,setOpenAccount]=useState(false);

  const handleAccount=()=>{
    setOpenAccount(!openAccount)
  }
  return (
    <div className="flex gap-[px]  items-center">
      <div className="button">
        <Button placeholder="Airbnb your home" medium secondary />
      </div>
      <Button secondary icon={<BiGlobe size={20} />} />
      <div className="border cursor-pointer hover:shadow-md flex items-center gap-[8px] text-gray-500 p-[7px] rounded-full ">
        <HiMenu size={20} onClick={handleAccount}/>
        <FaUserCircle size={26} />

        <div className={`fixed right-[75px] bg-white top-[83px] ${openAccount ? 'block':"hidden"}`}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="w-[250px] text-black rounded-[20px] shadow-lg pt-[10px] flex flex-col gap-[1px]  border h-[185px]">
      <span className="p-[7px] px-[10px] hover:bg-gray-200">Sign up</span>
      <span className="p-[7px] px-[10px] hover:bg-gray-200">Log in</span>
      <hr />
    
      <span className="mt-[4px] p-[7px] px-[10px]  hover:bg-gray-200">Airbnb your home</span>
      <span className="p-[7px] px-[10px] mb-[5px] hover:bg-gray-200">Help centre</span>

    </div>
  );
};

export default NavbarLast;
