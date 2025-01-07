"use client";

import { motion } from "framer-motion";
import {
  Database,
  ShoppingCart,
  Home,
  Truck,
  Building2,
  Briefcase,
  Factory,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const industries = [
  {
    name: "Data Management",
    description:
      "Efficient handling of complex data structures and analytics for informed decision-making.",
    icon: Database,
    color: "text-blue-600",
  },
  {
    name: "E-Commerce",
    description:
      "Scalable online retail solutions and digital marketplaces to boost your digital presence and sales.",
    icon: ShoppingCart,
    color: "text-green-600",
  },
  {
    name: "Real Estate",
    description:
      "Smart property management and rental platforms to streamline operations and enhance user experience.",
    icon: Home,
    color: "text-purple-600",
  },
  {
    name: "Logistics",
    description:
      "Optimized supply chain and delivery management systems for improved efficiency and tracking.",
    icon: Truck,
    color: "text-orange-600",
  },
  {
    name: "Construction",
    description:
      "Digital solutions for property development and management to streamline projects and reduce costs.",
    icon: Building2,
    color: "text-pink-600",
  },
  {
    name: "Corporate",
    description:
      "Enterprise-level business management applications to enhance productivity and decision-making.",
    icon: Briefcase,
    color: "text-yellow-600",
  },
  {
    name: "Manufacturing",
    description:
      "Smart factory and production management tools to optimize processes and increase output quality.",
    icon: Factory,
    color: "text-teal-600",
  },
  {
    name: "Innovation",
    description:
      "Cutting-edge solutions for emerging industries, fostering growth and technological advancement.",
    icon: Lightbulb,
    color: "text-indigo-600",
  },
];

export default function Industries() {
 
  return (
		<section className="relative  bg-white py-24 px-4 overflow-hidden font-sans">
			<div className="container mx-auto container relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-20">
					<h2 className="title">Industries</h2>
					<p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
						Focus and dedication in every industry for outstanding results
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div
						id="industry"
						className="flex flex-col md:flex-row items-start bg-zinc-100 rounded-xl overflow-hidden">
						<div
							id="image"
							className="w-full h-auto md:w-3/12 md:h-full">
							<Image
								src="/web-services.jpg"
								width={400}
								height={400}
								className="aspect-square h-full w-full overflow-hidden object-right-bottom object-cover"
								alt="Services"
							/>
						</div>
						<div
							id="content"
							className="p-6 w-full items-start">
							<h3 className="text-xl font-medium">Digital Services</h3>
							<p className="text-zinc-500">
								We offer a wide range of web services to help you grow your
								business online.
							</p>
						</div>
					</div>
					<div
						id="industry"
						className="flex flex-col md:flex-row items-start bg-zinc-100 rounded-xl overflow-hidden">
						<div
							id="image"
							className="w-full h-auto md:w-3/12 md:h-full">
							<Image
								src="/construction.jpg"
								width={400}
								height={400}
								className="aspect-square h-full w-full overflow-hidden object-right-bottom object-cover"
								alt="Services"
							/>
						</div>
						<div
							id="content"
							className="p-6 w-full items-start">
							<h3 className="text-xl font-medium">Construction</h3>
							<p className="text-zinc-500">
								We offer a wide range of web services to help you grow your
								business online.
							</p>
						</div>
					</div>
					<div
						id="industry"
						className="flex flex-col md:flex-row items-start bg-zinc-100 rounded-xl overflow-hidden">
						<div
							id="image"
							className="w-full h-auto md:w-3/12 md:h-full">
							<Image
								src="/agriculture.jpg"
								width={400}
								height={400}
								className="aspect-square h-full w-full overflow-hidden object-right-bottom object-cover"
								alt="Services"
							/>
						</div>
						<div
							id="content"
							className="p-6 w-full items-start">
							<h3 className="text-xl font-medium">Agriculture</h3>
							<p className="text-zinc-500">
								We offer a wide range of web services to help you grow your
								business online.
							</p>
						</div>
					</div>
					<div
						id="industry"
						className="flex flex-col md:flex-row items-start bg-zinc-100 rounded-xl overflow-hidden">
						<div
							id="image"
							className="w-full h-auto md:w-3/12 md:h-full">
							<Image
								src="/manufacturing.jpg"
								width={400}
								height={400}
								className="aspect-square h-full w-full overflow-hidden object-center object-cover"
								alt="Services"
							/>
						</div>
						<div
							id="content"
							className="p-6 w-full items-start">
							<h3 className="text-xl font-medium">Manufacturing</h3>
							<p className="text-zinc-500">
								Smart factory and production management tools to optimize
								processes and increase output quality.
							</p>
						</div>
					</div>
					<div
						id="industry"
						className="flex flex-col md:flex-row items-start bg-zinc-100 rounded-xl overflow-hidden">
						<div
							id="image"
							className="w-full h-auto md:w-3/12 md:h-full">
							<Image
								src="/transport.jpg"
								width={400}
								height={400}
								className="aspect-square h-full w-full overflow-hidden object-right-bottom object-cover"
								alt="Services"
							/>
						</div>
						<div
							id="content"
							className="p-6 w-full items-start">
							<h3 className="text-xl font-medium">Transportation</h3>
							<p className="text-zinc-500">
								Optimized supply chain and delivery management systems for
								improved efficiency and tracking.
							</p>
						</div>
					</div>
					<div
						id="industry"
						className="flex flex-col md:flex-row items-start bg-zinc-100 rounded-xl overflow-hidden">
						<div
							id="image"
							className="w-full h-auto md:w-3/12 md:h-full">
							<Image
								src="/logistics.jpg"
								width={400}
								height={400}
								className="aspect-square h-full w-full overflow-hidden object-right-bottom object-cover"
								alt="Services"
							/>
						</div>
						<div
							id="content"
							className="p-6 w-full items-start">
							<h3 className="text-xl font-medium">Logistic</h3>
							<p className="text-zinc-500">
								Optimized supply chain and delivery management systems for
								improved efficiency and tracking.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
