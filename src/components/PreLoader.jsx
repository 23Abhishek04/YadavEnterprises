'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo1 from './assets/logo1.png'
import logo2 from './assets/logo2.png'

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHide(true);
    }, 3000); // total animation duration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#151307] transition-opacity duration-500 ${
        hide ? 'opacity-0 pointer-events-none' : ''
      }`}
    >
      <div className="relative h-60 w-60">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={logo1}
            alt="Logo 1"
            width={120}
            height={120}
            className="animate-logoTop"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={logo2}
            alt="Logo 2"
            width={120}
            height={120}
            className="animate-logoBottom"
          />
        </div>
      </div>
    </div>
  );
}