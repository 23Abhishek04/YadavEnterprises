'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}


// 'use client';

// import { useEffect, useState } from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import Preloader from '@/components/PreLoader';

// export default function ClientLayout({ children }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return loading ?  <Preloader />: (
//     <>
//       <Navbar />
//       {children}
//       <Footer/> 
//     </>
//   );
// }