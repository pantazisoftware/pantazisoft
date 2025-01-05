"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock, Infinity, Zap } from "lucide-react";

export default function EngagementModels() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section className="relative bg-gray-100 text-black pt-24 pb-32 px-4 overflow-hidden">
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold mb-6">
          Engagement Models
        </motion.h2>
        <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl mb-16">
          Choose the model that best fits your project requirements and goals.
        </p>

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
              <div className="relative overflow-hidden rounded-lg bg-white p-12 transition-all duration-500 ease-in-out group-hover:shadow-2xl">
                <div className="relative z-10 flex items-start">
                  <motion.div
                    className="flex-shrink-0 p-3 rounded-full bg-indigo-400 mr-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}>
                    <model.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-5xl font-bold mb-4 tracking-tight flex items-center">
                      {model.title}
                      <motion.div
                        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3 }}>
                        <Zap className="w-5 h-5 text-zinc-500 font-medium" />
                      </motion.div>
                    </h3>
                    <p className="text-xl text-zinc-500 font-light mb-2">
                      {model.description}
                    </p>
                    <p className="text-zinc-500">{model.details}</p>
                  </div>
                </div>
                
                
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
