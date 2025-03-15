"use client";
import React from "react";
import Image from "next/image";
import bg from "./assets/imagebgg.jpg";

const Sample = () => {
  return (
    <div className="w-full md:h-[200px] border flex items-center justify-center flex-col bg-gradient-to-r from-[#f57322] via-[#f5a26e] to-[#f57322] relative overflow-hidden h-[150px]">
      <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="opacity-60"
      />
      <a
        className="z-10 text-5xl font-black text-transparent md:text-9xl bg-clip-text animate-background-move"
        style={{
          backgroundImage: `url('./images/textbg.webp')`, // This will work because it's from the public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        MONICA ARTS
      </a>

      <style jsx>{`
        @keyframes backgroundMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .animate-background-move {
          animation: backgroundMove 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Sample;
