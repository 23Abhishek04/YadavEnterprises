import React from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion, Variants, useReducedMotion } from "framer-motion";
import Image from "next/image";

import logo from "./assets/icon.png";


const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#3e2723] flex items-center justify-center">
      <div className="h-auto w-full border-t border-[#DDA325] px-6 pt-6">
        <div className="flex items-center justify-center w-auto h-auto mr-10">
          <Image
            src={logo}
            alt="Background"
            quality={100}
            className="h-[65px] w-[60px] mr-2 "
          />
          <span className="flex flex-col items-center ">
            <h1 className="font-serif text-2xl font-semibold text-[#DDA325]">
              YADAV
            </h1>
            <h1 className="font-mono text-sm fontmedium text-[#DDA325]">
              ENTERPISES
            </h1>
          </span>
        </div>

        <div className="flex flex-col gap-1 w-[200px] h-[250px] justify-center ">
          <Link
            href="/"
            className="font-serif text-lg font-medium text-gray-200"
          >
            - Home
          </Link>
          <Link
            href="/"
            className="font-serif text-lg font-medium text-gray-200"
          >
            - About Us
          </Link>

          <Link
            href="/"
            className="font-serif text-lg font-medium text-gray-200"
          >
            - Gallery
          </Link>
          <Link
            href="/"
            className="font-serif text-lg font-medium text-gray-200"
          >
            - FAQ'S
          </Link>
          <Link
            href="/"
            className="font-serif text-lg font-medium text-gray-200"
          >
            - Clients & Partners
          </Link>
          <Link
            href="/"
            className="font-serif text-lg font-medium text-gray-200"
          >
            - Customer Guide
          </Link>
          <Link
            href="/"
            className="font-serif text-lg font-medium text-gray-200"
          >
            - Contact Us
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 mt-3 text-xl text-gray-200">
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <FaYoutube />
          </a>
        </div>

        <p className="text-[10px] text-center mt-7 text-gray-500">
          ©2025 Yadav Enterprises. All rights reserved. Specializing in premium
          POP ceiling solutions.
        </p>
      </div>
    </div>
  );
};

export default Footer;
