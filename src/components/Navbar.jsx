import React from "react";
import Image from "next/image";
import logo from "./assets/logo.png";
import { FaPhone } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaAndroid, FaApple } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="w-full h-auto">
      <div className="border-2 h-[45px] bg-[#186070] flex items-center justify-evenly">
        <h1 className="flex items-center gap-2 text-white">
          <FaPhone className="font-medium" />
          <a className="font-medium ">020-71177198</a>
        </h1>

        <button className="flex items-center w-28 h-6 text-white bg-[#dc3545] rounded-md justify-center gap-1">
          <FaShoppingCart className="text-sm" />
          <a className="text-xs font-medium">BUY PRODUCTS</a>
        </button>

        <button className="flex items-center justify-center ml-20 text-white bg-orange-500 rounded-full h-7 w-7">
          <FaAndroid className="text-xl cursor-pointer" />
        </button>

        <button className="flex items-center justify-center text-white bg-green-500 rounded-full h-7 w-7">
          <FaApple className="text-xl cursor-pointer" />
        </button>
      </div>

      <div className="w-full h-[65px] flex items-center px-5 justify-between relative">
  {/* Left: Logo */}
  <Image
    src={logo}
    alt="Background"
    quality={100}
    className="w-[120px] h-[50px]"
  />

  {/* Center: Appointment button */}
  <div className="absolute ml-8 transform -translate-x-1/2 left-1/2">
    <button className="h-[40px] w-[120px] bg-[#dc3545] text-white font-bold text-sm rounded-md animate-popPulse">
      APPOINTMENT
    </button>
  </div>

  {/* Right: Menu button */}
  <button className="h-[40px] w-[40px] border-2 flex items-center justify-center">
    <HiOutlineMenu className="text-3xl cursor-pointer" />
  </button>
</div>

    </div>
  );
};

export default Navbar;
