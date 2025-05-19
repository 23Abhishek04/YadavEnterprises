import Image from "next/image";
import c1 from "./clients/client1.jpg";
import c2 from "./clients/client2.jpg";
import c3 from "./clients/client3.jpg";
import c4 from "./clients/client4.jpg";
import c5 from "./clients/client5.jpg";

export default function ClientSlider() {
  return (
    <div className="overflow-hidden w-full bg-[#151307] pb-8 mt-5 border-t border-b border-[#83681e] pt-4">
      <h1 className="mb-3 ml-3 font-serif text-3xl text-[#987b2d]">Clients</h1>
      <div className="whitespace-nowrap animate-slide">
        <div className="inline-block ">
          <Image src={c1} alt="Client 1 px-2" className="w-32 h-auto" />
        </div>
        <div className="inline-block px-2">
          <Image src={c2} alt="Client 2" className="w-32 h-auto" />
        </div>
        <div className="inline-block px-2">
          <Image src={c3} alt="Client 3" className="w-32 h-auto" />
        </div>
        <div className="inline-block px-2">
          <Image src={c4} alt="Client 4" className="w-32 h-auto" />
        </div>
        <div className="inline-block px-2">
          <Image src={c5} alt="Client 5" className="w-32 h-auto" />
        </div>

        {/* Duplicate logos for seamless looping */}
        <div className="inline-block ">
          <Image src={c1} alt="Client 1 px-2" className="w-32 h-auto" />
        </div>
        <div className="inline-block px-2">
          <Image src={c2} alt="Client 2" className="w-32 h-auto" />
        </div>
        <div className="inline-block px-2">
          <Image src={c3} alt="Client 3" className="w-32 h-auto" />
        </div>
        <div className="inline-block px-2">
          <Image src={c4} alt="Client 4" className="w-32 h-auto" />
        </div>
        <div className="inline-block px-2">
          <Image src={c5} alt="Client 5" className="w-32 h-auto" />
        </div>
        
        <div className="inline-block ">
          <Image src={c1} alt="Client 1 px-2" className="w-32 h-auto" />
        </div>
        <div className="inline-block px-2">
          <Image src={c2} alt="Client 2" className="w-32 h-auto" />
        </div>
        <div className="inline-block px-2">
          <Image src={c3} alt="Client 3" className="w-32 h-auto" />
        </div>
        <div className="inline-block px-2">
          <Image src={c4} alt="Client 4" className="w-32 h-auto" />
        </div>
        <div className="inline-block px-2">
          <Image src={c5} alt="Client 5" className="w-32 h-auto" />
        </div>
      </div>
    </div>
  );
}
