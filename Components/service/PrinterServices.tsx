"use client";

import {
  Settings,
  Wrench,
  RefreshCcw,
  Box,
  User,
  ShieldCheck,
} from "lucide-react";

export default function PrinterServices() {
  const services = [
    {
      icon: Settings,
      title: "Printer Setup & Installation",
      desc: "Professional setup and configuration services to ensure your printer is ready to perform from day one.",
      items: [
        "Unboxing and hardware assembly",
        "Driver and software installation",
        "Network and Wi-Fi setup",
        "Test printing verification",
        "Basic user guidance",
      ],
    },
    {
      icon: Wrench,
      title: "Printer Repair & Maintenance",
      desc: "Reliable repair and preventive maintenance for all major printer brands and models.",
      items: [
        "Full diagnostic checks",
        "Component and part replacement",
        "Print head cleaning and calibration",
        "Performance optimization",
        "Scheduled preventive maintenance",
      ],
    },
    {
      icon: RefreshCcw,
      title: "Toner & Ink Supply",
      desc: "Genuine toner and ink replacement services with professional handling and timely delivery.",
      items: [
        "OEM and high-yield cartridges",
        "Eco-friendly recycling program",
        "Scheduled refills and restocking",
        "Bulk purchase options",
        "On-site installation support",
      ],
    },
    {
      icon: Box,
      title: "Printer Leasing Solutions",
      desc: "Flexible leasing and rental options designed for startups, offices, and large organizations.",
      items: [
        "Short- and long-term leasing plans",
        "Wide selection of latest printer models",
        "Maintenance and support included",
        "Easy upgrade options",
        "Cost-effective, tax-friendly terms",
      ],
    },
    {
      icon: User,
      title: "On-Site Technical Support",
      desc: "Fast, professional support at your location to resolve printing issues with minimal downtime.",
      items: [
        "Same-day response available",
        "Hardware and network troubleshooting",
        "Emergency repair handling",
        "Print server and connectivity setup",
        "Staff usage training sessions",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Extended Warranty Plans",
      desc: "Comprehensive protection coverage for printers, ensuring long-term reliability and cost savings.",
      items: [
        "1–3 year extended coverage",
        "Accidental damage protection",
        "Priority repair and service",
        "Loaner printer availability",
        "Free scheduled maintenance visits",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto px-3">

        {/* Section Heading */}
        <div className="text-center  mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Printer Services
          </h2>
          <p className="text-gray-600 mt-3">
            Comprehensive solutions to keep your printing operations efficient
            and reliable.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 mb-4">
                  <Icon className="text-red-600" size={20} />
                </div>

                {/* Title */}
                <h3 className=" font-bold text-xl text-gray-900 mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-md mb-4 leading-relaxed">
                  {service.desc}
                </p>

                <hr className="mb-4" />

                {/* List */}
                <h4 className="text-md font-semibold text-gray-800 mb-3">
                  Service Includes:
                </h4>

                <ul className="space-y-2 text-md text-gray-600">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 w-4 md:w-5  h-4 md:h-5 rounded-full border-6 bg-red-600 border-red-100"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
