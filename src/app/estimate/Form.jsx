"use client";

import React, { useState } from "react";

const Form = () => {
  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission logic
    setTimeout(() => {
      alert("Form submitted!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-[#efebe9] px-4 w-full max-w-3xl mx-auto pt-5 mb-2">
      <h1 className="text-[#6d4d42] font-serif text-xl text-center">
        Talk to Our Team
      </h1>

      <form onSubmit={onSubmit} className="w-full px-4 space-y-4">
        {/* Name */}
        <div className="flex flex-col">
          <input
            type="text"
            name="Name"
            required
            placeholder="Full Name"
            className="bg-transparent border-b border-[#6d4d42] text-[#6d4d42] text-[10px] focus:outline-none placeholder-[#746e65]"
          />
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="tel"
            name="Phone"
            required
            placeholder="Phone Number"
            className="bg-transparent border-b border-[#6d4d42] text-[#6d4d42] text-[10px] focus:outline-none placeholder-[#746e65]"
          />
          <input
            type="email"
            name="Email"
            required
            placeholder="Email Address"
            className="bg-transparent border-b border-[#6d4d42] text-[#6d4d42] text-[10px] focus:outline-none placeholder-[#746e65]"
          />
        </div>

        {/* Property Type */}
        <div className="w-full font-serif">
          <h3 className="mb-3 text-center text-[#6d4d42]">Type of Property</h3>
          <div className="relative flex justify-center gap-3">
            {["Home", "Office", "Commercial", "Other"].map((type) => (
              <label
                key={type}
                className={`cursor-pointer border transition-all duration-200 text-sm w-[100px] h-[25px] text-center rounded-md flex items-center justify-center ${
                  selectedType === type
                    ? "bg-[#6d4d42] text-[#191917] border-[#6d4d42]"
                    : "text-[#6d4d42] border-[#6d4d42] hover:bg-[#cfc3a5]/10"
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

        {/* Location */}
        <div className="flex flex-col w-full h-auto space-y-4">
          <input
            type="text"
            name="Location"
            placeholder="Location/City"
            className="bg-transparent border-b border-[#6d4d42] text-[#6d4d42] text-[10px] focus:outline-none placeholder-[#746e65]"
          />

          {/* Area */}
          <input
            type="number"
            name="Area"
            placeholder="Size (Approx. sq Ft)"
            className="bg-transparent border-b border-[#6d4d42] text-[#6d4d42] text-[10px] focus:outline-none placeholder-[#746e65]"
          />

          {/* Services */}
          <input
            type="text"
            name="Services"
            placeholder="Services Needed e.g. POP, Full Renovation"
            className="bg-transparent border-b border-[#6d4d42] text-[#6d4d42] text-[10px] focus:outline-none placeholder-[#746e65]"
          />
        </div>

        {/* Upload Note
        <div className="flex flex-col items-center">
          <h1 className="text-[#6d4d42] font-serif text-lg">
            Upload Your Home Layout or Design
          </h1>
          <span className="text-[#746e65] text-[10px] mt-1">
            (Optional – email us directly)
          </span>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                console.log("Selected file:", file.name);
                // Add any upload or validation logic here
              }
            }}
            className="mt-2 text-[#6d4d42] file:cursor-pointer"
          />
        </div> */}

        {/* Submit */}
        <div className="flex items-center justify-center w-full h-auto">
          <button
            type="submit"
            disabled={loading}
            className="w-[150px] border-[#6d4d42] text-black font-bold text-base py-2 hover:bg-[#c7bdbc] transition-colors rounded-lg border"
          >
            {loading ? "Submitting..." : "Submit Now"}
          </button>
        </div>
      </form>

      {/* WhatsApp Button */}
      <div className="flex items-center justify-center w-full h-auto">
        <a
          href="https://wa.me/919096405319"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2  text-black font-semibold px-6 py-2 rounded-md hover:bg-[#c7bdbc] transition duration-300 border border-[#6d4d42]"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-5 h-5"
          />
          Connect on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Form;
