import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
		<div className="bg-white py-24 px-4 relative">
			<div className="container mx-auto grid grid-cols-6 gap-4 items-start">
				<div className="col-span-6">
					<h4 className="subtitle">FAQ</h4>
					<h2 className="title">Your questions, answered</h2>
				</div>
				<div className="col-span-6">
					<Accordion
						type="single"
						collapsible
						className="w-full">
						<AccordionItem value="item-1">
							<AccordionTrigger className="text-lg md:text-3xl underline-offset-4 tracking-tight text-left">
								What is the difference between the Finite and Infite models?
							</AccordionTrigger>
							<AccordionContent className="text-lg text-zinc-500">
								The Finite model is designed for projects with a clear scope,
								timeline, and budget, offering a fixed-price approach ideal for
								specific, time-bound objectives.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger className="text-lg md:text-3xl underline-offset-4 tracking-tight text-left">
								What is your unique strength as an agency?
							</AccordionTrigger>
							<AccordionContent className="text-lg text-zinc-500">
								The Finite model is designed for projects with a clear scope,
								timeline, and budget, offering a fixed-price approach ideal for
								specific, time-bound objectives.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger className="text-lg md:text-3xl underline-offset-4 tracking-tight text-left">
								What type of clients do you normally collaborate with?
							</AccordionTrigger>
							<AccordionContent className="text-lg text-zinc-500">
								The Finite model is designed for projects with a clear scope,
								timeline, and budget, offering a fixed-price approach ideal for
								specific, time-bound objectives.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger className="text-lg md:text-3xl underline-offset-4 tracking-tight text-left">
								How do you handle collaboration across time zones?
							</AccordionTrigger>
							<AccordionContent className="text-lg text-zinc-500">
								The Finite model is designed for projects with a clear scope,
								timeline, and budget, offering a fixed-price approach ideal for
								specific, time-bound objectives.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-5">
							<AccordionTrigger className="text-lg md:text-3xl underline-offset-4 tracking-tight text-left">
								How flexible are your engagement models?
							</AccordionTrigger>
							<AccordionContent className="text-lg text-zinc-500">
								The Finite model is designed for projects with a clear scope,
								timeline, and budget, offering a fixed-price approach ideal for
								specific, time-bound objectives.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
