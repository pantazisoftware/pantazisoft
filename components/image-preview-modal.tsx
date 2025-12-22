"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


interface ImagePreviewModalProps {
	isOpen: boolean;
	onClose: () => void;
	images: Array<{
		id: number;
		title: string;
		image: string;
	}>;
	currentImageIndex: number;
	onNavigate: (index: number) => void;
}

export function ImagePreviewModal({
	isOpen,
	onClose,
	images,
	currentImageIndex,
	onNavigate,
}: ImagePreviewModalProps) {
	const currentImage = images[currentImageIndex];

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isOpen) return;

			if (e.key === "ArrowLeft") {
				onNavigate(
					currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1
				);
			} else if (e.key === "ArrowRight") {
				onNavigate(
					currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0
				);
			} else if (e.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, currentImageIndex, images.length, onNavigate, onClose]);

	return (
		<Dialog
			open={isOpen}
			onOpenChange={onClose}>
			<DialogContent className="max-w-screen max-h-screen w-screen h-screen p-0 bg-black border-none">
				
					<DialogTitle className="hidden">Image Preview - {currentImage.title}</DialogTitle>
				

				<div className="relative w-full h-full flex items-center justify-center">
					<Button
						variant="ghost"
						size="icon"
						className="absolute left-4 z-50 text-white hover:bg-white/20"
						onClick={() =>
							onNavigate(
								currentImageIndex > 0
									? currentImageIndex - 1
									: images.length - 1
							)
						}>
						<ChevronLeft className="h-8 w-8" />
						<span className="sr-only">Previous image</span>
					</Button>

					<AnimatePresence mode="wait">
						<motion.div
							key={currentImage.id}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 1.1 }}
							transition={{ duration: 0.2 }}
							className="relative w-full h-full flex items-center justify-center p-4">
							<Image
								src={currentImage.image}
								alt={currentImage.title}
								fill
								sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
								className="!relative !w-auto !h-auto max-w-[85vw] max-h-[85vh] object-contain"
								priority
							/>
							<div className="absolute bottom-4 left-0 right-0 text-center text-white">
								<h2 className="text-xl font-semibold">{currentImage.title}</h2>
								<p className="text-sm text-gray-300">{`${
									currentImageIndex + 1
								} of ${images.length}`}</p>
							</div>
						</motion.div>
					</AnimatePresence>

					<Button
						variant="ghost"
						size="icon"
						className="absolute right-4 z-50 text-white hover:bg-white/20"
						onClick={() =>
							onNavigate(
								currentImageIndex < images.length - 1
									? currentImageIndex + 1
									: 0
							)
						}>
						<ChevronRight className="h-8 w-8" />
						<span className="sr-only">Next image</span>
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
