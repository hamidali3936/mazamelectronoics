"use client";
import React from "react";

export default function BrowserPrinter() {
  return (
    <section className=" top-0 left-0 py-15  bg-gradient-to-b from-red-800 to-red-500 flex flex-col justify-center items-center text-center text-white  z-50">
      <h1 className="text-2xl md:text-4xl font-bold mb-5">
       Ready to Find Your Perfect Printer?
      </h1>
      <p className="text-md md:text-[20px] mb-6 max-w-2xl">
       Join thousands of satisfied customers who found their ideal printing solution with us
      </p>
      <div className="flex gap-5">
      <button className=" text-red-600 bg-white text-lg font-bold mt-5 px-8 py-4 border-2 border-white  rounded-md hover: transition">
      <a href="/printers">Browse Printers</a>
      </button>
      
      <button className=" text-white  text-lg font-bold mt-5 px-8 py-4 border-2 border-white  rounded-md hover: transition">
      <a href="/">Contact Our Experts</a>
      </button>
      </div>
    </section>
  );
}
