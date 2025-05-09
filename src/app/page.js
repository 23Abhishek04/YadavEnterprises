import HeroSection from "@/components/HeroSection";
import React from "react";
import Work from "@/components/Work";
import LastSection from "@/components/LastSection";
const page = () => {
  return (
    <main>
      <HeroSection />
      <Work/>
      <LastSection/>
    </main>
  );
};

export default page;
