"use client";

import { motion } from "framer-motion";
import { Star, FolderGit2, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    icon: Star,
    title: "Client Satisfaction",
    description:
      "We pride ourselves on maintaining a 98% client satisfaction rate.",
  },
  {
    icon: FolderGit2,
    title: "Projects",
    description: "We have successfully completed over 20 projects.",
  },
  {
    icon: Users,
    title: "Developers World-Wide",
    description:
      "We optimize business processes by developing efficient digital solutions that streamline operations.",
  },
];

export default function Numbers() {
  return (
    <section className="bg-gradient-to-b from-black from-40% to-100% to-[#181818] px-6 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Header with reveal animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          viewport={{ once: true }}
          className="text-left mb-16 max-w-3xl">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-white/40 to-transparent mb-8"
          />
          <h2 className="text-7xl font-medium tracking-tight text-white mb-6">
            Numbers
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            We have successfully completed over 20 projects, serving more than
            10 clients worldwide. Our team consists of 5+ skilled professionals
            world-wide dedicated to delivering top-notch digital solutions. We
            pride ourselves on maintaining a 98% client satisfaction rate.
          </p>
        </motion.div>

        {/* Image and Stats Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with hover effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
            <Image
              src="/build3.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                viewport={{ once: true }}
                className="group flex items-start gap-6 p-6 rounded-sm bg-neutral-900/50 backdrop-blur-sm border border-white/5">
                {/* Icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-lg transform group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative bg-black/30 p-4 rounded-full backdrop-blur-sm border border-white/10">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
