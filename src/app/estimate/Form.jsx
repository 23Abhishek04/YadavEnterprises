"use client";
import { useState } from "react";

export default function Form() {
  const [sqft, setSqft] = useState("");
  const ratePerSqft = 75;
  const estimatedPrice = Number(sqft) * ratePerSqft;
  const [selectedType, setSelectedType] = useState("");
  const propertyTypes = ["Home", "Office", "Commercial", "Other"];
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
    <div className="bg-[#0E0D0A]  px-4 w-full max-w-3xl mx-auto pt-5">
      <h1 className="text-[#DDA325] font-serif text-xl text-center">
        Talk to Our Team
      </h1>

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
            placeholder="Full Name"
            className="bg-transparent border-b border-[#DDA325] text-[#DDA325] text-[10px] focus:outline-none placeholder-[#746e65]"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <input
              type="tel"
              name="Phone"
              required
              placeholder="Phone Number"
              className="bg-transparent border-b border-[#DDA325] text-[#DDA325] text-[10px] focus:outline-none placeholder-[#746e65]"
            />
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              name="Email"
              required
              placeholder="Email Address"
              className="bg-transparent border-b border-[#DDA325] text-[#DDA325] text-[10px] focus:outline-none placeholder-[#746e65]"
            />
          </div>
        </div>

        {/* Type of Property*/}

        <div className="w-full font-serif">
          <h3 className="mb-3 text-center text-[#DDA325]">Type of Property</h3>

          {/* First row: Home, Office, Commercial */}
          <div className="relative flex justify-center gap-3">
            {/* Home */}
            <label
              className={`cursor-pointer border transition-all duration-200 text-sm w-[100px] h-[25px] text-center rounded-md flex items-center justify-center
        ${
          selectedType === "Home"
            ? "bg-[#DDA325] text-[#191917] border-[#DDA325]"
            : "text-[#cfc3a5] border-[#DDA325] hover:bg-[#cfc3a5]/10"
        }`}
            >
              <input
                type="radio"
                name="propertyType"
                value="Home"
                className="hidden"
                checked={selectedType === "Home"}
                onChange={() => setSelectedType("Home")}
              />
              Home
            </label>

            {/* Office + Other vertically aligned */}
            <div className="flex flex-col items-center gap-2">
              {/* Office */}
              <label
                className={`cursor-pointer border transition-all duration-200 text-sm w-[100px] h-[25px] text-center rounded-md flex items-center justify-center
          ${
            selectedType === "Office"
              ? "bg-[#DDA325] text-[#191917] border-[#DDA325]"
              : "text-[#cfc3a5] border-[#DDA325] hover:bg-[#cfc3a5]/10"
          }`}
              >
                <input
                  type="radio"
                  name="propertyType"
                  value="Office"
                  className="hidden"
                  checked={selectedType === "Office"}
                  onChange={() => setSelectedType("Office")}
                />
                Office
              </label>

              {/* Other */}
              <label
                className={`cursor-pointer border transition-all duration-200 text-sm w-[100px] h-[25px] text-center rounded-md flex items-center justify-center
          ${
            selectedType === "Other"
              ? "bg-[#DDA325] text-[#191917] border-[#DDA325]"
              : "text-[#cfc3a5] border-[#DDA325] hover:bg-[#cfc3a5]/10"
          }`}
              >
                <input
                  type="radio"
                  name="propertyType"
                  value="Other"
                  className="hidden"
                  checked={selectedType === "Other"}
                  onChange={() => setSelectedType("Other")}
                />
                Other
              </label>
            </div>

            {/* Commercial */}
            <label
              className={`cursor-pointer border transition-all duration-200 text-sm w-[100px] h-[25px] text-center rounded-md flex items-center justify-center
        ${
          selectedType === "Commercial"
            ? "bg-[#DDA325] text-[#191917] border-[#DDA325]"
            : "text-[#cfc3a5] border-[#DDA325] hover:bg-[#cfc3a5]/10"
        }`}
            >
              <input
                type="radio"
                name="propertyType"
                value="Commercial"
                className="hidden"
                checked={selectedType === "Commercial"}
                onChange={() => setSelectedType("Commercial")}
              />
              Commercial
            </label>
          </div>
        </div>

        {/* Location & Type */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <input
              type="text"
              name="Location"
              placeholder="Location/City"
              className="bg-transparent border-b border-[#DDA325] text-[#DDA325] text-[10px] focus:outline-none placeholder-[#746e65]"
            />
          </div>
        </div>

        {/* Area & Budget */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <input
              type="number"
              name="Area"
              placeholder="Size (Approx.sq Ft)"
              className="bg-transparent border-b border-[#DDA325] text-[#DDA325] text-[10px] focus:outline-none placeholder-[#746e65]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <input
              type="number"
              name="Area"
              placeholder="Services Needed : - e.g, Wall Mounting, Ceiling POP, Full Renovation"
              className="bg-transparent border-b border-[#DDA325] text-[#DDA325] text-[10px] focus:outline-none placeholder-[#746e65]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-auto">
          <h1 className="text-[#DDA325] font-serif text-lg">
            Upload Your Home Layout Or Design
          </h1>
          <a className="text-[#746e65] ">Optional</a>
          <button className="bg-[#DDA325] text-white font-serif h-[25px] w-[120px] rounded-lg flex items-center justify-center mt-2">
            Upload
          </button>
          <p className="text-[#746e65] text-[10px] text-center mt-1">
            Upload your design file (if available) to help us create a more
            precise quotation.
          </p><button
          type="submit"
          className="mt-4 w-[150px] bg-[#DDA325] text-white font-semibold text-base py-2 hover:bg-[#e3c77c] transition-colors rounded-lg "
        >
          Submit
        </button>
        </div>
        
      </form>
      
      <div>asdas</div>
    </div>
  );
}
