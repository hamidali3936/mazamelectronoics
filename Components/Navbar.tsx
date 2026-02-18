"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Productes", path: "/Productes" },
    { name: "Services", path: "/Services" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Contact Us", path: "/ContactUs" },
    { name: "Blog", path: "/Blog" },
  ];

  const linkClasses = (path: string) =>
    `pb-1 transition-all duration-200 ${
      pathname === path
        ? "text-red-600 border-b-2 border-red-600"
        : "hover:text-red-600 hover:border-b-2 hover:border-red-600"
    }`;

  return (
    <nav className="bg-white shadow-sm">
      <div className="w-full mx-auto px-4 md:px-5 py-7">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <Image
              src="/logo.webp"
              alt="Logo"
              width={100}
              height={35}
              priority
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-800 md:text-black font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className={linkClasses(link.path)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex text-gray-700 md:hidden items-center">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="text-black md:hidden bg-white border-t">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={linkClasses(link.path)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
