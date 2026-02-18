"use client";

import { div } from "framer-motion/client";
import Link from "next/link";

export default function BlogHeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-red-900 to-black text-white py-15 pt-38   overflow-hidden">
      
      {/* Breadcrumb */}
      <div className="absolute top-15 left-8 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition">
          Home
        </Link>
        <span className="mx-3 text-red-500">/</span>
        <span className="text-black">
          Blog
        </span>
      </div>

      {/* Center Content */}
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          printer maintenance tips
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-gray-200 ml-0 md:ml-20 w-full md:w-[680px]">
Our blog is where we share simple, practical advice to help businesses get the most out of their office printers and photocopiers. From maintenance tips to buying guides and technical know how, every article is written to help you make better decisions and avoid common printing issues. If you're searching for reliable printer maintenance tips, our articles provide clear guidance to keep your equipment running smoothly.        </p>
      </div>
      
    </section>
    
  );
}
