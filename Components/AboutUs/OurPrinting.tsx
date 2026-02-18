"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";



export default function OurPrinting() {
  return (
    <section className="bg-white py-15 px-4">
      <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-13 items-center">

        {/* LEFT IMAGE */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/product-21..webp" 
            alt="Why Choose Azam Electronics"
            width={800}
            height={600}
            className="w-full h-[380px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-3xl font-bold mb-5 text-gray-900">
            Our Printing Journey                   
              </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
Mazam Electronics was built with a simple goal: to make office printing reliable, affordable, and hassle free. Over the years, we've helped companies across the UAE reduce printing costs by offering professionally refurbished printers and photocopiers that perform like new. As a trusted printer supplier Dubai,UAE, we help businesses find the right printing solutions.

          </p>
          <p className="text-gray-600 leading-relaxed">
          Our team carefully evaluates every machine before it reaches you inspecting parts, testing print quality, and ensuring overall performance. We believe in transparency, honest pricing, and long-term customer relationships, which is why so many businesses trust us for their printing needs. From setup to after-sales support, we stay committed to keeping your office operations running smoothly.
          </p>

          {/* BULLET POINTS */}
        
       <a
  href="#"
  className="mt-8 group  inline-flex items-center gap-2 cursor-pointer inline-bloc text-red-500 font-semibold
  border-b-2 border-transparent
  hover:border-red-700
  transition-colors duration-300"
>
  Explore Our Printer Collection
   <ArrowRight
    size={16}
    className=" "
  />
</a>


        </div>
      </div>
    </section>
  );
}
