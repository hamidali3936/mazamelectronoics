"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";

const products = [
  {
    id: 1,
    title: "HP Color LaserJet Enterprise flow MFP M880 Color - Refurbished",
    brand: "HP",
    image: "/23.webp",
    link: "/products/hp-m880",
  },
  {
    id: 2,
    title: "Ricoh Aficio MP C4504 Color - Refurbished",
    brand: "Ricoh",
    image: "/product-image-1761994321816-Ricoh-MP-C4504ex-Low-Meters.webp",
    link: "/products/ricoh-c4504",
  },
  {
    id: 3,
    title: "Kyocera TASKalfa 4002i Mono - Refurbished",
    brand: "Kyocera",
    image: "/product -2.webp",
    link: "/products/kyocera-4002i",
  },
  {
    id: 4,
    title: "Konica Minolta bizhub C654e Color - Refurbished",
    brand: "Bizhub",
    image: "/product -3.webp",
    link: "/products/bizhub-c654e",
  },
  {
    id: 5,
    title: "Canon imageRUNNER ADVANCE 8505i Mono - Refurbished",
    brand: "Canon",
    image: "/25.webp",
    link: "/products/canon-8505i",
  },
  {
    id: 6,
    title: "Canon imageRUNNER ADVANCE C256i / C356i Color - Refurbished",
    brand: "Canon",
    image: "/producted-5.webp",
    link: "/products/canon-c256i",
  },
];

export default function TrendingPrinters() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-black">Trending Printers</h2>
            <p className="text-gray-500 mt-1">Discover our most popular products</p>
          </div>
          <Link
            href="/products"
            className="text-red-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            View all products <ArrowRight size={18} />
          </Link>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.slice(0, 4).map((item) => (
            <div key={item.id} className="border rounded-2xl overflow-hidden bg-white hover:-translate-y-2 transition-transform duration-500 relative">
              <Link href={item.link}>
                <div className="relative bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-[240px] object-contain"
                  />
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-red-700 to-yellow-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Flame size={13} /> Trending
                  </span>
                </div>
              </Link>
              <div className="p-5">
                <Link href={item.link}>
                  <h3 className="font-semibold text-black mb-2 line-clamp-2 hover:text-red-600">{item.title}</h3>
                </Link>
                <p className="text-sm border-b-1 border-gray-200 pb-4 text-gray-500 mb-2">{item.brand}</p>
                <Link href={item.link} className="text-red-600 font-semibold inline-flex items-center gap-2">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {products.slice(4, 6).map((item) => (
              <div key={item.id} className="border rounded-2xl overflow-hidden bg-white hover:-translate-y-2 transition-transform duration-500 relative">
                <Link href={item.link}>
                  <div className="relative bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="w-full h-[250px] object-contain"
                    />
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-red-700 to-yellow-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <Flame size={13} /> Trending
                    </span>
                  </div>
                </Link>
                <div className="p-5">
                    <Link href={item.link}>
                  <h3 className="font-semibold text-black mb-2 line-clamp-2 hover:text-red-600">{item.title}</h3>
                    </Link>
                  <p className="text-sm text-gray-500 border-b border-gray-200 pb-4 mb-4">{item.brand}</p>
                  <Link href={item.link} className="text-red-600 font-semibold inline-flex items-center gap-2">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right – More Products */}
          <Link
            href="/products"
            className="rounded-2xl border-2 border-dashed border-red-300 bg-red-50 flex flex-col items-center justify-center text-center p-12 hover:scale-102 transition-transform duration-800"
          >
            <div className="bg-red-100 p-6 rounded-full text-3xl mb-6">🖨️</div>
            <h3 className="text-xl text-black font-semibold mb-2">More Products</h3>
            <p className="text-gray-600 mb-6">Explore our full catalog of printers & accessories</p>
            <span className="text-red-600 font-semibold inline-flex items-center gap-2">
              Browse all <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
