'use client';

import Image from 'next/image';


const Slider = () => {
  return (
   <div className="w-full h-48 py-4 overflow-hidden bg-black whitespace-nowrap">
      <div className="flex gap-8 animate-slide w-max">
        {images.concat(images).map((src, i) => (
          <div key={i} className="flex-shrink-0">
            <Image
              src={src}
              alt={`Slide ${i}`}
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
