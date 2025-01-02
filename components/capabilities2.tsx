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
		image: "/web-services.jpg",
		size: "col-span-1 md:col-span-2",
		to: "to-blue-300",
	},
	{
		name: "UI/UX Design",
		description:
			"Intuitive and engaging user interfaces that enhance user satisfaction and retention.",
		icon: Palette,
		color: "text-purple-600",
		delay: 0.3,
		image: "/webdesign.jpg",
		size: "col-span-1",
		to: "to-purple-300",
	},
	{
		name: "Website Development",
		description:
			"Responsive and modern websites that establish a strong online presence for your brand.",
		icon: Globe,
		color: "text-green-600",
		delay: 0.4,
		image: "/dev.jpg",
		size: "col-span-1",
		to: "to-green-300",
	},
	{
		name: "E-commerce Solutions",
		description:
			"Scalable online stores and payment integrations to boost your digital sales and reach.",
		icon: ShoppingCart,
		color: "text-indigo-600",
		delay: 0.5,
		image: "/intro.jpg",
		size: "col-span-1 md:col-span-2",
		to: "to-indigo-300",
	},
	{
		name: "SEO Optimization",
		description:
			"Improve your online visibility and search engine rankings to attract more qualified leads.",
		icon: Search,
		color: "text-orange-600",
		delay: 0.6,
		image: "/seo.jpg",
		size: "col-span-1 md:col-span-2",
		to: "to-zinc-300",
	},
	{
		name: "Performance Optimization",
		description:
			"Enhance speed and efficiency of your digital products for better user experience and conversion.",
		icon: Gauge,
		color: "text-teal-600",
		delay: 0.7,
		image: "/performance.jpg",
		size: "col-span-1",
		to: "to-zinc-300",
	},
];

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
		<section className="relative  bg-white py-6 md:py-24 px-4 overflow-hidden">
			<div className="container mx-auto max-w-7xl relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-20">
					<h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 max-w-2xl">
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
							className={`group ${capability.size}`}>
							<div className="relative h-full bg-white p-10 rounded-2xl overflow-hidden transition-all duration-300 border border-zinc-200">
								<div className="z-20 relative">
									<div
										className={`mb-6 inline-flex  ${capability.color}`}>
										<capability.icon className="w-12 h-12" />
									</div>
									<h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
										{capability.name}
									</h3>
									<p className="text-zinc-500 text-lg leading-relaxed">
										{capability.description}
									</p>
								</div>

                <div className={`absolute z-0 bottom-0 left-0 right-0 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-white ${capability.to} rounded-b-2xl`}>
									<img
										src={capability.image}
										alt=""
										className="object-cover object-center w-full h-full mix-blend-screen"
									/>
								</div>
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
