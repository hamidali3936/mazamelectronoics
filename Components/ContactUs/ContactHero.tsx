"use client";

import { div } from "framer-motion/client";
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-r from-red-900 to-black text-white py-15 pt-38   overflow-hidden">
      
      {/* Breadcrumb */}
      <div className="absolute top-15 left-8 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition">
          Home
        </Link>
        <span className="mx-3 text-red-500">/</span>
        <span className="text-black">
          Contact Us
        </span>
      </div>

      {/* Center Content */}
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          Contact Printer Supplier Dubai,UAE
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-gray-200 ml-0 md:ml-20 w-full md:w-[700px]">
         Have a question or need help choosing the right printer or photocopier? Our team is here to guide you. Whether you're looking for a rental plan, service support, or product recommendation, feel free to contact us we respond quickly and make the process simple. If you're trying to contact printer supplier Dubai,uae experts, our team is ready to assist you with fast and helpful support.
        </p>
      </div>
      
    </section>
    
  );
}
