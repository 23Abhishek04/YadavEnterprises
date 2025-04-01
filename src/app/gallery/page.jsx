'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg from "../imagess/bgimage.jpg";

// Use state to load images only on the client-side
const gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure images are only loaded on the client-side
      const loadedImages = Array.from({ length: 20 }, (_, i) => `/images/img${i + 1}.jpg`);
      setImages(loadedImages);
    }
  }, []);

  return (
    <div className="w-full h-full ">
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
          <span className="text-2xl font-semibold md:text-5xl">GALLERY</span>
          <span>
            <span className="text-base text-white md:text-3xl"> Home /</span>
            <span className="text-base font-semibold md:text-3xl"> Gallery</span>
          </span>
        </div>
      </div>

      <div className="min-h-screen px-4 py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default gallery;
