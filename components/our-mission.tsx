"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  MousePointerClick,
  HandshakeIcon,
  Pencil,
} from "lucide-react";

const missionCards = [
  {
    icon: LineChart,
    title: "Growth",
    description:
      "We help businesses grow by creating innovative digital solutions that drive results.",
    size: "large",
  },
  {
    icon: MousePointerClick,
    title: "User Experiences",
    description:
      "We design and develop user-centric digital experiences that engage and delight users.",
    size: "small",
  },
  {
    icon: HandshakeIcon,
    title: "Streamline Operations",
    description:
      "We optimize business processes by developing efficient digital solutions that streamline operations.",
    size: "small",
  },
  {
    icon: Pencil,
    title: "Unique Design",
    description:
      "We craft custom digital solutions tailored to meet the unique needs of each business.",
    size: "large",
  },
];

export default function OurMission() {
  return (
		<section className="bg-white px-6 py-24 relative overflow-hidden">
			<div className="max-w-7xl mx-auto relative">
				{/* Header with reveal animation */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
					viewport={{ once: true }}
					className="mb-24 max-w-2xl">
					<motion.div
						initial={{ width: 0 }}
						whileInView={{ width: "20rem" }}
						transition={{ delay: 0.8, duration: 1.2 }}
						className="h-1 rounded-full bg-gradient-to-r from-indigo-300 to-transparent mb-8"
					/>
					<h2 className="title">Our Mission</h2>
					<p className="text-lg text-zinc-500 leading-relaxed">
						We are committed to delivering exceptional digital solutions that
						drive growth enhance user experiences, and streamline operations.
					</p>
				</motion.div>

				{/* Asymmetrical grid layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 [perspective:1000px]">
					{missionCards.map((card, index) => (
						<motion.div
							key={card.title}
							initial={{ opacity: 0, rotateX: 10, y: 40 }}
							whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
							transition={{
								delay: index * 0.1,
								duration: 0.8,
								ease: [0.215, 0.61, 0.355, 1],
							}}
							viewport={{ once: true }}
							className={`
                group relative overflow-hidden
                ${card.size === "large" ? "md:col-span-2" : ""}
                backdrop-blur-sm
              `}>
							{/* Card content with sophisticated hover effects */}
							<div className="relative p-8 bg-zinc-100 rounded-xl overflow-hidden">
								{/* Gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								{/* Animated highlight line */}
								<motion.div
									initial={false}
									whileHover={{
										width: "100%",
										transition: { duration: 0.8, ease: "easeOut" },
									}}
									className="absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-indigo-300 to-transparent"
								/>

								<div className="relative z-10 flex items-start gap-6">
									{/* Icon with hover animation */}
									<div className="relative">
										<div className="relative bg-indigo-300 p-4 rounded-full">
											<card.icon className="w-6 h-6 text-white" />
										</div>
									</div>

									{/* Text content */}
									<div className="space-y-3 pt-2">
										<h3 className="subtitle">{card.title}</h3>
										<p className="text-zinc-500 text-lg leading-relaxed transition-colors">
											{card.description}
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
