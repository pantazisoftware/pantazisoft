"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Cog, Lightbulb, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
		<div className="relative min-h-[80vh] md:min-h-screen pt-12 pb-6 md:pb-12 items-center flex flex-col justify-center overflow-hidden bg-background">
			{/* Main Content */}
			<div className="relative z-20 text-center px-4 container mx-auto pb-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="space-y-4">
					<h1 className="text-[clamp(4.5rem,5vw,9rem)] font-black text-black tracking-tight leading-none">
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
							className="block  text-rose-600">
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
						className="max-w-3xl mx-auto text-[clamp(1rem,5vw,1.7rem)] text-zinc-600">
						We provide top-notch software solutions to help your business grow
						and succeed in the competitive market.
					</motion.p>
					<div className="flex flex-col items-center md:space-y-0 md:flex-row md:space-x-4 justify-center pt-4">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 }}
							className="pt-8">
							<Button
								asChild
								size="lg"
								variant={"cta"}
								className="group relative px-8 py-6 text-lg w-full transition-all duration-300">
								<Link
									href="#capabilities"
									className="flex items-center flex-row">
									<span>Our Capabilities</span>
									<ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
								</Link>
							</Button>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.3 }}
							className="pt-8">
							<Button
								size="lg"
								variant={"link"}
								className="group relative px-8 py-6 w-full text-lg transition-all duration-300">
								Let&apos;s collaborate
								<ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
							</Button>
						</motion.div>
					</div>
				</motion.div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 z-10 container mx-auto py-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.6 }}
					className="p-4 lg:p-8 group">
					<Lightbulb className="w-8 h-8 text-zinc-500 mb-4 group-hover:text-orange-500 group-hover:scale-105 group-hover:rotate-180 group-hover:fill-orange-500 transition-all ease-linear duration-300" />
					<h2 className="font-bold text-xl">Innovate</h2>
					<p className="text-zinc-500 lg:text-lg">
						We provide top-notch software solutions to help your business grow
						and succeed in the competitive market.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.8 }}
					className="p-4 lg:p-8 group">
					<Cog className="w-8 h-8 text-zinc-500 mb-4 group-hover:text-blue-800 group-hover:scale-105 group-hover:rotate-90 ease-linear duration-300" />
					<h2 className="font-bold text-xl">Integrate</h2>
					<p className="text-zinc-500 lg:text-lg">
						We provide top-notch software solutions to help your business grow
						and succeed in the competitive market.
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2 }}
					className="p-4 lg:p-8 group">
					<Star className="w-8 h-8 text-zinc-500 mb-4 group-hover:text-indigo-600 group-hover:scale-105 group-hover:rotate-[70deg] ease-linear duration-300 group-hover:fill-indigo-600" />
					<h2 className="font-bold text-xl">Succeed</h2>
					<p className="text-zinc-500 lg:text-lg">
						We provide top-notch software solutions to help your business grow
						and succeed in the competitive market.
					</p>
				</motion.div>
			</div>

			<div className="bg-gradient-to-b from-indigo-400 via-indigo-100 to-white absolute top-0 bottom-0 right-0 w-full h-full overflow-hidden">
				<Image
					src="/build.jpg?height=900&width=1440"
					width={"1440"}
					height={"900"}
					alt="Team collaboration"
					className="object-cover object-center w-full h-full opacity-100 mix-blend-screen"
				/>
			</div>

			{/* Background Gradient */}
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
		</div>
	);
}
