import React from "react";
import Image from "next/image";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.png";

const Work = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto py-5">
      
      {/* Title Section */}
      <div className="mb-6 text-center">
        <h1 className="text-xs text-[#999999]">OUR WORK</h1>
        <h2 className="text-4xl text-[#414141] font-semibold">Latest Project</h2>
      </div>

      {/* Image Gallery Section */}
      <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative w-full h-[240px]">
          <Image
            src={img1}
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="w-full h-full"
          />
        </div>
        <div className="relative w-full h-[240px]">
          <Image
            src={img2}
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="w-full h-full"
          />
        </div>
        <div className="relative w-full h-[240px]">
          <Image
            src={img3}
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="w-full h-full"
          />
        </div>
        <div className="relative w-full h-[240px]">
          <Image
            src={img4}
            alt="Image 4"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="w-full h-full"
          />
        </div>
      </div>
      <button className="text-[#555555] h-[44px] w-[167px] border-2 text-xl font-medium mt-5">See all Project</button>
    </div>
  );
};

export default Work;
