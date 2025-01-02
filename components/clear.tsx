import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Clear: React.FC = () => {
  return (
		<div className="bg-white py-24 px-4">
			<div className="container mx-auto text-center">
				<div className="space-x-2 justify-center">
					<h4 className="text-[clamp(1rem,5vw,1.5rem)]">
						Got a clear vision and specific goals?
					</h4>
					<h2 className="text-[clamp(2rem,5vw,4rem)] justify-center object-center max-w-6xl font-bold tracking-tight mt-6 text-center">
						Let’s explore how we can help you achieve them trough our Finite
						Engagement model.
					</h2>
				</div>
				<div className="flex justify-center col-span-6 mt-6">
					<Button
						variant={"cta"}
						size={"cta"}>
						<Link href="/contact">Let's collaborate</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Clear;
