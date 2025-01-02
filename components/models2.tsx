"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, Infinity, Zap } from "lucide-react";

export default function EngagementModels() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section className="relative bg-black text-white pt-24 pb-32 px-4 overflow-hidden">
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold mb-16">
          Engagement Models
        </motion.h2>

        <div className="space-y-16">
          {[
            {
              title: "Finite",
              description: "Perfect for projects with well-defined goals.",
              details:
                "Offers fixed project pricing based on estimated hours, ensuring a predictable and controlled process.",
              icon: Clock,
            },
            {
              title: "Infinite",
              description:
                "Ideal for ongoing partnerships and evolving projects.",
              details:
                "Provides flexible engagement with adaptable scope, perfect for long-term collaborations.",
              icon: Infinity,
            },
          ].map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              className="group">
              <div className="relative overflow-hidden rounded-lg bg-white bg-opacity-5 p-12 transition-all duration-500 ease-in-out group-hover:bg-opacity-10">
                <div className="relative z-10 flex items-start">
                  <motion.div
                    className="flex-shrink-0 p-3 rounded-full bg-white bg-opacity-10 mr-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}>
                    <model.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-5xl font-medium mb-4 flex items-center">
                      {model.title}
                      <motion.div
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3 }}>
                        <Zap className="w-5 h-5 text-zinc-400" />
                      </motion.div>
                    </h3>
                    <p className="text-xl text-zinc-300 font-light mb-2">
                      {model.description}
                    </p>
                    <p className="text-zinc-500">{model.details}</p>
                  </div>
                </div>
                <motion.div
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:right-8"
                  whileHover={{ x: 5 }}>
                  <ArrowRight className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white to-zinc-500 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-10"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
