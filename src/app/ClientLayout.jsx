'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Preloader from '@/components/PreLoader';

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Preloader /> : (
    <>
      <Navbar />
      {children}
    </>
  );
}
// #f5dfa5
// #191917
