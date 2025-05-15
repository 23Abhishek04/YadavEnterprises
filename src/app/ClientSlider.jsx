import Image from "next/image";
import c1 from "./clients/client1.jpg";
import c2 from "./clients/client2.jpg";
import c3 from "./clients/client3.jpg";
import c4 from "./clients/client4.jpg";
import c5 from "./clients/client5.jpg";


export default function ClientSlider() {
  return (
    <div className="overflow-hidden w-full bg-[#191917] py-8 mt-5">
      <div className="whitespace-nowrap animate-slide">
        <div className="inline-block px-8">
          <Image src={c1} alt="Client 1" className="h-16" />
        </div>
        <div className="inline-block px-8">
          <Image src={c2} alt="Client 2" className="h-16" />
        </div>
        <div className="inline-block px-8">
          <Image src={c3} alt="Client 3" className="h-16" />
        </div>
        <div className="inline-block px-8">
          <Image src={c4} alt="Client 4" className="h-16" />
        </div>
        <div className="inline-block px-8">
          <Image src={c5} alt="Client 5" className="h-16" />
        </div>

        {/* Duplicate logos for seamless looping */}
        <div className="inline-block px-8">
          <Image src={c1} alt="Client 1" className="h-16" />
        </div>
        <div className="inline-block px-8">
          <Image src={c2} alt="Client 2" className="h-16" />
        </div>
        <div className="inline-block px-8">
          <Image src={c3} alt="Client 3" className="h-16" />
        </div>
        <div className="inline-block px-8">
          <Image src={c4} alt="Client 4" className="h-16" />
        </div>
        <div className="inline-block px-8">
          <Image src={c5} alt="Client 5" className="h-16" />
        </div>
      </div>
    </div>
  );
}
