// for envision page
import React from "react";
import Image from "next/image";

type ScrollSectionProps = {
  imageSrc: string;
  quote: string;
  author?: string;
  reverse?: boolean; // for alternating layout
};

export default function ScrollSection({
  imageSrc,
  quote,
  author,
  reverse = false,
}: ScrollSectionProps) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-6 py-12 px-4 md:px-16`}>
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt="Artwork or photo"
          width={600}
          height={400}
          className="rounded-2xl shadow-md object-cover w-full"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-xl italic text-gray-700">“{quote}”</p>
        {author && <p className="mt-2 text-sm text-gray-500">— {author}</p>}
      </div>
    </div>
  );
}
