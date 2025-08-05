import React from "react";
import Image from "next/image";
import bg from "./assets/bgimage.jpg";
import Link from "next/link";
import Form from "./Form";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="w-full h-full  bg-[#efebe9] px-6">
      {/* BG Image */}
      <div className="relative w-full h-[400px] md:h-[630px]">
        {/* Background Image */}
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Text on Top */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center px-2 text-center text-white bg-black/50 md:px-40">
          <span className="flex flex-col items-center w-full h-auto mb-2 font-serif text-3xl font-medium">
            <h1 className="md:text-5xl">POP, That</h1>
            <h1 className="md:text-5xl">Pops With Perfection!</h1>
          </span>
          <p className="text-xs font-light md:text-lg">
            With over 20+ years of expertise, Yadav Enterprises has proudly
            transformed more than 2,000+ propertys With high-quality false
            ceiling solutions, we deliver craftsmanship, innovation, and trust
            that stand the test of time.
          </p>
          <Link href="./estimate" className="">
            <button className="flex items-center justify-center gap-1  h-[45px] w-[200px] text-sm mt-3 border-[#DDA325] border rounded-lg  font-serif backdrop-blur-md">
              <p>GET A FREE ESTIMATE</p>
            </button>
          </Link>
          <Link href="./estimate" className="">
            <button className="flex items-center justify-center gap-1  h-[45px] w-[200px] text-sm mt-3 border-[#DDA325] border rounded-lg  font-serif backdrop-blur-md">
              <p>OUR WORK</p>
            </button>
          </Link>
        </div>
      </div>

      {/* Services */}
      <div className="w-full h-auto text-[#DDA325]  px-4 flex flex-col gap-5 py-5   items-center ">
        <h1 className="font-serif text-2xl font-semibold text-center text-[#6d4c41] ">
          Our Services
        </h1>
        <div className="h-[350px] w-[320px] bg-white rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 shadow-md">
          <Image
            src={bg}
            alt="Background"
            quality={100}
            className="w-full h-auto rounded-t-xl"
          />
          <div className="w-[320px] text-center h-1/2 rounded-b-xl px-3">
            <h1 className="mt-4 font-serif text-xl font-semibold">
              Custom POP Ceilings
            </h1>
            <p className="mt-2 text-sm">
              Handcrafted plaster ceilings that bring elegance and character to
              any space, with designs ranging from classic to contemporary.
            </p>
          </div>
        </div>
        <div className="h-[350px] w-[320px]  rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 shadow-md border border-[#c4a245]">
          <Image
            src={bg}
            alt="Background"
            quality={100}
            className="w-full h-auto rounded-t-xl"
          />
          <div className="w-[320px] text-center h-1/2 rounded-b-xl px-3">
            <h1 className="mt-4 font-serif text-xl font-semibold text-[#6d4d42]">
              Custom POP Ceilings
            </h1>
            <p className="mt-2 text-sm text-[#58433e]">
              Handcrafted plaster ceilings that bring elegance and character to
              any space, with designs ranging from classic to contemporary.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="w-full h-auto text-[#DDA325] mt-5 px-3 flex flex-col gap-5 py-5   items-center bg-white">
        <h1 className="font-serif text-2xl font-semibold text-center">
          Gallery
        </h1>
        <div className="relative h-[220px] w-[320px]  rounded-xl border border-[#c4a245] overflow-hidden group cursor-pointer">
          {/* Background Image */}
          <Image
            src={bg}
            alt="Background"
            quality={100}
            className="object-cover w-full h-full transition duration-300 rounded-xl group-hover:scale-105"
          />

          {/* Blur Overlay + Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition duration-300 opacity-0 bg-black/30 backdrop-blur-sm group-hover:opacity-100 rounded-xl">
            <p className="mb-3 text-2xl font-semibold text-white transition duration-500 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Modern Classic
            </p>
            <p className="text-lg text-white transition duration-700 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Elegant two-tone POP design with hidden cove lighting
            </p>
          </div>
        </div>
        <div className="relative h-[220px] w-[320px]  rounded-xl border border-[#c4a245] overflow-hidden group cursor-pointer">
          {/* Background Image */}
          <Image
            src={bg}
            alt="Background"
            quality={100}
            className="object-cover w-full h-full transition duration-300 rounded-xl group-hover:scale-105"
          />

          {/* Blur Overlay + Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition duration-300 opacity-0 bg-black/30 backdrop-blur-sm group-hover:opacity-100 rounded-xl">
            <p className="mb-3 text-2xl font-semibold text-white transition duration-500 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Modern Classic
            </p>
            <p className="text-lg text-white transition duration-700 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Elegant two-tone POP design with hidden cove lighting
            </p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="flex flex-col items-center w-full h-auto gap-4 px-5 py-7 text-pretty md:px-40">
        <p className="flex text-center md:flex-col text-[#6d4d42] font-serif text-2xl font-semibold md:text-4xl gap-2">
          <a>About</a>
          <a>Yadav Enterprises</a>
        </p>

        <p className="text-[#6d4d42] md:text-lg md:font-medium">
          At Yadav Enterprises, We Bring Over 20+ Years Of Expertise In Crafting
          High-quality False Ceiling And Wall Finishing Solutions. With Over
          2000+ Successful Residential And Commercial Projects, Our Work
          Seamlessly Blends Modern Design Expert Craftsmanship And Long-lasting
          Quality.
        </p>
        <p className="text-[#6d4d42] md:text-lg md:font-medium">
          From Elegant Pop Ceilings To Innovative Wall Panels, We Craft
          Interiors That Are Both Beautiful And Functional, Tailored To Your
          Lifestyle. Our Designs Enhance Natural Light, Suit All Generations,
          And Elevate Everyday Living — All While Staying On Time And Within
          Budget.
        </p>
        <Link href="./about" className="">
          <button className="flex items-center justify-center gap-1  h-[45px] w-[200px] text-lg mt-3 bg-[#6d4c41]  rounded-lg  font-serif backdrop-blur-md font-medium text-white">
            <p>Learn More</p>
          </button>
        </Link>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col px-5 py-5 bg-white ">
        <h1 className="font-serif text-[#6d4d42] font-semibold text-2xl text-center mb-8">
          Contact
        </h1>

        <div className="flex flex-col gap-4 md:px-20 lg:flex-row">
          <div className="flex flex-col gap-5 mb-10 md:w-1/2">
            <span className="flex  text-[#6d4c41] gap-2 items-center">
              <a className="text-xl ">
                <FaLocationDot />
              </a>
              <span className="flex flex-col ">
                <p className="text-sm font-medium">
                  GoodWill Park, New Sangavi,
                </p>
                <p className="text-sm font-medium">Pune, Maharashtra</p>
              </span>
            </span>
            <span className="flex  text-[#6d4c41] gap-2 items-center">
              <a className="text-xl ">
                <FaPhoneAlt />
              </a>
              <span className="flex flex-col ">
                <p className="text-sm font-medium">+91 9325574329</p>
                <p className="text-sm font-medium">Mon-Fri,9:00Am-6:00PM</p>
              </span>
            </span>
            <span className="flex  text-[#6d4c41] gap-2 items-center">
              <a className="text-xl ">
                <IoIosMail />
              </a>
              <span className="flex flex-col ">
                <p className="text-sm font-medium">randommain.com</p>
                <p className="text-sm font-medium">Inquiries & Appointments</p>
              </span>
            </span>
            <span className="flex  text-[#6d4c41] gap-2 items-center">
              <a className="text-xl ">
                <FaCalendarAlt />
              </a>
              <span className="flex flex-col ">
                <p className="text-sm font-medium">
                  Consultations by appointment
                </p>
                <p className="text-sm font-medium">Virtual options available</p>
              </span>
            </span>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
