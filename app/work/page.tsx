"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ImagePreviewModal } from "@/components/image-preview-modal";

interface WorkItem {
	id: number;
	title: string;
	category: string;
	image: string;
	height: number;
	width: number;
}

const workItems: WorkItem[] = [
	{
		id: 1,
		title: "REGENVOLT - Business Card",
		category: "Graphic Design",
		image: "/work/regenvolt-bs-card.jpeg",
		height: 400,
		width: 400,
	},
	{
		id: 2,
		title: "REGENVOLT - LOGO",
		category: "Logo Design",
		image: "/work/regenvolt-logo.jpg",
		height: 400,
		width: 400,
	},
	{
		id: 3,
		title: "Andreea Nails Academy",
		category: "Website",
		image: "/work/andreeanails.png",
		height: 400,
		width: 400,
	},
	{
		id: 4,
		title: "Financial Dashboard",
		category: "Dashboard",
		image: "/work/refresh.png",
		height: 400,
		width: 400,
	},
	{
		id: 5,
		title: "The Runner App",
		category: "App Logo",
		image: "/work/the-runner-logo.png",
		height: 400,
		width: 400,
	},
	{
		id: 6,
		title: "Product Stack Dashboard",
		category: "Dashboard",
		image: "/work/productstack.png",
		height: 400,
		width: 400,
	},
	{
		id: 7,
		title: "OrderFlow",
		category: "Website",
		image: "/work/orderflow2.png",
		height: 400,
		width: 400,
	},
	{
		id: 8,
		title: "Neutronica Template",
		category: "Dashboard",
		image: "/work/neutronica-analytics.png",
		height: 400,
		width: 400,
	},
	{
		id: 9,
		title: "Neutronica Template",
		category: "Dashboard",
		image: "/work/neutronica-dashboard.jpeg",
		height: 400,
		width: 400,
	},
	{
		id: 10,
		title: "Flisto",
		category: "Logo Design",
		image: "/work/flisto.jpg",
		height: 400,
		width: 400,
	},
	{
		id: 11,
		title: "Creative Hub",
		category: "Logo Design",
		image: "/work/creativehub.png",
		height: 400,
		width: 400,
	},
	{
		id: 12,
		title: "Heating Pumps",
		category: "Logo Design",
		image: "/work/heatingpumps.jpg",
		height: 400,
		width: 400,
	},
	{
		id: 13,
		title: "nBrands - IT&C",
		category: "Logo Design",
		image: "/work/nbrands.jpg",
		height: 400,
		width: 400,
	},
	{
		id: 14,
		title: "Analytics Dashboard",
		category: "Dashboard",
		image: "/work/analytics.png",
		height: 400,
		width: 400,
	},
	{
		id: 15,
		title: "Analytics Dashboard - Traffic",
		category: "Dashboard",
		image: "/work/analytics2.png",
		height: 400,
		width: 400,
	},
	{
		id: 16,
		title: "Ramo Hotel&Restaurant",
		category: "Logo Design",
		image: "/work/ramo.jpg",
		height: 400,
		width: 400,
	},
];

const categories = ["All", "Website", "Logo Design", "Dashboard", "Graphic Design"];

export default function WorkPage() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const filteredItems =
		selectedCategory === "All"
			? workItems
			: workItems.filter((item) => item.category === selectedCategory);

	const handleImageClick = (index: number) => {
		setCurrentImageIndex(index);
		setIsPreviewOpen(true);
	};

	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="title">Our Work</h1>

			{/* Category Filter */}
			<div className="flex flex-wrap gap-2 mb-8">
				{categories.map((category) => (
					<Button
						key={category}
						variant={selectedCategory === category ? "default" : "outline"}
						onClick={() => setSelectedCategory(category)}
						className="text-sm">
						{category}
					</Button>
				))}
			</div>

			{/* Masonry Grid */}
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
				layout>
				{filteredItems.map((item, index) => (
					<motion.div
						key={item.id}
						layout
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="relative group cursor-pointer"
						style={{
							gridRow: `span ${Math.ceil(item.height / 100)}`,
						}}
						onClick={() => handleImageClick(index)}>
						<Image
							src={item.image}
							alt={item.title}
							width={item.width}
							height={item.height}
							className="w-full h-full object-cover rounded-lg"
						/>
						<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
							<div className="text-center text-white p-4">
								<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
								<p className="text-sm text-gray-300">{item.category}</p>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>

			<ImagePreviewModal
				isOpen={isPreviewOpen}
				onClose={() => setIsPreviewOpen(false)}
				images={filteredItems}
				currentImageIndex={currentImageIndex}
				onNavigate={setCurrentImageIndex}
			/>
		</div>
	);
}
