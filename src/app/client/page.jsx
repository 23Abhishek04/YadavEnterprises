import React from "react";
import Image from "next/image";

import c1 from "./Clients/c1.png";

const page = () => {
  return (
    <div className="w-full h-auto bg-[#0E0D0A] ">
      <div className="w-full h-auto px-12 py-8 text-center border-[#DDA325] border-b">
        <h1 className="text-[#DDA325] font-serif text-2xl ">
          Clients And Partners
        </h1>
        <p className="text-sm font-light text-white">
          Over the years, we’ve had the privilege of working with some of the
          most respected names in the industry.
        </p>
        <p className="mt-2 text-sm font-light text-white">
          From top builders and architects to leading developers, Our work
          reflects the trust and quality we bring to every project.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-auto gap-6 py-5">
        <span className="flex items-center w-full h-auto gap-6 px-5 justify-evenly">
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
        </span>
        
        <span className="flex items-center w-full h-auto gap-6 px-5 justify-evenly">
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
        </span>
        
        <span className="flex items-center w-full h-auto gap-6 px-5 justify-evenly">
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
        </span>
        
        <span className="flex items-center w-full h-auto gap-6 px-5 justify-evenly">
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
        </span>
        
        <span className="flex items-center w-full h-auto gap-6 px-5 justify-evenly">
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
        </span>
        
        <span className="flex items-center w-full h-auto gap-6 px-5 justify-evenly">
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
        </span>
        
        <span className="flex items-center w-full h-auto gap-6 px-5 justify-evenly">
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
        </span>
        
        <span className="flex items-center w-full h-auto gap-6 px-5 justify-evenly">
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
        </span>
        
        <span className="flex items-center w-full h-auto gap-6 px-5 justify-evenly">
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
        </span>
        
        <span className="flex items-center w-full h-auto gap-6 px-5 justify-evenly">
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
          <Image
            src={c1}
            alt="Background"
            quality={100}
            className="h-[45px] w-auto rounded-lg"
          />
        </span>
        
        
      </div>
    </div>
  );
};

export default page;
