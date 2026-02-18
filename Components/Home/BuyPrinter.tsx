"use client";
import React from "react";

export default function BuyPrinter() {
  return (
    <section className=" top-0 left-0 py-15  bg-gradient-to-b from-red-700 to-red-500 flex flex-col justify-center items-center text-center text-white px-4 z-50">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to Buy the Perfect Printer?
      </h1>
      <p className="text-md md:text-md mb-6 max-w-xl">
        Join thousands of satisfied businesses and professionals across Dubai,
        who trust <strong>Azam Electronics</strong> for reliable, high-quality
        printers and expert support — all at unbeatable prices.
      </p>
      <button className="bg-white text-red-700 font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition">
      <a href="/printers">Shop Printers</a>
      </button>
    </section>
  );
}
