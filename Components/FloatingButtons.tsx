"use client";
import { Phone, Mail } from "lucide-react";
import { MessageCircle } from "lucide-react";


export default function FloatingButtons() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/971523645448"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition"
      >
        <MessageCircle className="text-white text-2xl size-5" />
      </a>

      {/* Call */}
      <a
        href="tel:+97144561407"
        className="bg-red-600 hover:bg-red-700 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition"
      >
        <Phone className="text-white siz-3" />
      </a>

      {/* Email */}
      <a
        href="mailto:info@mazamelectronics.com"
        className="bg-black hover:bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition"
      >
        <Mail className="text-white siz-3" />
      </a>

    </div>
  );
}
