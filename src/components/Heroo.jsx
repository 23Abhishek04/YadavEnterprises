"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bg from "./assets/herobgg.jpg";

const Heroo = () => {
  return (
    <div className="w-full md:h-[600px] h-1000 md:flex ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex items-center justify-center w-full md:pr-5 h-1/2 md:h-full md:w-1/2"
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

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-auto px-3 py-5 md:py-20 md:pr-36 md:h-full md:w-1/2"
      >
        <h1 className="mb-3 text-3xl font-semibold md:text-4xl md:mb-5">
          Monica Arts
        </h1>
        <h1 className="mb-3 text-4xl font-bold md:font-bold md:mb-4">
          Your One-Stop Printing Solution
        </h1>
        <p className="md:font-medium md:mb-3 ">
          At Monica Arts, we don't just print—we bring your vision to life with
          precision and creativity. Our team of experts ensures every product
          meets the highest standards, tailored to your business needs. Whether
          it's custom signboards, rubber stamps, branding materials, or
          high-quality printing services, we have the expertise to deliver
          results that make an impact. From small businesses to large
          enterprises, we provide reliable and professional printing solutions
          to help your brand stand out.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="h-10 mt-4 font-bold text-white transition-colors duration-200 rounded-lg w-36 md:w-40 md:h-14 bg-primary hover:bg-opacity-40"
        >
          Read More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Heroo;
