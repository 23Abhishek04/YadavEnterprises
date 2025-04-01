"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/LOGOpngg.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed z-20 flex flex-col items-center justify-center w-full md:h-auto ">
      <div className="w-full md:h-auto md:w-[1250px]">
      {/* Top Navbar */}
      <div className="md:w-full md:h-[50px] md:flex md:items-center hidden justify-center md:relative z-20 backdrop-blur-3xl rounded-b-3xl">
        <div className="md:h-[50px] md:flex md:items-center w-[1250px] justify-between px-9  rounded-b-3xl backdrop-blur-md ">
          <span className="flex items-center gap-4">
            <a className="flex items-center gap-2 ">
              <FontAwesomeIcon icon={faPhone} className="h-4" />
              +91 9822880200
            </a>
            <a className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="h-4" />
              MonicaArts.com
            </a>
          </span>

          <div className="md:text-xl md:gap-5 md:flex">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 border rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 border rounded-full"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 border rounded-full"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 border rounded-full"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      
      {/*Main Navbar */}
      <div className="z-20 flex items-center w-full h-12 px-6 md:h-[80px] backdrop-blur-3xl justify-center md:px-0 rounded-b-3xl">
        <div className="md:fixed md:z-20 flex items-center md:w-[1250px] h-12 md:px-10 md:h-[100px] justify-between w-full rounded-b-3xl">
          <Image
            src={logo}
            alt="logo"
            className="w-12 mr-4 md:mr-0 md:w-20 md:ml-0"
          />

          <div className="items-center hidden w-full h-full text-lg font-bold text-white md:flex justify-evenly">
            <Link
              href="/"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              ABOUT
            </Link>
            <Link
              href="/product"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              PRODUCT
            </Link>
            <Link
              href="/gallery"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              GALLERY
            </Link>
            <Link
              href="/client"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              CLIENT
            </Link>
            <Link
              href="/contactus"
              className="hover:text-[#D4AF37] transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </div>

          <button className="hidden w-40 ml-8 font-bold text-white transition-colors duration-200 rounded-lg md:block h-14 bg-primary hover:bg-opacity-40">
            BROUCHER
          </button>

          {/* Mobile Menu Button */}
          <button
            className="block text-3xl text-white md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="fixed left-0 z-10 flex flex-col items-center w-full gap-4 p-4 text-lg font-bold text-black bg-white top-20 bg-opacity-90 backdrop-blur-md">
              <Link
                href="/home"
                className="hover:text-[#D4AF37] transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="hover:text-[#D4AF37] transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                ABOUT
              </Link>
              <Link
                href="/product"
                className="hover:text-[#D4AF37] transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                PRODUCT
              </Link>
              <Link
                href="/gallery"
                className="hover:text-[#D4AF37] transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                GALLERY
              </Link>
              <Link
                href="/client"
                className="hover:text-[#D4AF37] transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                CLIENT
              </Link>
              <Link
                href="/contactus"
                className="hover:text-[#D4AF37] transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                CONTACT US
              </Link>
              <div className="flex gap-4 mt-4 text-xl">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
              <button className="w-40 mt-4 font-bold text-white transition-colors duration-200 rounded-lg h-14 bg-primary hover:bg-opacity-40">
                BROUCHER
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
