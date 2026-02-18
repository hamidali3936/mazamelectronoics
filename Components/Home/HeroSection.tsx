"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Looking for a photocopier rental in Dubai?",
    desc: "We provide reliable and high performance photocopier rental solutions for offices and businessesWe provide reliable and high performance photocopier rental solutions for offices, schools, and businesses of all sizes.Enjoy fast delivery, reliable performance, and complete service support including maintenance and toner replacement.Our goal is to make your printing and copying hassle free so you can focus on your business.",
    image: "/trusted.webp",
    button: "Shop Now",
  },
  {
    title: "Looking for a photocopier on installment in Dubai?",
    desc: "We provide photocopiers on easy monthly installment plans including maintenance and technical support ent in Dubai? We provide photocopiers on easy monthly installment plans to make your office setup affordable and flexible. Get the latest photocopiers from top brands with easy installment plans, including full maintenance and technical support..",
    image: "/installment.webp",
    button: "Shop Now",
  },
  {
    title: "Searching reliable toner cartridges in Dubai?",
    desc: "We supply high quality toner and cartridges for all major printer and photocopier brands at affordable prices We provide reliable photocopier maintenance services to keep your machines running smoothly and efficiently. Our expert technicians offer regular maintenance, quick repairs, and full support to minimize downtime and ensure top performance.",
    image: "/repair.webp",
    button: "View Rental",
  },
   {
    title: "Searching reliable toner cartridges in Dubai?",
    desc: "We supply high quality toner and cartridges for all major printer and photocopier brands at affordable prices We supply high quality toner and cartridges for all major printer and photocopier brands at affordable prices. Keep your printers running smoothly with our reliable toner and cartridge supply service, quality you can trust every time.",
    image: "/toner.webp",
    button: "View Rental",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function HeroSlider() {
  const [[index, direction], setSlide] = useState([0, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setSlide(([prev]) => [
      (prev - 1 + slides.length) % slides.length,
      -1,
    ]);
  };

  const nextSlide = () => {
    setSlide(([prev]) => [
      (prev + 1) % slides.length,
      1,
    ]);
  };

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-900 to-black text-white">
      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20"
      >
        <ArrowLeft size={36} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20"
      >
        <ArrowRight size={36} />
      </button>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-6xl mx-auto  py-24 grid md:grid-cols-2 gap-20 items-center"
        >
          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-4xl font-bold mb-4">
              {slide.title}
            </h1>

            <p className="text-gray-200 mb-6 max-w-xl">
              {slide.desc}
            </p>

            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg">
              {slide.button}
            </button>
          </div>

          {/* IMAGE */}
          <img
            src={slide.image}
            alt="Hero"
             width={450}
              height={35}
            className=" shadow-lg "
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
