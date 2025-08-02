"use client";

import React from "react";
import Image from "next/image";
import c1 from "./Clients/c1.png";
import { motion } from "framer-motion";

const logos = [c1, c1, c1, c1, c1];

const page = () => {
  return (
    <div className="w-full h-auto bg-[#efebe9]">
      {/* Header */}
      <div className="w-full h-auto px-6 md:px-12 py-8 text-center border-[#DDA325] border-b">
        <h1 className="text-[#6d4c41] font-serif text-2xl mb-3 font-medium">
          Clients And Partners
        </h1>
        <p className="text-sm font-light text-[#6d4c41]">
          Over the years, we’ve had the privilege of working with some of the
          most respected names in the industry.
        </p>
        <p className="mt-2 text-sm font-light text-[#6d4c41]">
          From top builders and architects to leading developers, our work
          reflects the trust and quality we bring to every project.
        </p>
      </div>

      {/* Client LOGOS */}
      <div className="flex flex-col w-full h-auto gap-4 p-8">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <Image
              src={logo}
              alt={`Client Logo ${index + 1}`}
              quality={100}
              className="rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default page;
