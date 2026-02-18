"use client";

import {
  Truck,
  Shield,
  Headphones,
  Box,
} from "lucide-react";
import React from "react";

export default function OurPromise() {
  return (
    <section className="py-10 px-10 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-3xl font-bold mb-5  text-black">
           Our Promise to You 
        </h2>
        <p className="text-md text-gray-600">
           What makes M Azam Electronics a trusted choice
        </p>

        {/* Icons Row */}
        <div className="grid grid-cols-1 mt-15 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Feature
            icon={<Box size={33} />}
            title="Quality Products"
            text="We only carry printers from trusted global brands that meet our strict performance and durability standards."
          />
          <Feature
            icon={<Truck size={33} />}
            title="Fast & Reliable Delivery"
            text="Enjoy quick and secure delivery, with most orders arriving within 1–3 business days."
          />
          <Feature
            icon={<Headphones size={33} />}
            title="Expert Customer Support"
            text="Our dedicated support team is always ready to help with installation, maintenance, or technical queries."
          />
          <Feature
            icon={<Shield size={33} />}
            title="Worry-Free Warranty"
            text="All printers come with a 1-year manufacturer warranty, giving you complete peace of mind after purchase."
          />
        </div>
      </div>
    </section>
  );
}

/* 🔹 Feature Props Type */
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

/* 🔹 Feature Component */
function Feature({ icon, title, text }: FeatureProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl py-8 items-center text-center">

      {/* Icon */}
      <div
        className="w-15 h-15 flex items-center justify-center rounded-full
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
      <p className="text-gray-600 w-[230px] text-md transition-colors duration-300 group-hover:text-gray-800">
        {text}
      </p>
    </div>
  );
}
