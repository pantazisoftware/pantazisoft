"use client";

import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

const faqData: FAQItem[] = [
	{
		id: "item-1",
		question: "What is the difference between the Finite and Infite models?",
		answer:
			"The Finite model is designed for projects with a clear scope, timeline, and budget, offering a fixed-price approach ideal for specific, time-bound objectives.",
	},
	{
		id: "item-2",
		question: "What is your unique strength as an agency?",
		answer:
			"Our unique strength lies in our ability to combine strategic thinking, creative problem-solving, and technical expertise to deliver innovative solutions that drive growth and success for our clients.",
	},
	{
		id: "item-3",
		question: "What type of clients do you normally collaborate with?",
		answer:
			"We work with a wide range of clients, including startups, small to medium businesses, corporations, nonprofits, and entrepreneurs. Whether you're looking to launch, grow, or streamline your operations, we tailor our services to meet your specific needs.",
	},
	{
		id: "item-4",
		question: "How do you handle collaboration across time zones?",
		answer:
			"We manage collaboration across time zones by aligning schedules with tools, prioritizing asynchronous communication, documenting updates clearly, and setting response time expectations to ensure smooth teamwork.",
	},
	{
		id: "item-5",
		question: "How flexible are your engagement models?",
		answer:
			"We offer flexible engagement models to accommodate your unique needs, including the Finite model for fixed-price projects, the Infinite model for ongoing support, and the Custom model for tailored solutions.",
	},
];

interface FAQProps {
	title?: string;
	subtitle?: string;
	className?: string;
}

const FAQ: React.FC<FAQProps> = ({
	title = "Your questions, answered",
	subtitle = "FAQ",
	className = "",
}) => {
	return (
		<div className={`bg-white py-24 px-4 relative ${className}`}>
			<div className="container mx-auto grid grid-cols-6 gap-4 items-start">
				<div className="col-span-6">
					<h4 className="subtitle">{subtitle}</h4>
					<h2 className="title">{title}</h2>
				</div>
				<div className="col-span-6">
					<Accordion
						type="single"
						collapsible
						className="w-full">
						{faqData.map((item) => (
							<AccordionItem
								key={item.id}
								value={item.id}>
								<AccordionTrigger className="text-lg md:text-3xl underline-offset-4 tracking-tight text-left">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="text-lg text-zinc-500">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
