"use client";
import React from "react";

import { useState } from "react";

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
    <div className="bg-[#151307] text-[#f3e9d0] flex flex-col items-center">
      <h1 className="mt-6 font-serif text-4xl text-[#cfc3a5]">
        Get a Free Estimate
      </h1>

      <h1 className="px-12 mt-2 font-serif text-xl text-center text-[#cfc3a5]">
        Transforming Your Space, One Ceiing at a Time
      </h1>

      <div className="flex items-center justify-center px-12 mt-2 font-light text-center text-white">
        Tells us about uour space and needs. Our team will get back to you
        within 24 hours with a customized quote.
      </div>

      <div className="bg-[#151307] text-[#f3e9d0] px-4 pt-10 pb-5 w-full max-w-3xl mx-auto border-t border-[#bb9e6b] mt-8">
        <form
          action="https://formsubmit.co/abhishekbamane23@gmail.com"
          method="POST"
          className="w-full px-4 space-y-4 "
        >
          {/* Hidden fields for configuration */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for your quote request! We'll get in touch soon."
          />

          {/* Name */}
          <div className="flex flex-col">
            <input
              type="text"
              name="Name"
              required
              placeholder="FULL NAME"
              className="bg-transparent border-b border-[#f5dfa5] text-[#f3e9d0] py-2 text-xs focus:outline-none placeholder-[#cfc3a5]"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <input
                type="tel"
                name="Phone"
                required
                placeholder="PHONE NUMBER"
                className="bg-transparent border-b border-[#f5dfa5] text-[#f3e9d0] py-2 text-xs focus:outline-none placeholder-[#cfc3a5]"
              />
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                name="Email"
                required
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-b border-[#f5dfa5] text-[#f3e9d0] py-2 text-xs focus:outline-none placeholder-[#cfc3a5]"
              />
            </div>
          </div>

          {/* Type of Property*/}
          <div className="w-full ">
            <h3 className="text-base text-[#cfc3a5] mb-3 ">Type of Property</h3>
            <div className="flex items-center gap-3">
              {propertyTypes.map((type) => (
                <label
                  key={type}
                  className={`cursor-pointer border transition-all duration-200 text-sm font-mono px-4 py-2 w-64 text-center rounded-md
        ${
          selectedType === type
            ? "bg-[#cfc3a5] text-[#191917] border-[#cfc3a5]"
            : "text-[#cfc3a5] border-[#cfc3a5] hover:bg-[#cfc3a5]/10"
        }`}
                >
                  <input
                    type="radio"
                    name="propertyType"
                    value={type}
                    className="hidden"
                    checked={selectedType === type}
                    onChange={() => setSelectedType(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Location & Type */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <input
                type="text"
                name="Location"
                placeholder="LOCATION/CITY"
                className="bg-transparent border-b border-[#f5dfa5] text-[#f3e9d0] py-2 text-xs focus:outline-none placeholder-[#cfc3a5]"
              />
            </div>
          </div>

          {/* Area & Budget */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <input
                type="number"
                name="Area"
                placeholder="SIZE (APPROX.SQ FT)"
                className="bg-transparent border-b border-[#f5dfa5] text-[#f3e9d0] py-2 text-xs focus:outline-none placeholder-[#cfc3a5]"
              />
            </div>
          </div>

          {/* Services Needed */}

          <div className="w-full max-w-md">
            <h3 className="text-base text-[#cfc3a5] mb-3">SERVICES NEEDED</h3>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 transition duration-200 cursor-pointer border-[#f5dfa5]"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 form-checkbox text-[#cfc3a5] accent-[#151307] border border-[#f5dfa5]"
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  <span className="text-[#cfc3a5] text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-full bg-[#cfc3a5] text-[#151307] font-semibold text-base py-2 hover:bg-[#e3c77c] transition-colors rounded-lg"
          >
            GET MY ESTIMATE
          </button>
        </form>
      </div>

      <div className=" bg-[#151307]  w-full h-[300px] flex flex-col text-black  px-8 border-t border-[#bb9e6b] py-3">
        <h2 className="mb-4 text-xl font-semibold  text-[#f5dfa5]">
          Get Your Quote.
        </h2>

        <label className="block mb-2 text-[#f5dfa5]">Enter Area (sqft):</label>
        <input
          type="number"
          value={sqft}
          onChange={(e) => setSqft(e.target.value)}
          placeholder="e.g, 1000"
          className="p-2 mb-4 border-b w-[200px]  bg-transparent placeholder-[#f5dfa5] text-[#f5dfa5]"
        />
        <div className="text-lg font-medium text-[#f5dfa5]">
          Estimated Price:{" "}
          <span className="font-bold text-[#f5dfa5] border-b-2 border-[#f5dfa5]">
            ₹{estimatedPrice || 0}
          </span>
        </div>
        <p className="text-[#f5dfa5] text-[10px] mt-2">
          * Note. This is a lump sum amount and may vary.
        </p>
      </div>

      <div className="h-[500px] w-full bg-[#151307]"></div>
    </div>
  );
};

export default page;
