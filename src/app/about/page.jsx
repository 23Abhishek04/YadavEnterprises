"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const Page = () => {
  return (
    <motion.div
      className="flex flex-col w-full h-auto text-sm text-[#6d4d42] bg-[#efebe9]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col items-center w-full h-auto gap-4 border-b border-[#DDA325] py-7 text-pretty px-7"
        variants={childVariants}
      >
        <h1 className="font-serif text-2xl font-light ">
          About Yadav Enterprises
        </h1>
        <p>
          At Yadav Enterprises, We Bring Over 20+ Years Of Expertise In Crafting
          High-quality False Ceiling And Wall Finishing Solutions. With Over
          2000+ Successful Residential And Commercial Projects, Our Work
          Seamlessly Blends Modern Design Expert Craftsmanship And Long-lasting
          Quality.
        </p>
        <p>
          From Elegant Pop Ceilings To Innovative Wall Panels, We Craft
          Interiors That Are Both Beautiful And Functional, Tailored To Your
          Lifestyle. Our Designs Enhance Natural Light, Suit All Generations,
          And Elevate Everyday Living — All While Staying On Time And Within
          Budget.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-3 py-5 px-7"
        variants={childVariants}
      >
        <h1 className="font-serif text-xl text-center">Our Core Values</h1>
        <span className="flex flex-col">
          <span className="font-light">✅ Quality-first Approach</span>
          <span className="font-light">✅ Timely Completion</span>
          <span className="font-light">✅ Innovation In Design</span>
          <span className="font-light">✅ Skilled Workforce</span>
          <span className="font-light">✅ Clean & Safe Worksites</span>
          <span className="font-light">
            ✅ Long-term Client Relationships
          </span>
        </span>

        <h1 className="font-serif text-xl text-center">Our Vision</h1>

        <p>
          To Become The Most Trusted Name In Ceiling And Wall Solutions By
          Enhancing Every Space With Creativity, Comfort, And Quality.
        </p>

        <h1 className="font-serif text-xl text-center">Our Mission</h1>

        <p>
          To Deliver Innovative And Lasting Ceiling And Wall Solutions That
          Transform Every Space Into A Place Of Comfort, Beauty, And Pride.
        </p>
        <p>
          We Aim To Complete 3,000+ Thoughtfully Designed Projects By 2030,
          Ensuring That Every Time You Step Into Your Home, You Feel A Sense Of
          Joy, Warmth, And Satisfaction.
        </p>
        <p>
          Through Quality Craftsmanship, Reliable Service, And Personalized
          Design, We Create Spaces That Truly Feel Like Yours, Where Every
          Corner Reflects Care And Creativity.
        </p>

        <h1 className="font-serif text-xl text-center">Core Purpose</h1>

        <p>
          To Transform Ordinary Interiors Into Exceptional Spaces Adding Value
          To The Lives Of Our Customers, Teams, And Partners.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col w-full h-auto gap-3 py-5 border-t px-7 border-[#DDA325] mt-5"
        variants={childVariants}
      >
        <h1 className="font-serif text-3xl text-center ">
          Board of Directors
        </h1>
        <div className="flex flex-col">
          <span className="font-medium">Harishankar Yadav</span>
          <span className="text-xs">
            Founder & Director | Yadav Enterprises
          </span>
        </div>
        <div className="flex flex-col mt-2">
          <span className="font-medium">Vinod Harishankar Yadav</span>
          <span className="text-xs">
            CMO - Chief Marketing Officer | Yadav Enterprises
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
