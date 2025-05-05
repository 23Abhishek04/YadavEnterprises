import React from "react";
import Image from "next/image";
import Link from 'next/link';
import logo from "./assets/logo.png";
import i from "./assets/in.png";
import f from "./assets/fb.png";
import p from "./assets/pin.png";
import y from "./assets/yt.png";

const Footer = () => {
  return (
    <div>
      <div className="w-full border h-auto bg-[#333333] text-white flex flex-col px-7 py-5">
        <Image
          src={logo}
          alt="Background"
          quality={100}
          className="w-[180px] h-[100px] "
        />
        <div className="flex gap-5 mt-5">
        <Link href="https://www.instagram.com/"><Image
            src={i}
            alt="Background"
            quality={100}
            className="w-[30px] h-[30px]"
          /></Link>
          <Link href="https://www.facebook.com/"><Image
            src={f}
            alt="Background"
            quality={100}
            className="w-[30px] h-[30px]"
          /></Link>
          <Link href="https://www.pinterest.com/"><Image
            src={p}
            alt="Background"
            quality={100}
            className="w-[30px] h-[30px]"
          /></Link>
          <Link href="https://www.youtube.com/"><Image
            src={y}
            alt="Background"
            quality={100}
            className="w-[30px] h-[30px]"
          /></Link>
        </div>

        <h1 className="mt-5 mb-5 text-xl font-semibold">IMPORTANT LINKS</h1>
        <div className="flex flex-col gap-1">
          <a className="text-sm">About Us</a>
          <a className="text-sm">Contact us</a>
          <a className="text-sm">Living Room design ideas</a>
          <a className="text-sm">Bedroom design ideas</a>
          <a className="text-sm">Kitchen design ideas</a>
          <a className="text-sm">Wardrobe Design Ideas</a>
          <a className="text-sm">Pooja Room Design Ideas</a>
          <a className="text-sm">Blogs</a>
        </div>

        <h1 className="mt-5 mb-5 text-xl font-semibold">ADDRESS</h1>

        <p className="text-sm">
          Shop No. 6, ARUN PARK, S.No.33/3, near, Aditya Birla Hospital Marg,
          Datta Nagar, Thergaon, PUNE, Maharashtra 411033
        </p>

        <h1 className="mt-5 mb-5 text-xl font-semibold">OUR OTHER BRANDS</h1>
        <div className="flex flex-col gap-1">
          <a className="text-sm">Life2Home</a>
          <a className="text-sm">Fabshades</a>
        </div>

        <h1 className="mt-5 mb-5 text-xl font-semibold">BUSINESS HOURS</h1>
        <div className="flex flex-col gap-1">
          <a className="text-sm">MON :- 9:30AM TO 7:00 PM</a>
          <a className="text-sm">TUE :- 9:30AM TO 7:00 PM</a>
          <a className="text-sm">WED :- 9:30AM TO 7:00 PM</a>
          <a className="text-sm">THU :- 9:30AM TO 7:00 PM</a>
          <a className="text-sm">FRI :- 9:30AM TO 7:00 PM</a>
          <a className="text-sm">SAT :- 9:30AM TO 7:00 PM</a>
          <a className="text-sm">SUN :- Closed</a>
        </div>
      </div>

      <div className="h-[70px] flex items-center flex-col justify-evenly w-full">
        <h1 className="text-xs font-medium">
          @ 2025 YADAV ENTERPRISES | DESIGN & CRAFTED By A2 DiGITAL
        </h1>

        <h1 className="text-xs font-medium">
          Terms and Conditions & Privacy Policy
        </h1>
      </div>
    </div>
  );
};

export default Footer;
