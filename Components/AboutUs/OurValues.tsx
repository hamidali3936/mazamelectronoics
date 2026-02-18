"use client";

import {
  Lightbulb,
  Heart,
  Globe,
  Award,
} from "lucide-react";

export default function OurValues() {
  return (
    <section className="py-10 px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
         <h2 className="text-3xl md:text-3xl font-bold mb-6 text-black">
         Our Core Values
        </h2>
        <p className="text-gray-700">These principles guide everything we do at M Azam Electronics</p>

        {/* Icons Row */}
        <div className="grid grid-cols-1 mt-15  sm:grid-cols-2 md:grid-cols-4 gap-12">
          <Feature
            icon={<Lightbulb size={25} />}
            title="Innovation"
            text="We constantly explore new printing technologies to bring you cutting-edge solutions."
          />

          <Feature
            icon={<Heart size={25} />}
            title="Customer Focus"
            text="Your satisfaction is our top priority. We go above and beyond to exceed expectations."
          />

          <Feature
            icon={<Globe size={25} />}
            title="Sustainability"
            text="We care about the environment and follow eco-friendly practices in everything we do."
          />

          <Feature
            icon={<Award size={25} />}
            title="Excellence"
            text="We work hard to make sure our products and service are always excellent."
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
        className="w-12 h-12 flex items-center justify-center rounded-full
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
