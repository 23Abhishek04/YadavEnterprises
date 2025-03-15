"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import bg2 from "./assets/bg2.jpeg";
import bground from "./assets/bgimage.jpg";
const Facts = () => {
  return (
    <div className="md:flex md:items-center md:justify-center w-full md:h-[700px] px-5 py-10 text-black relative">
      <div className="absolute w-full h-full -z-20">
        <Image
          src={bg2}
          alt="Background"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          quality={100}
          priority
          className=""
        />
        <Image
          src={bground}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-60"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-[1250px] md:h-[600px] w-full h-[1000px] flex py-12 flex-col md:flex-row bg-gradient-to-br from-[#eddab4] to-[#f7f3eb]"
      >
        <div className="flex flex-col justify-center w-full h-[500px] md:px-20 md:h-full md:w-1/2 md:ml-0 ml-5 ">
          <h1 className="mb-5 text-3xl font-semibold md:font-semibold md:text-3xl text-[#222222]">
            Company Facts
          </h1>
          <h1 className="text-4xl font-extrabold md:font-bold md:text-5xl mb-14 text-[#1A1A1A]">
            We pride ourselves on our excellent support and service
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-40 mt-4 font-bold text-white transition-colors duration-200 rounded-lg h-14 bg-primary hover:bg-opacity-40"
          >
            Contact Us
          </motion.button>
        </div>

        <div className="w-full h-[500px] md:h-full md:w-1/2 flex flex-col items-center justify-center md:px-20 text-white">
          <motion.div
            className="flex flex-col items-center justify-center w-40 h-40 bg-gradient-to-r from-[#6D1F1F] to-[#c74242] mb-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <a className="text-4xl font-extrabold">
              <CountUp start={0} end={15} duration={3} />+
            </a>
            <a>Years Of Experience</a>
          </motion.div>

          <div className="flex items-center w-full justify-evenly">
            <motion.div
              className="flex flex-col items-center justify-center w-40 h-40 bg-gradient-to-r from-[#c74242] to-[#5A1E1E]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <a className="text-4xl font-extrabold">
                <CountUp start={0} end={270} duration={3} />+
              </a>
              <a>Happy Customers</a>
            </motion.div>

            <motion.div
              className="flex flex-col items-center justify-center w-40 h-40 bg-gradient-to-r from-[#6D1F1F] to-[#c74242]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            >
              <a className="text-4xl font-extrabold">
                <CountUp start={0} end={1320} duration={3} />+
              </a>
              <a>Project Complete</a>
            </motion.div>
          </div>

          <style jsx>{`
            .clip-hexagon {
              clip-path: polygon(
                50% 0%,
                100% 25%,
                100% 75%,
                50% 100%,
                0% 75%,
                0% 25%
              );
            }
          `}</style>
        </div>
      </motion.div>
    </div>
  );
};

export default Facts;
