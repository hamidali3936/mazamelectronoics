"use client"; // client component zaruri hai

import { Truck, ShieldCheck, Headphones, CreditCard, Mail, Phone, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Productes", path: "/Productes" },
    { name: "Services", path: "/Services" },
    { name: "AboutUs", path: "/AboutUs" },
    { name: "Contact Us", path: "/ContactUs" },
    { name: "Blog", path: "/Blog" },
    { name: "Campaigns", path: "/campaigns" },
  ];

  const linkClasses = (path: string) =>
    `hover:text-red-500 transition-colors ${
      pathname === path ? "text-red-600 font-semibold" : "text-gray-600"
    }`;

  return (
    <footer className="bg-white border-t">
      {/* TOP INFO BAR */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto text-gray-900 grid grid-cols-2 md:grid-cols-4 gap-6 py-6 px-4 text-sm">
          <Info icon={<Truck />} text="Fast UAE Delivery on All Orders" />
          <Info icon={<ShieldCheck />} text="1-Year Manufacturer Warranty" />
          <Info icon={<Headphones />} text="24/7 Technical & Customer Support" />
          <Info icon={<CreditCard />} text="Secure Online Payments" />
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-14 px-4">
        {/* LEFT */}
        <div>
          <div className="font-bold mb-4">
            <Image src="/logo.webp" alt="Logo" width={100} height={30} priority />
          </div>
          <p className="text-gray-600 mb-4">
            Your trusted printer partner. Shop office, home, and commercial printers at unbeatable prices.
          </p>
          <div className="flex gap-4 text-gray-600">
            <Facebook className="hover:text-red-600 cursor-pointer" />
            <Twitter className="hover:text-red-600 cursor-pointer" />
            <Instagram className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* CENTER - Quick Links */}
        <div>
          <h3 className="text-lg text-black font-semibold mb-4 border-b w-full border-red-500 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-600">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className={linkClasses(link.path)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4 border-b w-full border-red-500 inline-block">
            Contact Information
          </h3>
          <div className="space-y-4 text-gray-600">
            <p className="flex items-center gap-2"><Mail className="text-red-500" /> info@mazamelectronics.com</p>
            <p className="flex items-center gap-2"><Phone className="text-red-500" /> +971 4 456 1407</p>
            <p className="flex items-center gap-2"><MessageCircle className="text-red-500" /> +971 52 364 5448</p>
            <p>
              Serving customers across <span className="font-semibold">Dubai, Abu Dhabi, Sharjah</span> and all UAE regions.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © 2008–2026 M Azam Electronics — All Rights Reserved.
      </div>
    </footer>
  );
}

function Info({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 font-medium">
      <span className="text-red-500">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
