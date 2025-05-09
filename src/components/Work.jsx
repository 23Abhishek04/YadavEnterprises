import React from "react";
import Image from "next/image";
import banner from "./assets/banner.jpg";

const Work = () => {
  return (
    <div className="bg-[#191917] w-full h-[350px] flex flex-row text-white">
      <div className="h-[350px] w-1/2 pl-4">
      
        <div className="w-full h-1/2">
          <h1 className="font-mono text-lg text-[#f5dfa5] mb-3">ABOUT US</h1>
          <p className="text-[10px] font-light">
            We specialize in crafting elegant PQP ceilings and bespoke well
            designs for homes and businesses. Known for our trust quality, and
            timely delivery, Vistara Ceilings & Wails transforms interiors with
            exceptional craftsmanship and attention to detail.
          </p>
        </div>

        <div className="w-full h-1/2">
          <h1 className="font-mono text-lg text-[#f5dfa5] mb-3 ">
            OUR SERVICES
          </h1>
          <ul className="text-[10px] list-disc list-inside ">
            <li className="mb-1">POP False Ceilings Design</li>
            <li className="mb-1">Wail Moulding & Paneling</li>
            <li className="mb-1">Decorative Cornices</li>
            <li className="mb-1">Lighting Integration In Ceilings</li>
            <li>Renovation & Custom Work</li>
          </ul>
        </div>
        
      </div>

      <div className="h-[350px] w-1/2 flex flex-col items-center pr-3">
        <h1 className="font-[CarroisGothicSC-Regular] text-xl text-[#8f774d] mb-4 ">
          PROJECT GALLERY
        </h1>

        <Image
          src={banner}
          alt="Background"
          quality={100}
          className="h-[250px] w-[150px] ml-2"
        />
      </div>
    </div>
  );
};

export default Work;
