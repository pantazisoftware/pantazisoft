"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Palette,
  Globe,
  Zap,
  Database,
  ShoppingCart,
  Search,
  Gauge,
} from "lucide-react";

const capabilities = [
  {
    name: "Custom Web Applications",
    description:
      "Tailored solutions to meet your specific business needs and challenges.",
    icon: Code,
    color: "text-blue-600",
    delay: 0.2,
  },
  {
    name: "UI/UX Design",
    description:
      "Intuitive and engaging user interfaces that enhance user satisfaction and retention.",
    icon: Palette,
    color: "text-purple-600",
    delay: 0.3,
  },
  {
    name: "Website Development",
    description:
      "Responsive and modern websites that establish a strong online presence for your brand.",
    icon: Globe,
    color: "text-green-600",
    delay: 0.4,
  },
  {
    name: "API Development",
    description:
      "Robust API solutions to streamline your business processes and integrate systems seamlessly.",
    icon: Zap,
    color: "text-yellow-600",
    delay: 0.5,
  },
  {
    name: "Database Management",
    description:
      "Efficient data storage and retrieval systems to power your applications and analytics.",
    icon: Database,
    color: "text-red-600",
    delay: 0.6,
  },
  {
    name: "E-commerce Solutions",
    description:
      "Scalable online stores and payment integrations to boost your digital sales and reach.",
    icon: ShoppingCart,
    color: "text-indigo-600",
    delay: 0.7,
  },
  {
    name: "SEO Optimization",
    description:
      "Improve your online visibility and search engine rankings to attract more qualified leads.",
    icon: Search,
    color: "text-orange-600",
    delay: 0.8,
  },
  {
    name: "Performance Optimization",
    description:
      "Enhance speed and efficiency of your digital products for better user experience and conversion.",
    icon: Gauge,
    color: "text-teal-600",
    delay: 0.9,
  },
];

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-screen bg-white py-24 px-4 overflow-hidden font-sans">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20">
          <h2 className="text-5xl md:text-7xl font-medium mb-6 text-gray-900 max-w-2xl">
            Our Capabilities
          </h2>
          <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
            Transforming ideas into reality with cutting-edge skills and deep
            industry knowledge
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: capability.delay,
                  },
                },
              }}
              className={`group ${index % 3 === 1 ? "md:mt-12" : ""}`}>
              <div className="relative h-full bg-white p-8 rounded-lg transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-transparent">
                <div className={`mb-6 ${capability.color}`}>
                  <capability.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                  {capability.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Asymmetric decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
