"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bg from "./assets/herobg.webp";

const Hero = () => {
  return (
    <div className="w-full md:h-[600px] h-1000 md:flex ">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-auto px-3 py-5 md:pr-5 md:py-20 md:pl-36 md:h-full md:w-1/2"
      >
        <h1 className="mb-2 font-serif text-xl font-semibold md:mb-5">
          WELCOME TO
        </h1>
        <h1 className="mb-3 text-5xl font-bold md:mb-5">Monica Arts</h1>
        <h1 className="mb-3 text-2xl font-medium md:mb-4">
          Your Trusted Printing Solutions Provider
        </h1>
        <p className="md:font-medium md:mb-3 ">
          In today's competitive market, your business needs a strong visual
          identity. At Monica Arts, we bring your ideas to life with
          high-quality printing solutions! From sign boards and rubber stamps to
          customized printing services, we specialize in delivering precision
          and excellence. Whether you need branding materials, personalized
          stationery, or promotional prints, we've got the expertise to make it
          happen.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="h-10 mt-4 font-bold text-white transition-colors duration-200 rounded-lg w-36 md:w-40 md:h-14 bg-primary hover:bg-opacity-40"
        >
          Contact Us
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex items-center justify-center w-full mb-10 md:pr-5 h-1/2 md:h-full md:w-1/2 md:mb-0"
      >
        <Image
          src={bg}
          alt="Background"
          style={{ objectFit: "cover" }}
          quality={100}
          priority
          className="md:h-[500px] md:w-[500px] rounded-2xl h-[300px] w-[380px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
