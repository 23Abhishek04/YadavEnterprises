"use client";
import React from "react";
import Image from "next/image";
import bgg from "./assets/bgimageee.jpeg";
import bg from "./assets/bgimage.jpg";
import { Printer, Brush, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import bggg from "./assets/choose.png";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const samplee = () => {
  return (
    <div className="relative w-full h-auto">
      <div className="absolute w-full h-full -z-20">
        <Image
          src={bgg}
          alt="Background"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          quality={100}
          priority
        />
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="opacity-60"
        />
      </div>

      <div className="w-full md:h-[700px] md:flex  md:py-12 h-[1300px] relative ">
        {/* <div className="absolute w-full h-full -z-20">
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
        </div> */}
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

      <div className="md:flex md:items-center md:justify-center w-full md:h-[700px] px-5 py-10 text-black relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-[1250px] md:h-[600px] w-full h-[1000px] flex py-12 flex-col md:flex-row  rounded-3xl bg-gradient-to-br from-[#eddab4] to-[#f7f3eb]"
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

      <div className="flex items-center justify-center w-full md:h-[1000px] relative">
        <div className="py-10 md:[1350px] md:h-[1000px] md:px-20 w-full px-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            
            <SwiperSlide>
              <motion.div
                className="md:h-[900px] md:w-[400px] md:flex md:flex-col w-full h-[500px] text-[#5C4033]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="md:w-[400px] h-[550px]  flex items-center bg-[#FAF9F6] flex-col py-10 px-10 w-full"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="flex items-center justify-center w-32 mb-4 text-black bg-transparent h-36"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      backgroundImage: `url('./images/textbg.webp')`, // This will work because it's from the public folder
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="rounded-full text-7xl"
                    />
                  </div>
                  <a className="mb-3 text-3xl font-bold ">Vaibhav Bachaav</a>
                  <a className="mb-3 text-sm font-bold">Pune</a>
                  <p className="font-medium ">
                    Amazing seller. Great communication, kept up to date on
                    delivery times via email from the seller. Item arrived
                    quickly, it was really well packaged and item just as
                    described. Very happy, thank you.
                  </p>
                </motion.div>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                className="md:h-[900px] md:w-[400px] md:flex md:flex-col w-full h-[500px] justify-end text-[#5C4033]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="md:w-[400px] h-[550px]  flex items-center bg-[#FAF9F6] flex-col py-10 px-10 w-full"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="flex items-center justify-center w-32 mb-4 text-black bg-transparent h-36"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      backgroundImage: `url('./images/textbg.webp')`, // This will work because it's from the public folder
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="rounded-full text-7xl"
                    />
                  </div>
                  <a className="mb-3 text-3xl font-bold">Prashant Devrade</a>
                  <a className="mb-3 text-sm font-bold">Pune</a>
                  <p className="font-medium ">
                    Excellent quality, came wrapped better than I have ever
                    seen. Shipped in half the original quoted time. Beautiful
                    craftsmanship. Great price on the item, came exactly as
                    described. Would highly recommend and buy from this seller
                    again.
                  </p>
                </motion.div>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                className="md:h-[900px] md:w-[400px] md:flex md:flex-col w-full h-[500px] text-[#5C4033]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="md:w-[400px] h-[550px]  flex items-center bg-[#FAF9F6] flex-col py-10 px-10 w-full"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="flex items-center justify-center w-32 mb-4 text-black bg-transparent h-36"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      backgroundImage: `url('./images/textbg.webp')`, // This will work because it's from the public folder
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="rounded-full text-7xl"
                    />
                  </div>
                  <a className="mb-3 text-3xl font-bold">Nitin Deshmukh</a>
                  <a className="mb-3 text-sm font-bold">Pune</a>
                  <p className="font-medium ">
                    Very fair and quick to respond and secure packing fast
                    shipping .. would recommend this seller!!
                  </p>
                </motion.div>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                className="md:h-[900px] md:w-[400px] md:flex md:flex-col w-full h-[500px] justify-end text-[#5C4033]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="md:w-[400px] h-[550px]  flex items-center bg-[#FAF9F6] flex-col py-10 px-10 w-full"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="flex items-center justify-center w-32 mb-4 text-black bg-transparent h-36"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      backgroundImage: `url('./images/textbg.webp')`, // This will work because it's from the public folder
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="rounded-full text-7xl"
                    />
                  </div>
                  <a className="mb-3 text-3xl font-bold">Satish Kadam</a>
                  <a className="mb-3 text-sm font-bold">Pune</a>
                  <p className="font-medium ">
                    Exactly as described. Solid construction and easily mounted.
                    Love my bat and fish door knocker. Arrived ahead of
                    schedule. Good communication and customer care.
                  </p>
                </motion.div>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                className="md:h-[900px] md:w-[400px] md:flex md:flex-col w-full h-[500px] text-[#5C4033]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="md:w-[400px] h-[550px]  flex items-center bg-[#FAF9F6] flex-col py-10 px-10 w-full"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                 <div
                    className="flex items-center justify-center w-32 mb-4 text-black bg-transparent h-36"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      backgroundImage: `url('./images/textbg.webp')`, // This will work because it's from the public folder
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="rounded-full text-7xl"
                    />
                  </div>
                  <a className="mb-3 text-3xl font-bold">Rajendra Raut</a>
                  <a className="mb-3 text-sm font-bold">Pune</a>
                  <p className="font-medium ">
                    Very fast shipping. Well packaging. And very pleased with
                    the quality. Definitely will be buying more from this
                    seller.
                  </p>
                </motion.div>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                className="md:h-[900px] md:w-[400px] md:flex md:flex-col w-full h-[500px] justify-end text-[#5C4033]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="md:w-[400px] h-[550px]  flex items-center bg-[#FAF9F6] flex-col py-10 px-10 w-full"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="flex items-center justify-center w-32 mb-4 text-black bg-transparent h-36"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      backgroundImage: `url('./images/textbg.webp')`, // This will work because it's from the public folder
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      className="rounded-full text-7xl"
                    />
                  </div>
                  <a className="mb-3 text-3xl font-bold">Ketan Jadhav</a>
                  <a className="mb-3 text-sm font-bold">Pune</a>
                  <p className="font-medium ">
                    Arrived sooner than expected! Well packaged and as
                    advertised!
                  </p>
                </motion.div>
              </motion.div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default samplee;
