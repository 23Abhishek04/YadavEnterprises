'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo1 from './assets/1.png';
import logo2 from './assets/2.png';

const Preloader = () => {
  const [startZoom, setStartZoom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartZoom(true);
    }, 1200); // Wait for 1.2s before zooming logos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#191917]">
      <div className="relative flex items-center justify-center w-[300px] h-[300px]">
        <div
          className={`absolute ${startZoom ? 'animate-zoom-fade-out' : 'animate-slide-from-top'}`}
        >
          <Image src={logo1} alt="Logo 1" width={500} height={500} />
        </div>
        <div
          className={`absolute ${startZoom ? 'animate-zoom-fade-out' : 'animate-slide-from-bottom'}`}
        >
          <Image src={logo2} alt="Logo 2" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
