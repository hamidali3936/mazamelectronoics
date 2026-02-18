"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-r from-red-900 to-black text-white py-15 pt-35 overflow-hidden">
      
      {/* Breadcrumb */}
      <div className="absolute top-15 left-8 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition">
          Home
        </Link>
        <span className="mx-3 text-red-500">/</span>
        <span className="text-black">
          About Us
        </span>
      </div>

      {/* Center Content */}
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          Printer Supplier Dubai, UAE
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-gray-200">
          Delivering trusted printer sales, maintenance, and repair solutions
          since <br /><span className="font-semibold text-white">2008</span>
        </p>
      </div>
    </section>
  );
}
