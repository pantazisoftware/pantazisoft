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
		width: number;
		height: number;
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
			onOpenChange={() => onClose()}>
			<DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black border-none">
				<Button
					variant="ghost"
					size="icon"
					className="absolute right-4 top-4 z-50 bg-black text-white hover:bg-zinc-900"
					onClick={onClose}>
					<X className="h-6 w-6 text-white" />
				</Button>

				<div className="relative w-full h-[calc(95vh-8rem)] flex items-center justify-center">
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
								width={currentImage.width}
								height={currentImage.height}
								className="max-w-full max-h-[calc(95vh-2rem)] w-auto h-auto object-contain"
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
