"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import c1 from "./Clients/c1.png";

const logos = Array(10).fill([c1, c1]).flat(); // 10 rows × 2 logos

// Animation for page enter
const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Animation for logo rows
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const page = () => {
  return (
    <motion.div
      className="w-full h-auto bg-[#0E0D0A]"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* Header */}
      <div className="w-full h-auto px-6 md:px-12 py-8 text-center border-[#DDA325] border-b">
        <h1 className="text-[#DDA325] font-serif text-2xl">
          Clients And Partners
        </h1>
        <p className="text-sm font-light text-white">
          Over the years, we’ve had the privilege of working with some of the
          most respected names in the industry.
        </p>
        <p className="mt-2 text-sm font-light text-white">
          From top builders and architects to leading developers, our work
          reflects the trust and quality we bring to every project.
        </p>
      </div>

      {/* Logos Grid with Animation */}
      <div className="flex flex-col items-center justify-center w-full h-auto gap-6 py-8">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center w-full gap-6 px-5 justify-evenly"
          >
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Image
                src={logo}
                alt="Client Logo"
                quality={100}
                className="h-[45px] w-auto rounded-lg"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Image
                src={logo}
                alt="Client Logo"
                quality={100}
                className="h-[45px] w-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default page;
