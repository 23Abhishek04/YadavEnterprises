"use client";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState(""); // ✅ Fix added here

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "b266b8ba-ea6f-4bc0-a63d-1be80c5bb3a3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false);

    if (res.success) {
      alert("Thank you! Your message has been sent.");
      e.target.reset();
      setSelectedType(""); // Optional: reset property selection
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="bg-[#0E0D0A] px-4 w-full max-w-3xl mx-auto pt-5 mb-2">
      <h1 className="text-[#DDA325] font-serif text-xl text-center">
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
            className="bg-transparent border-b border-[#DDA325] text-[#DDA325] text-[10px] focus:outline-none placeholder-[#746e65]"
          />
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="tel"
            name="Phone"
            required
            placeholder="Phone Number"
            className="bg-transparent border-b border-[#DDA325] text-[#DDA325] text-[10px] focus:outline-none placeholder-[#746e65]"
          />
          <input
            type="email"
            name="Email"
            required
            placeholder="Email Address"
            className="bg-transparent border-b border-[#DDA325] text-[#DDA325] text-[10px] focus:outline-none placeholder-[#746e65]"
          />
        </div>

        {/* Property Type */}
        <div className="w-full font-serif">
          <h3 className="mb-3 text-center text-[#DDA325]">Type of Property</h3>
          <div className="relative flex justify-center gap-3">
            {["Home", "Office", "Commercial", "Other"].map((type) => (
              <label
                key={type}
                className={`cursor-pointer border transition-all duration-200 text-sm w-[100px] h-[25px] text-center rounded-md flex items-center justify-center ${
                  selectedType === type
                    ? "bg-[#DDA325] text-[#191917] border-[#DDA325]"
                    : "text-[#cfc3a5] border-[#DDA325] hover:bg-[#cfc3a5]/10"
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
            className="bg-transparent border-b border-[#DDA325] text-[#DDA325] text-[10px] focus:outline-none placeholder-[#746e65]"
          />

          {/* Area */}
          <input
            type="number"
            name="Area"
            placeholder="Size (Approx. sq Ft)"
            className="bg-transparent border-b border-[#DDA325] text-[#DDA325] text-[10px] focus:outline-none placeholder-[#746e65]"
          />

          {/* Services */}
          <input
            type="text"
            name="Services"
            placeholder="Services Needed e.g. POP, Full Renovation"
            className="bg-transparent border-b border-[#DDA325] text-[#DDA325] text-[10px] focus:outline-none placeholder-[#746e65]"
          />
        </div>

        {/* Upload Note */}
        <div className="flex flex-col items-center">
          <h1 className="text-[#DDA325] font-serif text-lg">
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
            className="mt-2 text-[#DDA325] file:cursor-pointer"
          />
        </div>

        {/* Submit */}
        <div className="flex items-center justify-center w-full h-auto">
          <button
            type="submit"
            disabled={loading}
            className="w-[150px] bg-[#DDA325] text-black font-bold text-base py-2 hover:bg-[#e3c77c] transition-colors rounded-lg"
          >
            {loading ? "Submitting..." : "Submit Now"}
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center w-full h-auto">
        <a
          href="https://wa.me/919096405319"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 bg-[#DDA325] text-black font-semibold px-6 py-2 rounded-md hover:bg-[#c79720] transition duration-300"
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
}
