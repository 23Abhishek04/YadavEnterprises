import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo2.jpg";
import icons from "../images/icons.jpg";

const page = () => {
  return (
    <div className="bg-[#191917] w-full flex flex-col items-center h-screen text-white pt-10">
      <Image
        src={logo}
        alt="Background"
        quality={100}
        className="h-[80px] w-[300px]"
      />

      <h1 className="mt-6 font-serif text-3xl">Elegant Ceilings.</h1>
      <h1 className="font-serif text-3xl">Lasting Impressions.</h1>

      <p className="flex flex-col items-center justify-center px-10 text-[10px] mt-3">
        <a>Vistara Ceilings & Walls specializes in high-quality interior</a>
        <a>ceilings and wall applications, delivering exceptional </a>
        <a>craftsmanship and timeless design. </a>
      </p>

      <Link href="./contactus" className="">
        <button className="flex items-center justify-center gap-1  h-[30px] w-[180px] text-xs font-mono bg-[#c2a676] text-black mt-6">
          <a>GET A FREE ESTIMATE</a>
        </button>
      </Link>

      <div className="px-10 mt-16">
        
        <h1 className="font-serif text-[#f5dfa5] text-xl">ABOUT US</h1>
        <p className="text-[10px] mt-2">
          With years of experience, we are dedicated to providing outstanding
          service, superior quality, and creative solutions for homes and
          businesses.
        </p>
        
       <div className="flex items-center justify-center w-full mt-5">
       <Image
        src={icons}
        alt="Background"
        quality={100}
        className="h-[80px] w-[300px]"
      />
        
       </div>

        
      </div>
      
    </div>
  );
};

export default page;
