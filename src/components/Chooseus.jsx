"use client";
import React from "react";
import { Printer, Brush, Headphones } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import bggg from "./assets/choose.png";
import bg1 from "./assets/bg1.jpeg";
import bgg from "./assets/bgimage.jpg";

const Chooseus = () => {
  return (
    <div className="w-full md:h-[700px] md:flex  md:py-12 h-[1300px] relative ">
      <div className="absolute w-full h-full -z-20">
        <Image
          src={bg1}
          alt="Background"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          quality={100}
          priority
        />
        <Image
          src={bgg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-60"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex items-center justify-center w-full md:pr-5 h-1/2 md:h-full md:w-1/2"
      >
        <Image
          src={bggg}
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
        className="flex flex-col pl-5 md:h-full md:w-1/2"
      >
        <h1 className="mb-2 ml-12 text-3xl font-semibold">WHY CHOOSE US</h1>
        <h1 className="mb-10 ml-12 text-4xl font-extrabold">
          Quality Printing, Every Time
        </h1>

        {[
          { text: "Expertise & Precision", Icon: Printer },
          { text: "Customized Solutions", Icon: Brush },
          { text: "Attention to Detail", Icon: Printer },
          { text: "Professional & Creative Designs", Icon: Headphones },
          { text: "Durable & High-Quality Prints", Icon: Printer },
        ].map((item, index) => (
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex h-20 gap-4 mt-4 text-3xl font-bold border-b-2"
          >
            <item.Icon className="w-10 h-10" />
            {item.text}
          </motion.h1>
        ))}
      </motion.div>
    </div>
  );
};

export default Chooseus;
