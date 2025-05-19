import React from "react";
import Link from "next/link";
import Image from "next/image";
import client from "./assets/clients.jpg";

const HeroSection = () => {
  return (
    <div className="bg-[#151307] w-full flex flex-col items-center h-screen text-white pt-10">
      <span className="flex flex-col items-center w-full h-auto font-serif text-4xl ">
        <h1 className="">Build on Trust.</h1>
        <h1 className="">Crafted with Precison.</h1>
      </span>

      <Link href="./contactus" className="">
        <button className="flex items-center justify-center gap-1  h-[45px] w-[230px] text-base mt-6 border-[#c2a676] border font-mono">
          <p>GET A FREE ESTIMATE</p>
        </button>
      </Link>

      <div className="flex items-center justify-center w-full px-10 mt-6 font-light text-center">
        With over 25 years in the industry, we have worked on 1000+ homes,
        providing elegant POP interiors for houses, offices, and commercial
        spaces.
      </div>
      <div className="flex flex-col items-center w-full h-auto ">
        <h1 className="font-mono text-2xl text-[#c2a676] mt-6">TRUSTED BY</h1>

        <Image
          src={client}
          alt="Background"
          quality={100}
          className="h-[110px] w-[320px] mt-3"
        />
      </div>
    </div>
  );
};

export default HeroSection;
