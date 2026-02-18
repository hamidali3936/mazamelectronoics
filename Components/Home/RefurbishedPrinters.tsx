"use client";

import {
  Truck,
  ShieldCheck,
  Headphones,
  Printer,
} from "lucide-react";

export default function RefurbishedPrinters() {
  return (
    <section className="py-10 px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
          Refurbished Printers Dubai, UAE
        </h2>
<div className="text-[18px]">
        {/* Description */}
        <p className="text-gray-600 max-w-10xl mx-auto mb-6 leading-relaxed">
         At Mazam Electronics, we help businesses run smoothly with affordable, high quality office printers and photocopiers. Every refurbished machine we offer is carefully inspected, fully tested, and restored to deliver the same dependable performance you'd expect from new equipment at a much better price. Our refurbished printers Dubai,UAE solutions help companies reduce costs while maintaining top-quality output.
        </p>

        <p className="text-gray-600 max-w-10xl mx-auto mb-6 leading-relaxed">
         Whether your business needs a cost efficient printer for daily tasks or a high volume photocopier for corporate operations, we provide both sales and  rental plans across the UAE. We offer one of the most reliable ranges of refurbished printers Dubai,UAE, designed for long-term business use.
        </p>

        <p className="text-gray-600 max-w-10xl mx-auto mb-16 leading-relaxed">
          Our team assists with installation, setup, and ongoing support, making it easier for you to focus on work while we handle your printing needs.
        </p>
        </div>

        {/* Icons Row */}
        <div className="grid grid-cols-1 mt-25  sm:grid-cols-2 md:grid-cols-4 gap-12">
          <Feature
            icon={<Truck size={30} />}
            title="Fast UAE Delivery"
            text="We provide fast and secure delivery across Dubai."
          />

          <Feature
            icon={<ShieldCheck size={30} />}
            title="1-Year Warranty"
            text="All our printers are covered with a 1-year manufacturer warranty for complete peace of mind."
          />

          <Feature
            icon={<Headphones size={30} />}
            title="24/7 Customer Support"
            text="Our dedicated support team is available round-the-clock to assist you with any printer-related queries."
          />

          <Feature
            icon={<Printer size={30} />}
            title="Expert Printer Services"
            text="We offer professional printer repair, annual maintenance contracts, toner supply, and printer rentals for all major brands."
          />
        </div>
      </div>
    </section>
  );
}

/* 🔹 Simple Hover Feature (NO CARD) */
function Feature({ icon, title, text }) {
  return (
    <div className="group flex flex-col items-center text-center
      transition-transform duration-300 hover:scale-105">

      {/* Icon */}
      <div
        className="w-13 h-13 flex items-center justify-center rounded-full
        bg-red-100 text-red-600 mb-4
        transition-all duration-300
        group-hover:bg-white-600 group-hover:text-red"
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-2 text-black transition-colors duration-300 ">
        {title}
      </h3>

      {/* Text */}
      <p className="text-gray-600 w-[200px] text-md transition-colors duration-300 group-hover:text-gray-800">
        {text}
      </p>
    </div>
  );
}
