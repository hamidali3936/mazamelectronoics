"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  { id: 1, image: "/productesimage2.jpg", alt: "Slide 1" },
  { id: 2, image: "/Productesimag1.jpg", alt: "Slide 2" },
  { id: 3, image: "/productesimage3.jpg", alt: "Slide 3" },
  { id: 4, image: "/productesimage4.jpg", alt: "Slide 4" },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function HeroSection() {
  const [[index, direction], setSlide] = useState([0, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setSlide(([prev]) => [(prev - 1 + slides.length) % slides.length, -1]);

  const nextSlide = () =>
    setSlide(([prev]) => [(prev + 1) % slides.length, 1]);

  const slide = slides[index];

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow hover:bg-gray-400"
      >
        <ArrowLeft size={15} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow hover:bg-gray-400"
      >
        <ArrowRight size={15} />
      </button>

      {/* SLIDE */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full md:h-[325px] object-cover"
            style={{
              imageRendering: "auto",
            }}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
