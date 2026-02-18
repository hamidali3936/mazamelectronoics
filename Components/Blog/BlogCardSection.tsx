"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogCardSection() {
  return (
    <section className="bg-gray-100 py-10  px-8">
      <div className="max-w-7xl mx-auto">

        {/* top text */}
        <p className="text-center text-gray-600 -my-10 -mx-4 py-8 px-5 mb-15 bg-white  text-lg">
          Whether you're looking to cut printing costs, compare models, or troubleshoot everyday problems, this section is created to support you with clear, useful information.
        </p>

        {/* blog card */}
        <div className="max-w-sm bg-white my-5 rounded-xl overflow-hidden shadow hover:shadow-lg transition">

          {/* image */}
          <div className="relative w-full h-[160px]">
            <Image
              src="/product-22..webp"   // apni image public folder me dalna
              alt="blog"
              fill
              className="object-cover"
            />
          </div>

          {/* content */}
          <div className="p-5">
            <p className="text-gray-500 text-sm mb-2">Oct 8, 2025</p>

            <h3 className=" text-gray-900 text-[17px] font-bold mb-3 leading-snug">
              Why Multifunction Printers Are a Game-Changer for Small Businesses in the UAE
            </h3>

            <p className="text-gray-600 mb-4">
              Small businesses in Dubai and Abu Dhabi are juggling budgets and space—enter multifunction printers (MFPs). Combining print, scan, copy, and fax in on...
            </p>

            {/* read more */}
            <Link
              href="/blog-details"
              className="text-red-600 font-semibold flex items-center gap-2 hover:gap-3 transition"
            >
              Read more
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
