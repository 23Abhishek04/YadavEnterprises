import React from "react";
import Image from "next/image";
import bed from "./Images/bed.jpg";
import kit from "./Images/kitchen.jpg";
import living from "./Images/living.jpg";
import flat from "./Images/flat.jpg";
import off from "./Images/office.jpg";
import rent from "./Images/rental.jpg";
const page = () => {
  return (
    <div className="w-full h-auto bg-[#efebe9] text-[#6d4d42]  ">
      <div className="w-full h-auto border-b border-[#c4a245] gap-2 flex flex-col items-center justify-center px-10 py-5">
        <h1 className="font-serif text-2xl font-light text-center">Gallery</h1>
        <p className="text-pretty">
          Step inside our world of design excellence. This gallery showcases a
          selection of our interior design projects — each crafted with a
          perfect balance of style, function, and personality. From luxurious
          living rooms and serene bedrooms to smart workspaces and elegant
          kitchens, every space reflects our passion for transforming houses
          into homes.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-auto gap-3 py-3">
        <h1 className="font-serif text-2xl font-normal text-center">
          -- Our Work --
        </h1>
        <div className="relative h-[220px] w-[320px]  rounded-xl border border-[#c4a245] overflow-hidden group cursor-pointer">
          {/* Background Image */}
          <Image
            src={living}
            alt="Background"
            quality={100}
            className="object-cover w-full h-full transition duration-300 rounded-xl group-hover:scale-105"
          />

          {/* Blur Overlay + Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition duration-300 opacity-0 bg-black/30 backdrop-blur-sm group-hover:opacity-100 rounded-xl">
            <p className="mb-3 text-2xl font-semibold text-white transition duration-500 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Living Room
            </p>
            <p className="text-lg text-white transition duration-700 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Elegant and inviting spaces that blend comfort with style.
            </p>
          </div>
        </div>
        <div className="relative h-[220px] w-[320px]  rounded-xl border border-[#c4a245] overflow-hidden group cursor-pointer">
          {/* Background Image */}
          <Image
            src={bed}
            alt="Background"
            quality={100}
            className="object-cover w-full h-full transition duration-300 rounded-xl group-hover:scale-105"
          />

          {/* Blur Overlay + Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition duration-300 opacity-0 bg-black/30 backdrop-blur-sm group-hover:opacity-100 rounded-xl">
            <p className="mb-3 text-2xl font-semibold text-white transition duration-500 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Bed
            </p>
            <p className="text-lg text-white transition duration-700 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Cozy bedroom designs tailored for restful living.
            </p>
          </div>
        </div>
        <div className="relative h-[220px] w-[320px]  rounded-xl border border-[#c4a245] overflow-hidden group cursor-pointer">
          {/* Background Image */}
          <Image
            src={kit}
            alt="Background"
            quality={100}
            className="object-cover w-full h-full transition duration-300 rounded-xl group-hover:scale-105"
          />

          {/* Blur Overlay + Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition duration-300 opacity-0 bg-black/30 backdrop-blur-sm group-hover:opacity-100 rounded-xl">
            <p className="mb-3 text-2xl font-semibold text-white transition duration-500 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Kitchen
            </p>
            <p className="text-lg text-white transition duration-700 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Functional kitchens with a modern design twist.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-auto gap-3 py-4">
        <h1 className="font-serif text-2xl font-normal text-center">
          -- Design For Properties --
        </h1>
        <div className="relative h-[220px] w-[320px]  rounded-xl border border-[#c4a245] overflow-hidden group cursor-pointer">
          {/* Background Image */}
          <Image
            src={flat}
            alt="Background"
            quality={100}
            className="object-cover w-full h-full transition duration-300 rounded-xl group-hover:scale-105"
          />

          {/* Blur Overlay + Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition duration-300 opacity-0 bg-black/30 backdrop-blur-sm group-hover:opacity-100 rounded-xl">
            <p className="mb-3 text-2xl font-semibold text-white transition duration-500 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Flat
            </p>
            <p className="text-lg text-white transition duration-700 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Smart interior solutions for contemporary flats.
            </p>
          </div>
        </div>
        <div className="relative h-[220px] w-[320px]  rounded-xl border border-[#c4a245] overflow-hidden group cursor-pointer">
          {/* Background Image */}
          <Image
            src={off}
            alt="Background"
            quality={100}
            className="object-cover w-full h-full transition duration-300 rounded-xl group-hover:scale-105"
          />

          {/* Blur Overlay + Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition duration-300 opacity-0 bg-black/30 backdrop-blur-sm group-hover:opacity-100 rounded-xl">
            <p className="mb-3 text-2xl font-semibold text-white transition duration-500 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Offices
            </p>
            <p className="text-lg text-white transition duration-700 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Productive workspaces with a sleek professional touch.
            </p>
          </div>
        </div>
        <div className="relative h-[220px] w-[320px]  rounded-xl border border-[#c4a245] overflow-hidden group cursor-pointer">
          {/* Background Image */}
          <Image
            src={rent}
            alt="Background"
            quality={100}
            className="object-cover w-full h-full transition duration-300 rounded-xl group-hover:scale-105"
          />

          {/* Blur Overlay + Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center transition duration-300 opacity-0 bg-black/30 backdrop-blur-sm group-hover:opacity-100 rounded-xl">
            <p className="mb-3 text-2xl font-semibold text-white transition duration-500 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Rental
            </p>
            <p className="text-lg text-white transition duration-700 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              Stylish interiors designed for high-impact rental appeal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
