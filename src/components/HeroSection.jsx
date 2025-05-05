import React from "react";
import Image from "next/image";
import bg from "./assets/banner.jpg";
import { HiChevronRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div className="relative inset-0 w-full h-[500px] -z-20">
      <Image
        src={bg}
        alt="Background"
        fill
        quality={100}
        priority
        className="object-cover"
      />
      
        <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col justify-center mt-20 text-white px-14">
        <h1 className="text-2xl font-extrabold">
          Best Interior Designers in Pune
        </h1>
        <h1>
          Experience the highest level of transparency in home interiors, with
          complete peace of mind.
        </h1>

        <button className="w-[300px] h-[36px] bg-[#f6911f] rounded-lg flex flex-row items-center justify-center mt-14">
          <h1 className="text-xl font-medium"> Book A Free Consultation </h1>
          <HiChevronRight className="text-3xl cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
