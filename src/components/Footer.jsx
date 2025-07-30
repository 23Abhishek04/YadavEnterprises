import React from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-white">
      <div className="h-[420px] w-full bg-[#0E0D0A] border-t border-[#DDA325] p-6">
        <h1 className="text-[#caa044] font-serif text-3xl font-medium text-center">
          Yadav Enterprises
        </h1>
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
            className="text-[#D4AF37] font-serif font-medium text-lg"
          >
            - FAQ'S
          </Link>
          <Link
            href="/"
            className="text-[#D4AF37] font-serif font-medium text-lg"
          >
            - Clients & Partners
          </Link>
          <Link
            href="/"
            className="text-[#D4AF37] font-serif font-medium text-lg"
          >
            - Customer Guide
          </Link>
          <Link
            href="/"
            className="text-[#D4AF37] font-serif font-medium text-lg"
          >
            - Contact Us
          </Link>
        </div>

        <div className="flex gap-4 mt-3 text-xl text-[#DDA325] ">
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
        
        <p className="text-[10px] text-center mt-7 text-gray-500">©2025 Yadav Enterprises. All rights reserved. Specializing in premium POP ceiling solutions.</p>
        
      </div>

    </div>
  );
};

export default Footer;
