'use client';

import Image from 'next/image';

export default function Slider() {
  const imagesList = [
    '/Sliders/img1.jpg',
    '/Sliders/img2.jpg',
    '/Sliders/img3.jpg',
    '/Sliders/img4.jpg',
    // '/Sliders/img5.jpg',
    // '/Sliders/img6.jpg',
    // '/Sliders/img7.jpg',
    // '/Sliders/img8.jpg',
    // '/Sliders/img9.jpg',
    // '/Sliders/img10.jpg',
    // '/Sliders/img11.jpg',
    // '/Sliders/img12.jpg',
    // '/Sliders/img13.jpg',
    // '/Sliders/img14.jpg',
    // '/Sliders/img15.jpg',
  ];

  return (
    <div className="w-full py-4 overflow-hidden bg-[#0E0D0A]">
      <div className="flex gap-3 animate-scroll w-max">
        {imagesList.map((src, index) => (
          <div key={index} className="relative flex-shrink-0 h-[170px] w-[130px]">
            <Image
              src={src}
              alt={`Slide ${index}`}
              width={288}
              height={160}
              className="object-cover rounded-lg"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
