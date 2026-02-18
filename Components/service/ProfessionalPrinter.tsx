"use client";
import React from "react";

export default function ProfessionalPrinter() {
  return (
    <section className=" top-0 left-0 py-15  bg-gradient-to-b from-red-800 to-red-500 flex flex-col justify-center items-center text-center text-white  z-50">
      <h1 className="text-2xl md:text-4xl font-bold mb-5">
        Need Professional Printer Support?
      </h1>
      <p className="text-md md:text-[20px] mb-6 max-w-2xl">
       Whether it’s printer installation, repair, or regular maintenance,<strong> M Azam Electronics </strong>provides expert on-site service and fast support.
      </p>
      <button className=" text-white  text-lg font-bold mt-5 px-8 py-4 border-2 border-white  rounded-md hover: transition">
      <a href="/printers">Contact Us</a>
      </button>
    </section>
  );
}
