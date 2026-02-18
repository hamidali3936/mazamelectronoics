"use client";
import { Clock, Phone, MessageCircle, Mail } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* heading */}
        <h2 className="text-3xl font-bold mb-2">Our Location</h2>
        <p className="text-gray-600 mb-10">
          Visit our showroom to see our printer collection in person and get expert advice
        </p>

        {/* map box */}
        <div className="bg-white p-4 rounded-2xl shadow">

          {/* GOOGLE MAP */}
          <div className="w-full h-[350px] md:h-[420px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=dubai&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>

          {/* info row */}
          <div className="grid md:grid-cols-4 gap-6 mt-8 text-black text-left">

            {/* opening hours */}
            <div className="flex gap-4 items-start">
              <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                <Clock size={22} />
              </div>
              <div>
                <h4 className="font-semibold">Opening Hours</h4>
                <p className="text-gray-600 text-sm">
                  Mon-Fri: 9am - 6pm <br />
                  Sat: 10am - 4pm
                </p>
              </div>
            </div>

            {/* phone */}
            <div className="flex gap-4 items-start">
              <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600 text-sm">+971 4 456 1407</p>
              </div>
            </div>

            {/* whatsapp */}
            <div className="flex gap-4 items-start">
              <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                <MessageCircle size={22} />
              </div>
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="text-gray-600 text-sm">+971 52 364 5448</p>
              </div>
            </div>

            {/* email */}
            <div className="flex gap-4 items-start">
              <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600 max-w-full md:text-sm ">
                  info@mazamelectronics.com
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
