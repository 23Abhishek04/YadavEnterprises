'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Printer } from "lucide-react";
import bg from "../imagess/bgimage.jpg";
import ab from "../imagess/ab1.jpg";
import abb from "../imagess/ab2.jpg";
import a from "../imagess/ab3.jpg";

const about = () => {
  return (
    <div className="w-full h-full">
      <div className="relative inset-0 w-full h-[190px] md:h-[400px] -z-20">
        <Image
          src={bg}
          alt="Background"
          fill
          quality={100}
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 w-full h-full bg-black opacity-70"></div>

        {/* Overlay Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#FFD700]">
          <span className="text-2xl font-bold md:text-5xl">ABOUT</span>
          <span>
            <span className="text-base text-white md:text-3xl"> Home /</span>
            <span className="text-base font-bold md:text-3xl"> About</span>
          </span>
        </div>
      </div>

      <div className="md:h-[600px] md:w-full md:flex">
        <div className="px-5 md:w-1/2 md:flex md:items-center md:relative md:justify-center md:px-0">
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full -z-20"
          >
            <Image
              src={a}
              alt="Background"
              fill
              quality={100}
              priority
              className="absolute object-cover -z-20"
            />
          </motion.div>

          <Image
            src={ab}
            alt="Background"
            quality={100}
            priority
            className="md:h-[250px] md:absolute md:w-auto md:mt-56 md:mr-60 h-[300px] w-full rounded-2xl md:my-0 my-5"
          />
          <Image
            src={abb}
            alt="Background"
            quality={100}
            className="md:h-[350px] md:w-auto md:mb-40 md:ml-40 h-[300px] w-full rounded-2xl mb-5"
            priority
          />
        </div>

        <div className="w-full px-8 md:w-1/2 md:flex-col md:py-20 md:px-8">
          <h1 className="mb-6 text-3xl font-bold md:text-5xl md:font-bold md:mb-10">
            Welcome to Monica Arts!
          </h1>
          <p className="mb-4 text-gray-500 md:text-xl md:mb-7">
            At Monica Arts, we're proud to be your go-to destination for premium
            rubber stamps, custom printing solutions, and comprehensive safety
            signage. With a steadfast dedication to quality and customer
            satisfaction, we offer a diverse range of services tailored to meet
            your needs.
          </p>
          <p className="mb-4 text-gray-500 md:text-xl md:mb-7">
            No matter the size or scope of your project, you can trust Monica
            Arts to deliver exceptional results. With our commitment to quality
            and attention to detail, we strive to exceed your expectations every
            step of the way.
          </p>
          <p className="mb-4 text-gray-500 md:text-xl">
            Thank you for choosing Monica Arts as your trusted partner. We look
            forward to serving you!
          </p>
        </div>
      </div>

      <div className="md:items-center md:flex md:justify-evenly md:h-[300px] md:w-full md:gap-10 md:px-20">
        {[
          { title: "Printing Services", description: "High-quality custom printing solutions to meet all your needs." },
          { title: "Design & Branding", description: "Creative designs and branding services for impactful visuals." },
          { title: "Best Online Support", description: "Reliable and efficient support whenever you need assistance." }
        ].map((service, index) => (
          <div
            key={index}
            className="md:h-[250px] md:w-[500px] md:flex md:items-center h-[100px] w-full flex px-5 py-2 md:mb-0 mb-5"
          >
            <Printer className="w-20 h-20 mr-3 text-red-500 md:h-20 md:mr-4 md:w-20" />
            <div className="flex flex-col ml-2">
              <span className="text-2xl font-bold">{service.title}</span>
              <span className="mt-1 text-base text-gray-600">{service.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default about;
