"use client";
import React from "react";

import { useState } from "react";
import Form from "./Form";
import CostEstimator from "./CostEstimator";


const page = () => {
  const [sqft, setSqft] = useState("");
  const ratePerSqft = 75;
  const estimatedPrice = Number(sqft) * ratePerSqft;
  const [selectedType, setSelectedType] = useState("");

  const propertyTypes = ["Home", "Office", "Commercial"];

  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    "POP false ceilings",
    "Wall paneling",
    "Lighting integration",
    "Custom design",
  ];

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  return (
    <div className="bg-[#0E0D0A] flex flex-col items-center">
      <span className="flex flex-col items-center w-full h-auto mt-6 font-serif text-3xl text-white">
        <h1 className="">POP, That</h1>
        <h1 className="">Pops With Perfection!</h1>
      </span>

      <h1 className="mt-2 font-serif text-3xl font-bold text-center text-white ">
        Get a Free Estimate
      </h1>

      <div className="flex-row items-center justify-center mt-2 text-xs font-light text-center text-white">
        <h1>Tell us about your space and requirements,</h1>
        <h1>
          and let us create a personalized quotation that fits your needs
          perfectly.
        </h1>
        <h1>We’re here to help you transform your space!</h1>
      </div>

      <div className="h-[3px] w-full mt-5 px-10">
        <div className="h-[3px] w-full border-[#DDA325] border-t"></div>
      </div>

      <Form/>
      <CostEstimator/>

     
      <div className="h-[1000px] w-full"></div>

      
    </div>
  );
};

export default page;

