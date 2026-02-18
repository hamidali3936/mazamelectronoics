"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";



export default function CompletePrinter() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w- px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-13 items-center">

        {/* LEFT IMAGE */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/product-20..webp"   // 👈 apni image yahan rakho
            alt="Why Choose Azam Electronics"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-3xl font-bold mb-5 text-gray-900">
              Complete Printer Care for Every Business   
                     </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            At <strong>M Azam Electronics</strong>, we go beyond selling printers, we keep them performing at their best. Our certified technicians offer expert repair, maintenance, and setup services tailored to your specific needs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether it’s installing a new device, fixing an urgent fault, or ensuring consistent output through preventive maintenance, we deliver fast, reliable, and professional support.
          </p>

          {/* BULLET POINTS */}
        
       <a
  href="#"
  className="mt-8 group  inline-flex items-center gap-2 cursor-pointer inline-bloc text-red-500 font-semibold
  border-b-2 border-transparent
  hover:border-red-700
  transition-colors duration-300"
>
  Request a Service Quote
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
