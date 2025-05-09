import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-[#191917] w-full  h-[200px] flex flex-col pt-5 pl-3">
      <h1 className="text-[#8f774d] font-[CarroisGothicSC-Regular] font-medium text-3xl">
        ELEGANT CEILINGS.
      </h1>
      <h1 className="text-[#8f774d] font-[CarroisGothicSC-Regular] font-medium text-3xl">
        LASTING IMPRESSIONS.
      </h1>
      <Link href="./quoteform" className=""><button className="text-[#f5dfa5] font-mono border border-[#f5dfa5] text-sm h-[40px] w-[180px] mt-5">
        GET A FREE ESTIMATE
      </button></Link>
    </div>
  );
};

export default HeroSection;
 