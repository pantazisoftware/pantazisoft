"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Clear from "@/components/clear";

export default function ServicesSection() {
  return (
		<section className="min-h-screen bg-white text-black py-32">
			<div className="container mx-auto px-4 flex justify-between items-center mb-24">
				<div id="left">
					<h1 className="title">Our Services</h1>
				</div>
			</div>
			<div
				id="frontend"
				className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
				{/* Left side */}
				<div className="space-y-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="space-y-4">
						<h1 className="text-[8rem] leading-none font-bold tracking-tighter bg-gradient-to-r from-indigo-700 to-sky-400 bg-clip-text text-transparent">
							FRONT
							<br />
							END
						</h1>
						<p className="text-xl text-zinc-500">
							We specialize in creating visually appealing and user-friendly
							interfaces that enhance user experience and engagement.
						</p>
					</motion.div>
				</div>

				{/* Right side */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="space-y-4">
					<Accordion
						type="single"
						collapsible
						className="w-full">
						{frontend.map((front, index) => (
							<AccordionItem
								key={front.title}
								value={`item-${index}`}>
								<AccordionTrigger className="text-xl font-medium hover:no-underline">
									{front.title}
								</AccordionTrigger>
								<AccordionContent className="text-gray-500">
									{front.content}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>
			</div>

			<div
				id="backend"
				className="container mx-auto px-4 grid lg:grid-cols-2 pt-24 gap-16 items-start">
				{/* Left side */}
				<div className="space-y-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="space-y-4">
						<h1 className="text-[8rem] leading-none font-bold tracking-tighter bg-gradient-to-r from-rose-700 to-yellow-400 bg-clip-text text-transparent">
							BACK
							<br />
							END
						</h1>
						<p className="text-xl text-zinc-500">
							We specialize in building robust and scalable backend systems that
							power seamless and efficient operations.
						</p>
					</motion.div>
				</div>

				{/* Right side */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="space-y-4">
					<Accordion
						type="single"
						collapsible
						className="w-full">
						{backend.map((back, index) => (
							<AccordionItem
								key={back.title}
								value={`item-${index}`}>
								<AccordionTrigger className="text-xl font-medium hover:no-underline">
									{back.title}
								</AccordionTrigger>
								<AccordionContent className="text-gray-500">
									{back.content}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>
			</div>

			<div
				id="visuals"
				className="container mx-auto px-4 grid lg:grid-cols-2 pt-24 gap-16 items-start">
				{/* Left side */}
				<div className="space-y-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="space-y-4">
						<h1 className="text-[8rem] leading-none font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-pink-400 bg-clip-text text-transparent">
							VISUALS
						</h1>
						<p className="text-xl text-zinc-500">
							We offer a wide range of visual design services, including
							creating stunning graphics, that effectively communicate your
							brand's message.
						</p>
					</motion.div>
				</div>

				{/* Right side */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="space-y-4">
					<Accordion
						type="single"
						collapsible
						className="w-full">
						{visuals.map((vis, index) => (
							<AccordionItem
								key={vis.title}
								value={`item-${index}`}>
								<AccordionTrigger className="text-xl font-medium hover:no-underline">
									{vis.title}
								</AccordionTrigger>
								<AccordionContent className="text-gray-500">
									{vis.content}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>
			</div>

			<div
				id="consulting"
				className="container mx-auto px-4 grid lg:grid-cols-2 pt-24 gap-16 items-start">
				{/* Left side */}
				<div className="space-y-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="space-y-4">
						<h1 className="text-[8rem] leading-none pb-6 font-bold tracking-tighter bg-gradient-to-r from-emerald-700 to-green-400 bg-clip-text text-transparent">
							IT&C <br />Consulting
						</h1>
						<p className="text-xl text-zinc-500">
							We offer a wide range of visual design services, including
							creating stunning graphics, that effectively communicate your
							brand's message.
						</p>
					</motion.div>
				</div>

				{/* Right side */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="space-y-4">
					<Accordion
						type="single"
						collapsible
						className="w-full">
						{consultations.map((cons, index) => (
							<AccordionItem
								key={cons.title}
								value={`item-${index}`}>
								<AccordionTrigger className="text-xl font-medium hover:no-underline">
									{cons.title}
								</AccordionTrigger>
								<AccordionContent className="text-gray-500">
									{cons.content}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>
      </div>
      
      <Clear />
		</section>
	);
}

const frontend = [
	{
		title: "UI/UX Design",
		content:
			"Creating intuitive and visually appealing user interfaces to enhance user experience and engagement.",
	},
	{
		title: "Accessibility",
		content:
			"Ensuring that our products are accessible to all users, regardless of their abilities or disabilities.",
	},
	{
		title: "Mobile Optimization",
		content:
			"Optimizing websites and applications for mobile devices to provide a seamless user experience.",
	},
	{
		title: "Performance Optimization",
		content:
			"Improving the performance of websites and applications to ensure fast loading times and smooth user interactions.",
	},
	{
		title: "Cross-Browser Compatibility",
		content:
			"Ensuring that websites and applications work correctly on all major web browsers.",
	},
	{
		title: "Interactive Design",
		content:
			"Creating interactive elements that engage users and enhance the overall user experience.",
	},
	{
		title: "Search Engine Optimization",
		content:
			"Optimizing websites and applications to improve their visibility in search engine results.",
	},
];

const backend = [
	{
		title: "API Endpoints Development",
		content:
			"Developing robust and secure API endpoints to enable seamless communication between different systems.",
	},
	{
		title: "Microservices Architecture",
		content:
      "Designing and implementing microservices architecture to build scalable and maintainable applications.",},
	{
		title: "3rd Party Integrations",
		content:
      "Integrating third-party services and APIs to extend the functionality of websites and applications.",},
	{
		title: "Custom Integrations",
		content: "Developing custom integrations to connect different systems and automate business processes.",
	},
	{
		title: "Database Optimization",
		content:
      "Optimizing databases to improve performance and ensure data integrity and security.",},
	{
		title: "AI & Machine Learning",
		content:
      "Leveraging artificial intelligence and machine learning technologies to build intelligent applications.",},
	{
		title: "Modules & Plugins Development",
		content:
      "Developing custom modules and plugins to extend the functionality of websites and applications.",},
];

const visuals = [
	{
		title: "Branding",
		content:
      "Creating unique and memorable brand identities that effectively communicate your brand's message.",},
	{
		title: "Ads & Marketing Materials",
		content:
      "Designing eye-catching advertisements and marketing materials that drive engagement and conversions.",},
	{
		title: "Flyers & Posters",
		content:
      "Designing visually appealing flyers and posters that effectively communicate your message and attract attention.",},
	{
		title: "Business Cards",
		content:
      "Designing professional and memorable business cards that leave a lasting impression on potential clients.",},
	{
		title: "Social Media Graphics",
		content:
      "Creating engaging and shareable graphics for social media platforms to increase brand visibility and engagement.",},
	
];

const consultations = [
  {
    title: "System Architecture",
    content:
      "Designing scalable and efficient system architectures that meet your business needs.",
  },
	{
		title: "Cloud Infrastructure",
		content:
      "Setting up and managing cloud infrastructure to ensure high availability and scalability.",},
	{
		title: "Network Security",
		content:
      "Implementing network security measures to protect your data and systems from cyber threats.",},
	{
		title: "Data Management",
		content:
      "Developing data management solutions to organize and secure your data for easy access and analysis.",},
	{
		title: "Tehnical Support",
		content:
      "Providing technical support and troubleshooting services to ensure the smooth operation of your systems.",},
	
];
