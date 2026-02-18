"use client";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function SubmitForm() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl text-black font-bold mb-8">Send Us a Message</h2>

          <form className="space-y-5  text-gray-800">
            {/* name + email */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 text-gray-800 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* subject */}
            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                placeholder="How can we help you?"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* message */}
            <div>
              <label className="block mb-2 font-medium">Your Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your printer needs..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            {/* button */}
            
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-gray-900">
          <h2 className="text-2xl font-bold mb-5">Connect With Us</h2>

          <div className="bg-gray-50 rounded-xl p-7">
            <h3 className="text-xl font-semibold mb-2">
              Follow us on social media
            </h3>
            <p className="text-gray-600 mb-6">
              Stay updated with our latest printer models, promotions, and tech tips
            </p>

            {/* icons */}
            <div className="flex gap-4">
              <div className="bg-white p-3 rounded-full shadow cursor-pointer hover:bg-red-600 hover:text-white transition">
                <a href=""><Facebook size={20} /></a>
                
              </div>

              <div className="bg-white p-3 rounded-full shadow cursor-pointer hover:bg-red-600 hover:text-white transition">
                <a href=""><Twitter size={20} /></a>
                
              </div>

              <div className="bg-white p-3 rounded-full shadow cursor-pointer hover:bg-red-600 hover:text-white transition">
                <a href=""><Instagram size={20} /></a>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
