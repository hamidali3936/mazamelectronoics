export default function OurJourney() {
  const data = [
    {
      year: "2008",
      title: "Founded in",
      desc: "Azam Electronics began its journey in 2008 with a mission to deliver high-quality and affordable printing solutions to offices and businesses.",
    },
    {
      year: "2012",
      title: "Expanded Service Network",
      desc: "Built strong partnerships with leading global printer brands and extended our service coverage across Dubai.",
    },
    {
      year: "2017",
      title: "Dedicated Maintenance & Support",
      desc: "Introduced on-site printer repair and maintenance services, becoming a trusted partner for corporate clients and offices nationwide.",
    },
    {
      year: "2020",
      title: "Digital Presence & E-Commerce",
      desc: "Launched our online store to make it easier for customers to browse, order, and receive printers with free delivery and warranty.",
    },
    {
      year: "2025",
      title: "17 Years of Trusted Service",
      desc: "Today, M Azam Electronics proudly stands as a leading supplier of reliable printers and professional support services.",
    },
  ];

  return (
    <section className="bg-white py-25">
      <div className="max-w-3xl mx-auto px-4">
        
        <h2 className="text-3xl md:text-3xl mb-5 text-black font-bold text-center">
          Our Journey
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Key milestones in Azam Electronics's history
        </p>

        <div className="relative mt-16">

          {data.map((item, i) => (
            <div key={i} className="relative pl-15 ">
              
              {/* red year */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-7 bg-red-600 text-white rounded-full font-bold">
                {item.year}
              </div>

              {/* vertical line under each year */}
              {i !== data.length - 1 && (
                <div className="absolute left-[22px] top-10 w-[4px] h-[100px] bg-gray-300"></div>
              )}

              {/* content */}
              <h3 className="text-xl text-black font-bold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>

              {/* bottom border */}
              {i !== data.length - 1 && (
                <div className="border-b border-gray-300 mt-10"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
