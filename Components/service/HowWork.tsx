"use client";

import {
  Headphones,
  Printer,
  Wrench,
  ShieldCheck,
  User,
} from "lucide-react";

export default function HowWork() {
  const steps = [
    {
      icon: Headphones,
      title: "Initial Consultation",
      desc: "We start by understanding your printing setup, workflow, and specific business requirements.",
    },
    {
      icon: Printer,
      title: "Customized Solution Design",
      desc: "Our team recommends the right printers, services, or maintenance plans tailored to your needs.",
    },
    {
      icon: Wrench,
      title: "Professional Implementation",
      desc: "Certified technicians handle setup, installation, and configuration with minimal disruption.",
    },
    {
      icon: ShieldCheck,
      title: "Testing & Quality Assurance",
      desc: "Every setup and repair undergoes full testing to guarantee optimal print performance and reliability.",
    },
    {
      icon: User,
      title: "Ongoing Support & Maintenance",
      desc: "We provide continuous technical support, scheduled maintenance, and prompt assistance when needed.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      {/* 🔥 Animation Style Inside Same File */}
     <style jsx>{`
  @keyframes zoomRing {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    70% {
      transform: scale(2);
      opacity: 0.5;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .animate-zoomRing {
    animation: zoomRing 1s infinite ease-out;
  }
`}</style>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">
          How We Work
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          A simple, transparent process that ensures every client gets reliable
          service and lasting results.
        </p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10 text-center max-w-7xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={index} className="flex flex-col items-center">

              {/* Number with Zoom Border */}
              <div className="relative mb-4 w-18 h-18 flex items-center justify-center">
                
                {/* Animated Dashed Border */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-300  animate-zoomRing"></div>

                {/* Red Circle */}
                <div className="relative w-16 h-16 flex items-center justify-center bg-red-600 text-white text-lg font-bold rounded-full">
                  {index + 1}
                </div>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100 mb-4">
                <Icon className="text-red-600" size={22} />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-md leading-relaxed max-w-[180px]">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
