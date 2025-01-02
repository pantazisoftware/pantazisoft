"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Database,
  ShoppingCart,
  Home,
  Truck,
  Building2,
  Briefcase,
  Factory,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    name: "Data Management",
    description:
      "Efficient handling of complex data structures and analytics for informed decision-making.",
    icon: Database,
    color: "text-blue-600",
  },
  {
    name: "E-Commerce",
    description:
      "Scalable online retail solutions and digital marketplaces to boost your digital presence and sales.",
    icon: ShoppingCart,
    color: "text-green-600",
  },
  {
    name: "Real Estate",
    description:
      "Smart property management and rental platforms to streamline operations and enhance user experience.",
    icon: Home,
    color: "text-purple-600",
  },
  {
    name: "Logistics",
    description:
      "Optimized supply chain and delivery management systems for improved efficiency and tracking.",
    icon: Truck,
    color: "text-orange-600",
  },
  {
    name: "Construction",
    description:
      "Digital solutions for property development and management to streamline projects and reduce costs.",
    icon: Building2,
    color: "text-pink-600",
  },
  {
    name: "Corporate",
    description:
      "Enterprise-level business management applications to enhance productivity and decision-making.",
    icon: Briefcase,
    color: "text-yellow-600",
  },
  {
    name: "Manufacturing",
    description:
      "Smart factory and production management tools to optimize processes and increase output quality.",
    icon: Factory,
    color: "text-teal-600",
  },
  {
    name: "Innovation",
    description:
      "Cutting-edge solutions for emerging industries, fostering growth and technological advancement.",
    icon: Lightbulb,
    color: "text-indigo-600",
  },
];

export default function Industries2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + industries.length) % industries.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative  bg-white py-24 px-4 overflow-hidden font-sans">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20">
          <h2 className="text-xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 max-w-2xl">
            Industries
          </h2>
          <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
            Focus and dedication in every industry for outstanding results
          </p>
        </motion.div>

        {/* Industries Carousel */}
        <div
          className="relative overflow-hidden h-[550px] flex flex-col justify-between"
          ref={carouselRef}>
          <div className="flex items-center justify-center h-full">
            {industries.map((industry, index) => {
              const offset =
                (index - currentIndex + industries.length) % industries.length;
              const isActive = offset === 0 || offset === 1;
              const isThird = offset === 2;
              return (
                <motion.div
                  key={industry.name}
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                  initial={false}
                  animate={{
                    x: `${offset * 50 - 25}%`,
                    scale: isActive ? 1 : isThird ? 0.9 : 0.8,
                    opacity: isActive ? 1 : isThird ? 0.3 : 0,
                    zIndex: isActive ? 2 : 1,
                    skew: isThird ? "5deg" : "0deg",
                  }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                    skew: { duration: 0.2 },
                  }}>
                  <div
                    className={`bg-white p-10 rounded-lg transition-all duration-300 shadow-xl border border-gray-100 ${
                      isActive ? "w-[45%]" : "w-[30%]"
                    }`}>
                    <div className={`mb-8 ${industry.color}`}>
                      <industry.icon className="w-16 h-16" />
                    </div>
                    <h3 className="text-3xl font-semibold mb-6 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between items-center z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={prevSlide}>
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={nextSlide}>
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        {/* Asymmetric decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-green-50 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob"></div>
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
