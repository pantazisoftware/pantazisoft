"use client";

import { motion } from "framer-motion";
import {  BookMarked, Shapes, TrendingUp } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    icon: BookMarked,
    title: "What We Do",
    description:
      "Developing innovative digital solutions that drive results. We design and develop user-centric digital experiences that engage and delight users.",
  },
  {
    icon: Shapes,
    title: "Our Values",
    description: "Innovation, Integrity, Quality, and Customer Satisfaction.",
  },
  {
    icon: TrendingUp,
    title: "Our Vision",
    description:
      "Empowering businesses with innovative, tailored digital solutions that drive growth, enhance user experiences, and streamline operations.",
  },
];

export default function Numbers() {
  return (
		<section className="px-6 py-24 relative overflow-hidden">
			<div className="container mx-auto relative">
				{/* Header with reveal animation */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
					viewport={{ once: true }}
					className="text-left mb-16 max-w-3xl">
					<motion.div
						initial={{ width: 0 }}
						whileInView={{ width: "10rem" }}
						transition={{ delay: 0.5, duration: 0.8 }}
						className="h-1 rounded-full bg-gradient-to-r from-indigo-300 to-transparent mb-8"
					/>
					<h2 className="title">Why to Choose Us</h2>
					<p className="text-lg text-neutral-500 tracking-tight font-medium leading-relaxed">
						Pantazi Software delivers tailored solutions designed to meet your
						unique needs. With a client-focused approach and a proven track
						record, we ensure high-quality results that drive your success.
					</p>
				</motion.div>

				{/* Image and Stats Grid */}
				<div className="grid md:grid-cols-2 gap-12 items-start">
					{/* Image with hover effect */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
						viewport={{ once: true }}
						className="relative aspect-[4/3] overflow-hidden rounded-xl">
						<div
							id="animation"
							className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-blue-400 to-white z-10"
						/>
						<Image
							src="/intro2.jpg"
							alt="Team collaboration"
							width="400"
							height="300"
							className="object-cover absolute mix-blend-screen w-full h-auto rounded-xl opacity-70 z-20"
						/>
					</motion.div>

					{/* Stats */}
					<div className="space-y-4">
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
								className="group flex items-start gap-6 p-6">
								{/* Icon */}
								<div className="relative">
									<stat.icon className="w-12 h-12 pt-2 text-indigo-600" />
								</div>

								{/* Content */}
								<div className="space-y-2">
									<h3 className="text-xl font-bold">{stat.title}</h3>
									<p className="text-neutral-500 text-xl leading-relaxed">
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
