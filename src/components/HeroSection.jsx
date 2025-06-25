import React from "react";
import Link from "next/link";
import Image from "next/image";

import i1 from "./assets/i1.png";
import i2 from "./assets/i2.png";
import i3 from "./assets/i3.png";
import i4 from "./assets/i4.png";


const HeroSection = () => {
  

  return (
    <div className="bg-[#0E0D0A] w-full flex flex-col items-center h-screen text-white pt-10">
      <span className="flex flex-col items-center w-full h-auto font-serif text-3xl ">
        <h1 className="">POP, That</h1>
        <h1 className="">Pops With Perfection!</h1>
      </span>

      <Link href="./estimate" className="">
        <button className="flex items-center justify-center gap-1  h-[45px] w-[200px] text-sm mt-3 border-[#DDA325] border rounded-lg  font-serif">
          <p>GET A FREE ESTIMATE</p>
        </button>
      </Link>

      <Link href="./about" className="">
        <button className="flex items-center justify-center gap-1  h-[25px] w-[100px] text-base mt-6 bg-[#DDA325]  rounded-lg  text-[#0E0D0A] font-medium ">
          <p>About Us</p>
        </button>
      </Link>

      <div className="flex items-center justify-center w-full px-10 mt-6 text-sm font-light text-center">
        With over 20+ years of expertise, Yadav Enterprises has proudly
        transformed more than 2,000+ propertys With high-quality false ceiling
        solutions, we deliver craftsmanship, innovation, and trust that stand
        the test of time.
      </div>

      <Link href="service" className="">
        <button className="flex items-center justify-center h-[25px] w-[120px] text-base mt-6 bg-[#DDA325]  rounded-lg  text-[#0E0D0A] font-medium ">
          <p>Our Services</p>
        </button>
      </Link>

      <div className="flex h-[50px] w-full justify-evenly items-center  mt-10 px-10 text-[#DDA325] gap-2">
        <div className="flex flex-col items-center justify-center w-1/4 h-[50px]">
          <Image
            src={i1}
            alt="Background"
            quality={100}
            className="h-[35px] w-[35px]"
          />
          <p className="text-[10px] text-center mt-1 ">POP False Ceilings</p>
        </div>

        <div className="flex flex-col items-center justify-center w-1/4 h-[50px]">
          <Image
            src={i2}
            alt="Background"
            quality={100}
            className="h-[35px] w-[35px]"
          />
          <p className="text-[10px] text-center mt-1">Molding & Co-offices</p>
        </div>

        <div className="flex flex-col items-center justify-center w-1/4 h-[50px]">
          <Image
            src={i3}
            alt="Background"
            quality={100}
            className="h-[35px] w-[35px]"
          />
          <p className="text-[10px] text-center mt-1">Decorative Wall Panels</p>
        </div>

        <div className="flex flex-col items-center justify-center w-1/4 h-[50px]">
          <Image
            src={i4}
            alt="Background"
            quality={100}
            className="h-[35px] w-[35px]"
          />
          <p className="text-[10px] text-center mt-1">
            Renovation Work & Custom Work
          </p>
        </div>
      </div>

      <Link href="gallery" className="">
        <button className="flex items-center justify-center h-[25px] w-[120px] text-base mt-6 bg-[#DDA325]  rounded-lg  text-[#0E0D0A] font-serif">
          <p>Gallery</p>
        </button>
      </Link>   
      
      
        
    </div>
  );
};

export default HeroSection;
