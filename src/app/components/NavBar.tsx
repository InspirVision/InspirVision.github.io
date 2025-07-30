import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="border-b border-[#C1B6A4] drop-shadow-sm shadow-[#c1b6a460] text-[#453C32] px-8 py-6 shadow-md"> 
      {/* Top header & maybe a logo */}
      <div className="relative flex justify-between items-start mb-2">
        <div className="text-xl italic font-serif font-bold tracking-wide select-none">
          InspirVision
        </div>
{/* maybe add rose image later */}
      </div>

      {/* Navigation links */}
      <ul className="flex flex-wrap justify-center gap-6 text-base font-medium font-serif">
                 <div className="">
            <Heart
              className="w-8 h-8 text-[#A9B388] hover:text-[#C3D59B] transition-colors duration-300"
              strokeWidth={2.6}
            />
          </div>
        <li>
          <Link href="/tunes" className="border-b border-[	#6f5e4d] hover:border-[#c5ae92] transition-all">
            Tunes
          </Link>
        </li>
        <li>
          <Link href="/playground" className="border-b border-[	#6f5e4d] hover:border-[#c5ae92] transition-all">
            Playground
          </Link>
        </li>
        <li>
          <Link href="/inspire" className="border-b border-[	#6f5e4d] hover:border-[#c5ae92] transition-all">
            Inspire
          </Link>
        </li>
        <li>
          <Link href="/envision" className="border-b border-[	#6f5e4d] hover:border-[#c5ae92] transition-all">
            Envision
          </Link>
        </li>

        {/* Heart Home */}
              <li>
          <Link
            href="/"
            className="relative flex items-center justify-center gap-2 px-4 py-1 text-[#453C32] hover:text-[#C3D59B] font-bold transition-colors duration-300 ease-in-out border-b border-[#6f5e4d] hover:border-[#c5ae92]"
            aria-label="Home"
          >
            Home
          </Link>
            </li>

        <li>
          <Link href="/catalog" className="border-b border-[	#6f5e4d] hover:border-[#c5ae92] transition-all">
            Catalog
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="border-b border-[	#6f5e4d] hover:border-[#c5ae92] transition-all">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/lounge" className="border-b border-[	#6f5e4d] hover:border-[#c5ae92] transition-all">
            Lounge
          </Link>
        </li>
        <li>
          <Link href="/about" className="border-b border-[	#6f5e4d] hover:border-[#c5ae92] transition-all">
            About
          </Link>
        </li>
         <div className="">
            <Heart
              className="w-8 h-8 text-[#A9B388] hover:text-[#C3D59B] transition-colors duration-300"
              strokeWidth={2.6}
            />
          </div>
          <div className="border-b border-[#4B3F2F]/30" />
      </ul>
    </nav>
  );
};

export default NavBar;
