"use client";

import Image from "next/image";

const points = [
  "Personalized guidance to help you choose the right printer for your office or business",
  "Free printer setup and easy installation support",
  "Competitive prices and special discounts on premium printer models",
  "Fast and secure delivery across Dubai",
  "24/7 customer support to ensure your satisfaction",
];

export default function PrintingNeeds() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w- px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/helper.webp"   // 👈 apni image yahan rakho
            alt="Why Choose Azam Electronics"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-3xl font-bold mb-5 text-gray-900">
            Why Choose Azam Electronics for Your Printing Needs?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            At <strong>Azam Electronics</strong>, we’re dedicated to providing high-quality
            printing solutions for offices and businesses. With over{" "}
            <strong>17 years of experience</strong>, in printer sales and support, we proudly
            offer a handpicked range of reliable printers from leading global brands,
            all backed by trusted local service and customer care.
          </p>

          {/* BULLET POINTS */}
          <ul className="space-y-4">
            {points.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1 w-4 md:w-5  h-4 md:h-5 rounded-full border-6 border-red-500"></span>
                <p className="text-gray-700">{item}</p>
              </li>
            ))}
          </ul>
       <a
  href="#"
  className="mt-10 inline-block text-red-700 font-semibold
  border-b-2 border-transparent
  hover:border-red-700
  transition-colors duration-300"
>
  Learn more about Azam Technologies
</a>


        </div>
      </div>
    </section>
  );
}
