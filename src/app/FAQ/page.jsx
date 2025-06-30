"use client";
import { useState } from "react";

export default function Dropdown() {
  const faqs = [
    {
      question: "What types of false ceilings do you provide ?",
      answer:
        "- We provide a wide range of ceiling options including POP, gypsum, grid (modular), PVC, and wooden ceilings. Each design is tailored to your space and budget, ensuring it looks great and lasts long.",
    },
    {
      question: "How long does it take to complete a false ceiling project?",
      answer:
        "- It usually takes 5 to 15 days for a typical 2BHK home, depending on the size and design. We always try to stick to timelines and keep you updated every step of the way.",
    },
    {
      question: "Is there a warranty on the work?",
      answer:
        "- Yes, absolutely! We provide a 1 to 5 year workmanship warranty, depending on the type of work and materials used — so you can have complete peace of mind.",
    },
  ];

  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggleDropdown = (index) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="w-full h-[1000px] bg-[#0E0D0A]">
      {/* Heading */}
      <div className="w-full h-auto py-8 text-center">
        <p className="text-[#DDA325] font-serif text-2xl">
          Frequently Asked Questions
        </p>
        <p className="text-[#DDA325] font-serif text-2xl">(FAQs)</p>
      </div>

      {/* Dropdown with Smooth Animation */}
      <div className="flex flex-col w-full h-auto gap-4 px-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full h-auto border border-[#dda32552]"
          >
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full px-5 py-3 text-left text-white bg-[#0E0D0A]"
            >
              {faq.question}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden w-full px-5 text-white bg-[#0E0D0A] border-t border-[#dda32552] ${
                openStates[index] ? "max-h-96 py-3" : "max-h-0 py-0"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
