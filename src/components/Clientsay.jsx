"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import backg from "./assets/bgimage.jpg";
import { motion } from "framer-motion";
import bg3 from "./assets/bg3.jpeg";

const Clientsay = () => {
  return (
    <div className="flex items-center justify-center w-full md:h-[1000px] relative">
      <div className="absolute w-full h-full -z-20">
        <Image
          src={bg3}
          alt="Background"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          quality={100}
          priority
          className=""
        />
      </div>
      <Image
        src={backg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="opacity-60"
      />

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
              className="md:h-[900px] md:w-[400px] md:flex md:flex-col w-full h-[500px] "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="md:w-[400px] h-[550px]  flex items-center bg-blue-500 flex-col py-10 px-10 w-full"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="flex items-center justify-center w-32 mb-4 bg-white h-36"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="rounded-full text-7xl"
                  />
                </div>
                <a className="mb-3 text-3xl font-bold">Vaibhav Bachaav</a>
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
              className="md:h-[900px] md:w-[400px] md:flex md:flex-col w-full h-[500px] justify-end"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="md:w-[400px] h-[550px]  flex items-center bg-blue-500 flex-col py-10 px-10 w-full"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="flex items-center justify-center w-32 mb-4 bg-white h-36"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
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
                  Excellent quality, came wrapped better than I have ever seen.
                  Shipped in half the original quoted time. Beautiful
                  craftsmanship. Great price on the item, came exactly as
                  described. Would highly recommend and buy from this seller
                  again.
                </p>
              </motion.div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              className="md:h-[900px] md:w-[400px] md:flex md:flex-col w-full h-[500px] "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="md:w-[400px] h-[550px]  flex items-center bg-blue-500 flex-col py-10 px-10 w-full"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="flex items-center justify-center w-32 mb-4 bg-white h-36"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
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
              className="md:h-[900px] md:w-[400px] md:flex md:flex-col w-full h-[500px] justify-end"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="md:w-[400px] h-[550px]  flex items-center bg-blue-500 flex-col py-10 px-10 w-full"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="flex items-center justify-center w-32 mb-4 bg-white h-36"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
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
                  Love my bat and fish door knocker. Arrived ahead of schedule.
                  Good communication and customer care.
                </p>
              </motion.div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              className="md:h-[900px] md:w-[400px] md:flex md:flex-col w-full h-[500px] "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="md:w-[400px] h-[550px]  flex items-center bg-blue-500 flex-col py-10 px-10 w-full"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="flex items-center justify-center w-32 mb-4 bg-white h-36"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
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
                  Very fast shipping. Well packaging. And very pleased with the
                  quality. Definitely will be buying more from this seller.
                </p>
              </motion.div>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <motion.div
              className="md:h-[900px] md:w-[400px] md:flex md:flex-col w-full h-[500px] justify-end"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="md:w-[400px] h-[550px]  flex items-center bg-blue-500 flex-col py-10 px-10 w-full"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="flex items-center justify-center w-32 mb-4 bg-white h-36"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
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
                  Arrived sooner than expected! Well packaged and as advertised!
                </p>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Clientsay;
