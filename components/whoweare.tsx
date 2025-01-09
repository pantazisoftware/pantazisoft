"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Link } from "lucide-react";
import { Button } from "@/components/ui/button"
import Image from "next/image";


export default function WhoWeAre() {
  return (
		<section className="relative min-h-screen flex items-center">
			{/* Background with sophisticated overlay */}
			<div className="absolute inset-0 bg-gradient-to-b from-indigo-400 to-white select-none">
				<Image
					src="/intro3.jpg"
					className="w-full object cover mix-blend-screen select-none"
					width={1440}
					height={900}
					alt="Who we are"
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="space-y-12">
					{/* Heading with minimal decoration */}
					<div className="space-y-4">
						<h1 className="title relative">
							Who we are
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 1213 73"
									className="rotate-180 w-2/5 absolute -bottom-5"
									fill="#000">
									<path d="M1212.41 5.51c3.05 12.87-22.36 11.93-30.26 15.68-94.32 20.51-269.09 32.42-365.48 37.51-77.91 3.82-155.66 9.93-233.67 11.67-57.49 2.56-115.05-.19-172.57 1.58-121.28.91-243.17 1.88-363.69-13.33-12.51-2.64-25.8-2.92-37.77-7.45-30.66-21.42 26.02-21.53 38.52-19.26 359.95 29.05 364.68 27.36 638.24 17.85 121-3.78 241.22-19.21 426.76-41.46 4.72-.65 9.18 3.56 8.45 8.36a941.74 941.74 0 0 0 54.29-9.21c9.33-2.33 18.7-4.56 27.95-7.19a7.59 7.59 0 0 1 9.23 5.24Z"></path>
								</svg>
							</span>
						</h1>
					</div>

					{/* Description with refined typography */}
					<div className="space-y-8">
						<p className="text-2xl text-zinc-700 font-medium leading-relaxed">
							We specialize in crafting custom web applications, dynamic
							websites, e-commerce platforms, and efficient data management
							solutions.
						</p>

						<p className="text-2xl text-zinc-700 font-medium leading-relaxed">
							Our mission is to empower businesses with innovative, tailored
							digital solutions that drive growth, enhance user experiences, and
							streamline operations.
						</p>
					</div>
				</motion.div>

				{/* Elegant scroll indicator */}
				<motion.div
					className="absolute bottom-4  left-1/2 -translate-x-1/2 text-black/60 mt-12"
					animate={{ y: [0, 10, 0] }}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: "easeInOut",
					}}>
					<div className="flex flex-col items-center gap-2">
						<span className="text-sm font-light">Scroll down</span>
						<ArrowDown className="w-4 h-4" />
					</div>
				</motion.div>
			</div>
		</section>
	);
}
