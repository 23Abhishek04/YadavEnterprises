import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/logo.jpg";


const Navbar = () => {
  return (
    <div className="h-[80px] w-full bg-[#191917] text-[#f5dfa5] flex items-center ">
      <div className="h-[80px] w-2/5 flex items-center justify-center">
      <Link href="/" className=""><Image
          src={logo}
          alt="Background"
          quality={100}
          className="h-[40px] w-[150px]"
        /></Link>
      </div>

      <div className="h-[80px] w-3/5 flex items-center justify-evenly text-[8px] font-mono">
        <Link href="./about" className="">
          ABOUT
        </Link>

        <a>SERVICES</a>

        <a>PROJECTS</a>

        <Link href="./contactus" className=""><button className="flex items-center justify-center gap-1 border-[#f5dfa5] border h-[25px] w-[75px]">
          <a>CONTACT</a>
          <a>US</a>
        </button></Link>
      </div>
    </div>
  );
};

export default Navbar;
