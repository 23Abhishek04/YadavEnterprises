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
    {
      question: "Do you provide design suggestions?",
      answer:
        "- Of course! We’re happy to offer free design suggestions based on your room layout, lighting, and your personal style. Our goal is to make your space feel just right.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "- We proudly serve [Your City/Region] and surrounding areas. If you’re nearby, feel free to get in touch — we’ll do our best to reach you.",
    },
    {
      question: "Can I get a cost estimate before finalizing?",
      answer:
        "- Yes! We offer a free, no-obligation quotation. You can even upload your design or share room dimensions to help us provide a more accurate estimate.",
    },
    {
      question: "What materials do you use?",
      answer:
        "- We only work with high-quality, trusted brands like Saint-Gobain Gypsum Boards, top-grade POP, durable metal channels, and premium fittings — so your ceilings stay strong and beautiful for years.",
    },
    {
      question: "Is the ceiling work messy or noisy?",
      answer:
        "- We know how important your home is, so we work cleanly and try to minimize noise. After finishing, our team makes sure everything is tidy and ready for you to enjoy.",
    },
    {
      question: "Do you work with architects and interior designers?",
      answer:
        "- Yes, we do! We regularly collaborate with architects, interior designers, and builders to bring out the best in every space — from small homes to big projects.",
    },
    {
      question: "Can you do only ceiling or full wall paneling too?",
      answer:
        "- We handle both! Whether you need just the ceiling or a complete wall paneling and lighting setup, we can take care of everything for a seamless finish.",
    },
  ];

  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggleDropdown = (index) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="w-full h-[1000px] bg-[#efebe9]">
      {/* Heading */}
      <div className="w-full h-auto py-8 text-center">
        <p className="text-[#6d4c41] font-serif text-2xl font-medium">
          Frequently Asked Questions
        </p>
        <p className="text-[#6d4c41] font-serif text-2xl">(FAQs)</p>
      </div>

      {/* Dropdown with Smooth Animation */}
      <div className="flex flex-col w-full h-auto gap-4 px-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full h-auto border border-[#3e2723]"
          >
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full px-5 py-3 text-left text-[#6d4c41] bg-[#efebe9]"
            >
              {faq.question}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden w-full px-5 text-[#6d4c41] bg-[#efebe9] border-t border-[#3e2723] ${
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
