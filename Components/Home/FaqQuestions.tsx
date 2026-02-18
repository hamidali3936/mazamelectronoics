"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What types of printers do you offer?",
    answer: "We offer a wide range of office and business printers from leading global brands such as HP, Canon, Konica Minolta, Ricoh, and more. Our collection includes laser, multifunction, and high-performance models suitable for every professional need.",
  },
  {
    question: "Do you provide printer installation and setup?",
    answer: "Yes, our expert technicians offer free printer installation and setup support for all printers purchased through M Azam Electronics. We ensure your printer is configured and ready for use.",
  },
  {
    question: "Do you offer printer repair or maintenance services?",
    answer: "Absolutely. We provide comprehensive printer repair, annual maintenance contracts, toner supply, and rental services to keep your business running smoothly.",
  },
  {
    question: "How long does delivery take?",
    answer: "We offer fast and secure delivery across Dubai. Orders are typically delivered within 1–3 business days, depending on your location.",
  },
  {
    question: "Is there a warranty on the printers?",
    answer: "Yes, all our printers come with a standard 1-year manufacturer warranty covering parts and service for complete peace of mind.",
  },
];

export default function FaqQuestions() {
  // ✅ specify type: number | null
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ✅ specify index type
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16">
      <h1 className="text-3xl text-black font-bold mb-2">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-8 text-center max-w-xl">
        Find answers to common questions about our printers, services, and policies
      </p>

      <div className="bg-white rounded-xl text-black shadow-md w-full max-w-3xl overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index} className={`border-b border-gray-200 last:border-b-0`}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-red-500 text-xl">
                {openIndex === index ? "×" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
