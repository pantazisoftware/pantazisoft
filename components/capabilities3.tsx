"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Database,
  Gauge,
  Share2,
  Layers,
  Workflow,
  CloudCog,
  CircuitBoard,
  Blocks,
  SwatchBook,
  Computer,
  Package,
  CircleGauge,
  Phone,
  Smartphone,
  SquareMousePointer,
  Frame,
  ScanSearch,
  Ruler,
  SquareStack,
  Accessibility,
} from "lucide-react";
import Image from "next/image";


export default function Capabilities() {
	// Create refs for each section
	const headerRef = useRef(null);
	const firstGridRef = useRef(null);
	const secondGridRef = useRef(null);
	const finalSectionRef = useRef(null);

	// Check if sections are in view
	const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
	const firstGridInView = useInView(firstGridRef, {
		once: true,
		margin: "-100px",
	});
	const secondGridInView = useInView(secondGridRef, {
		once: true,
		margin: "-100px",
	});
	const finalSectionInView = useInView(finalSectionRef, {
		once: true,
		margin: "-100px",
	});

	return (
		<section
			id="capabilities"
			className="relative  bg-white py-6 md:py-12 px-4 overflow-hidden">
			<div className="container mx-auto relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-20">
					<h2 className="title">Our Capabilities</h2>
					<p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
						Transforming ideas into reality with cutting-edge skills and deep
						industry knowledge
					</p>
				</motion.div>

				{/* Capabilities Grid */}
				<motion.div
					ref={firstGridRef}
					initial={{ opacity: 0, y: 40 }}
					animate={
						firstGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
					}
					transition={{
						duration: 0.8,
						ease: [0.25, 0.1, 0.25, 1],
					}}
					className="grid grid-cols-12 gap-12 md:gap-16">
					<div className="col-span-12 lg:col-span-5">
						<Image
							src="/web-services2.jpg"
							width={600}
							height={400}
							alt="Web Services"
							className="w-full h-full aspect-auto rounded-xl"
						/>
					</div>
					<div className="col-span-12 lg:col-span-7">
						<h3 className="subtitle">Backend & API</h3>
						<p className="text-lg text-zinc-500 mb-8">
							Our team of experienced developers can help you build scalable and
							robust backend systems to power your web and mobile applications
						</p>
						<div
							id="features"
							className="grid grid-cols-2 gap-4 w-full">
							<div
								id="col1"
								className="col-span-2 md:col-span-1 space-y-2 flex flex-col">
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<Share2 className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">
										API Endpoints Development
									</span>
								</div>
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<Layers className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">Micro Services</span>
								</div>
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<Workflow className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">3rd Party Integration</span>
								</div>
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<CloudCog className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">Custom Integration</span>
								</div>
							</div>
							<div
								id="col2"
								className="col-span-2 md:col-span-1 space-y-2 flex flex-col">
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<Database className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">Database Optimization</span>
								</div>
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<CircuitBoard className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">AI Integration</span>
								</div>
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<Gauge className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">Procces Optimization</span>
								</div>
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<Blocks className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">Modules Development</span>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<motion.div
					ref={secondGridRef}
					initial={{ opacity: 0, y: 40 }}
					animate={
						secondGridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
					}
					transition={{
						duration: 0.8,
						ease: [0.25, 0.1, 0.25, 1],
					}}
					className="grid grid-cols-12 gap-12 pt-36 md:gap-16">
					<div className="col-span-12 order-2 md:order-1 lg:col-span-7">
						<h3 className="subtitle">Frontend</h3>
						<p className="text-lg text-zinc-500 mb-8">
							Our frontend development services focus on creating visually
							appealing and highly functional user interfaces.
						</p>
						<div
							id="features"
							className="grid grid-cols-2 w-full">
							<div
								id="col1"
								className="col-span-2 md:col-span-1 space-y-2 flex flex-col">
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<SquareMousePointer className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">
										Cross-Browser Compatibility
									</span>
								</div>
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<Frame className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">UI/UX Design</span>
								</div>
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<Smartphone className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">Mobile Optimization</span>
								</div>
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<CircleGauge className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">Performance Optimization</span>
								</div>
							</div>
							<div
								id="col2"
								className="col-span-2 md:col-span-1 space-y-2 flex flex-col">
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<Accessibility className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">Accessibility</span>
								</div>
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<SquareStack className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">Interactivity</span>
								</div>
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<Ruler className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">Web Performance Metrics</span>
								</div>
								<div
									id="feature"
									className="inline-flex space-x-4 items-center">
									<ScanSearch className="w-5 h-5 text-indigo-400" />
									<span className="text-zinc-500">SEO</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-5 order-1 md:order-2">
						<Image
							src="/intro6.jpg"
							width={600}
							height={400}
							alt="Web Services"
							className="w-full h-4/6 object-cover object-top aspect-auto rounded-xl"
						/>
					</div>
				</motion.div>

				<motion.div
					ref={finalSectionRef}
					initial={{ opacity: 0, y: 40 }}
					animate={
						finalSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
					}
					transition={{
						duration: 0.8,
						ease: [0.25, 0.1, 0.25, 1],
					}}
					className="flex flex-col space-y-4 justify-center">
					<div className="max-w-4xl mx-auto justify-center">
						<h3 className="subtitle text-center">
							Other Services and Products
						</h3>
						<p className="text-lg text-zinc-500 mb-8 text-center">
							Our frontend development services focus on creating visually
							appealing and highly functional user interfaces.
						</p>
					</div>
					<div className="grid grid-cols-12 gap-12">
						<div className="col-span-4 p-8">
							<SwatchBook className="w-8 h-8 text-indigo-400 mb-4" />
							<h4 className="text-xl font-medium">Visuals</h4>
							<p className="text-zinc-500">
								We create visually appealing designs that are both functional
								and engaging.
							</p>
							<ul className="list-disc list-inside pt-2">
								<li>Branding</li>
								<li>Ads Design</li>
								<li>Flyer Design</li>
								<li>Business Card</li>
								<li>Social Media Graphics</li>
							</ul>
						</div>
						<div className="col-span-4 p-8">
							<Computer className="w-8 h-8 text-indigo-400 mb-4" />
							<h4 className="text-xl font-medium">IT&C Consulting</h4>
							<p className="text-zinc-500">
								Expert guidance to navigate technology complexities.
							</p>
							<ul className="list-disc list-inside pt-2">
								<li>System Architecture</li>
								<li>Cloud Solutions</li>
								<li>Network Security</li>
								<li>Data Management</li>
								<li>Technical Support</li>
							</ul>
						</div>
						<div className="col-span-4 p-8">
							<Package className="w-8 h-8 text-indigo-400 mb-4" />
							<h4 className="text-xl font-medium">Products/Solutions</h4>
							<p className="text-zinc-500">
								We create visually appealing designs that are both functional
								and engaging.
							</p>
							<ul className="list-disc list-inside pt-2">
								<li>OrderFlow</li>
								<li>Dashboards <span className="text-zinc-500 text-sm">(for Developers)</span></li>
							</ul>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
