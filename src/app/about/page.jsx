import React from "react";
import Link from "next/link";
import ClientSlider from "../ClientSlider";

const page = () => {
  return (
    <div className="bg-[#151307] w-full flex flex-col items-center h-screen text-white pt-10">
      <span className="flex flex-col items-center w-full h-auto px-10 font-serif text-4xl text-center">
        <h1 className="mt-6">Build on Trust.</h1>
        <h1 className="">Crafted with Precison.</h1>
      </span>

      <Link href="./contactus" className="">
        <button className="flex items-center justify-center gap-1  h-[45px] w-[230px] text-base mt-6 text-[#151307] font-mono bg-[#c2a676] rounded-md">
          <p>GET A FREE ESTIMATE</p>
        </button>
      </Link>

      <div className="flex items-center justify-center w-full px-10 mt-6 font-light text-center">
        With years of experience, we provide exceptional POP ceiling and wall solution
      </div>
      
      <ClientSlider/>
      
    </div>
  );
};

export default page;
