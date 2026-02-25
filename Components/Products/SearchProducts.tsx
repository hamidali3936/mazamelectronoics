"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame, Search } from "lucide-react";

const products = [
  { id: 1, title: "HP Color LaserJet Enterprise flow MFP M880 Color -", brand: "HP", image: "/23.webp", link: "/products/hp-m880" },
  { id: 2, title: "Ricoh Aficio MP C4504 Color - Refurbished", brand: "Ricoh", image: "/product-image-1761994321816-Ricoh-MP-C4504ex-Low-Meters.webp", link: "/products/ricoh-c4504" },
  { id: 3, title: "Kyocera TASKalfa 4002i Mono - Refurbished", brand: "Kyocera", image: "/product -2.webp", link: "/products/kyocera-4002i" },
  { id: 4, title: "Konica Minolta bizhub C654e Color - Refurbished", brand: "Bizhub", image: "/product -3.webp", link: "/products/bizhub-c654e" },
  { id: 5, title: "Canon imageRUNNER ADVANCE 8505i Mono - Refurbished", brand: "Canon", image: "/25.webp", link: "/products/canon-8505i" },
  { id: 6, title: "Canon imageRUNNER ADVANCE C256i / C356i Color - Refurbished", brand: "Canon", image: "/producted-5.webp", link: "/products/canon-c256i" },
  { id: 7, title: "Canon imageRUNNER ADVANCE C5550i Color - Refurbished", brand: "Canon", image: "/producted-6.webp", link: "/products/hp-m880" },
  { id: 8, title: "Canon imageRUNNER ADVANCE C3530i Color - Refurbished", brand: "Canon", image: "/producted-6.webp", link: "/products/ricoh-c4504" },
  { id: 9, title: "Konica Minolta Bizhub c368i Color - Refurbished", brand: "Bizhub", image: "/producted-7.webp", link: "/products/kyocera-4002i" },
  { id: 10, title: "Belt Tensioner Kit for HP T120 T520 T730 T830 CQ890-60088 ...", brand: "Plotter", image: "/product-9.webp", link: "/products/hp-m880" },
  { id: 11, title: "Plotter Carriage Belt for HP DesignJet T120 T520 T730 T830...", brand: "Plotter", image: "/product-10.webp", link: "/products/ricoh-c4504" },
  { id: 12, title: "Paper Pick Up Roller for HP M712 M725 M750 M775 M5035 M502...", brand: "Printer", image: "/product-11.webp", link: "/products/kyocera-4002i" },
  { id: 13, title: "Compatible Canon C-EXV 29 Toner - Black, Cyan, Magenta...", brand: "Compatible Toners", image: "/product-12.webp", link: "/products/bizhub-c654e" },
  { id: 14, title: "Canon C-EXV 29 Original Toner — Black, Cyan, Magenta, Yellow for..", brand: "Original Toners", image: "/product-14.webp", link: "/products/canon-8505i" },
  { id: 15, title: "Compatible Canon C-EXV 49 Toner - Black, Cyan, Magenta..", brand: "Compatible Toners", image: "/product-13.webp", link: "/products/canon-c256i" },
  { id: 16, title: "Canon C-EXV 49 Original Toner — Black, Cyan, Magenta, Yellow for..", brand: "Original Toners", image: "/product-15.webp", link: "/products/hp-m880" },
  { id: 17, title: "Compatible Canon C-EXV 28 Toner – Black, Cyan, Magenta;..", brand: "Compatible Toners", image: "/product-16.webp", link: "/products/ricoh-c4504" },
  { id: 18, title: "Canon C-EXV 65 Original Toner Cartridge for Canon..", brand: "Original Toners", image: "/product-17.webp", link: "/products/kyocera-4002i" },
];
const categories = [
  {
    title: "Photocopiers & Printers",
    items: ["HP", "Canon", "Bizhub", "Kyocera", "Sharp", "Ricoh", "Epson"],
  },
  {
    title: "Paper Products",
    items: ["Copy & Printing Paper", "Plotter & Thermal Cash Rolls"],
  },
  {
    title: "Toner Cartridge",
    items: ["Original Toners", "Compatible Toners"],
  },
  {
    title: "Spare Parts And Consumables",
    items: ["Photocopier Printer", "Printer", "Plotter"],
  },
];

export default function SearchProducts() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const handleCheckbox = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const clearAll = () => {
    setSelectedBrands([]);
    setSearch("");
  };

  const filteredProducts = products.filter((product) => {
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    const searchMatch =
      search.trim() === "" ||
      product.brand.toLowerCase().includes(search.toLowerCase());

    return brandMatch && searchMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto px-2 flex flex-col lg:flex-row gap-6">

        {/* SIDEBAR */}
        <div className="w-full md:w-90 bg-white rounded-xl shadow-sm p-5 h-fit">
          <h2 className="text-lg text-black font-semibold mb-4">Search Products</h2>

          <div className="relative mb-6">
            <Search size={18} className="absolute left-2 top-1/3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by brand..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg px-8 py-2 text-green-500 outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <h3 className="font-bold text-[18px] text-gray-900 mb-3">Categories</h3>
  {categories.map((category) => (
    <div key={category.title} className="mt-6">
      <p className="text-black font-semibold">
        {category.title}
      </p>

      <div className="space-y-1 pl-4 text-gray-600">
        {category.items.map((brand) => (
          <label key={brand} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleCheckbox(brand)}
              className="size-4"
            />
            {brand}
          </label>
        ))}
      </div>
    </div>
  ))}

     

</div>

          <button
            onClick={clearAll}
            className="mt-6 w-full bg-gray-300 text-gray-700 py-2 rounded-lg"
          >
            Clear All
          </button>
        </div>

        {/* PRODUCTS */}
        <div className="w-full">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={product.link}
                className="block bg-white rounded-xl shadow-sm border hover:shadow-md hover:-translate-y-1 transition-transform duration-400 relative overflow-hidden"
              >
                <div className="relative bg-gray-100 h-60 flex items-center justify-center rounded-t-xl">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={160}
                    height={200}
                    className="w-full h-[240px] object-contain"
                  />
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-red-700 to-yellow-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Flame size={13} /> Trending
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-md font-bold hover:text-red-500 text-gray-800 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 border-b   border-gray-200 pb-4 mb-4">
                    {product.brand}
                  </p>

                  <span className="group text-red-600 font-semibold inline-flex items-center gap-2">
                    Read More
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}