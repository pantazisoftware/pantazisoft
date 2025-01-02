"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
		<div className="relative min-h-[80vh] md:min-h-screen flex md:pt-16 pb-24 md:pb-32 items-center justify-center overflow-hidden bg-background">
			{/* Main Content */}
			<div className="relative z-10 text-center px-4 container mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="space-y-4">
					<h1 className="text-[clamp(4.5rem,5vw,8rem)] font-black text-black tracking-tight leading-none">
						<motion.span
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 }}
							className="block text-black">
							Innovate.
						</motion.span>
						<motion.span
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4 }}
							className="block text-black">
							Integrate.
						</motion.span>
						<motion.span
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.6 }}
							className="block text-black">
							Succeed.
						</motion.span>
					</h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
						className="max-w-2xl mx-auto text-[clamp(1rem,5vw,2rem)] text-zinc-600">
						We provide top-notch software solutions to help your business grow
						and succeed in the competitive market.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1 }}
						className="pt-8">
						<Button
							size="lg"
							className="group relative px-8 py-6 text-lg transition-all duration-300">
							Let&apos;s collaborate
							<ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
						</Button>
					</motion.div>
				</motion.div>
			</div>

			<div className="bg-gradient-to-b from-indigo-400 to-white absolute top-0 bottom-0 right-0 w-full h-full overflow-hidden">
				<img
					src="/web-services.jpg"
					width={"800"}
					height={"800"}
					className="object-cover object-center w-full h-full opacity-100 mix-blend-screen"
				/>
			</div>

			{/* Background Gradient */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
		</div>
	);
}
