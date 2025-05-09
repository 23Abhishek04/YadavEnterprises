"use client";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#191917] text-[#f3e9d0] px-4 py-10 w-full max-w-3xl mx-auto">
      <h2 className="text-xl text-[#f5dfa5] font-mono mb-6 text-center">REQUEST A QUOTE</h2>

      <form
        action="https://formsubmit.co/abhishekbamane23@gmail.com"
        method="POST"
        className="space-y-4"
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
          <label className="mb-1 text-sm">Full Name</label>
          <input
            type="text"
            name="Name"
            required
            placeholder="John Doe"
            className="bg-transparent border border-[#f5dfa5] text-[#f3e9d0] px-3 py-2 text-xs focus:outline-none"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="mb-1 text-sm">Email</label>
            <input
              type="email"
              name="Email"
              required
              placeholder="example@email.com"
              className="bg-transparent border border-[#f5dfa5] text-[#f3e9d0] px-3 py-2 text-xs focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm">Phone</label>
            <input
              type="tel"
              name="Phone"
              required
              placeholder="+91 9876543210"
              className="bg-transparent border border-[#f5dfa5] text-[#f3e9d0] px-3 py-2 text-xs focus:outline-none"
            />
          </div>
        </div>

        {/* Location & Type */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="mb-1 text-sm">Project Location</label>
            <input
              type="text"
              name="Location"
              placeholder="City, State"
              className="bg-transparent border border-[#f5dfa5] text-[#f3e9d0] px-3 py-2 text-xs focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm">Project Type</label>
            <select
              name="Project Type"
              className="bg-transparent border border-[#f5dfa5] text-[#f3e9d0] px-3 py-2 text-xs focus:outline-none"
            >
              <option className="bg-[#191917] text-[#f3e9d0]">Residential</option>
              <option className="bg-[#191917] text-[#f3e9d0]">Commercial</option>
              <option className="bg-[#191917] text-[#f3e9d0]">Retail</option>
              <option className="bg-[#191917] text-[#f3e9d0]">Renovation</option>
            </select>
          </div>
        </div>

        {/* Area & Budget */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="mb-1 text-sm">Area (sq. ft.)</label>
            <input
              type="number"
              name="Area"
              placeholder="e.g. 1200"
              className="bg-transparent border border-[#f5dfa5] text-[#f3e9d0] px-3 py-2 text-xs focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm">Estimated Budget</label>
            <input
              type="text"
              name="Budget"
              placeholder="₹2L – ₹10L"
              className="bg-transparent border border-[#f5dfa5] text-[#f3e9d0] px-3 py-2 text-xs focus:outline-none"
            />
          </div>
        </div>

        {/* Services Needed */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">Services Needed</label>
          <textarea
            rows="3"
            name="Services"
            placeholder="E.g. False ceiling, lighting, design plan..."
            className="bg-transparent border border-[#f5dfa5] text-[#f3e9d0] px-3 py-2 text-xs focus:outline-none"
          ></textarea>
        </div>

        {/* File Upload */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm">Upload Sketch/Plan (optional)</label>
          <input
            type="file"
            name="Attachment"
            className="bg-transparent border border-[#f5dfa5] text-xs px-3 py-1 file:bg-[#f5dfa5] file:text-[#191917] file:font-mono file:text-xs"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 w-full bg-[#f5dfa5] text-[#191917] font-mono text-xs py-2 hover:bg-[#e3c77c] transition-colors"
        >
          Get Quote
        </button>
      </form>
      
      <div className="h-[500px] w-full"></div>
    </div>
  );
};

export default page;
