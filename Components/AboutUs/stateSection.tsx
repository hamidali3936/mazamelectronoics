// components/StatsSection.jsx
"use client";

export default function StatsSection() {
  const stats = [
    { value: "10K+", label: "Happy Customers" },
    { value: "17+", label: "Years of Experience" },
    { value: "50+", label: "Printer Products" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  return (
    <section className="bg-red-600 py-15">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-7 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {stat.value}
            </h2>
            <p className="text-white mt-2 text-md">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
