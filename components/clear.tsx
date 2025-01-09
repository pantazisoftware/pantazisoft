import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Clear: React.FC = () => {
  return (
		<div className="bg-white py-24 px-4">
			<div className="container mx-auto text-center">
				<div className="justify-center">
					<h4 className="text-[clamp(1rem,5vw,1.5rem)]  font-medium">
						Got a clear vision and specific goals?
					</h4>
					<h2 className="text-[clamp(2rem,5vw,3rem)] justify-center object-center max-w-4xl font-bold tracking-tight leading-tight mt-6 text-center mx-auto">
						Let&rsquo;s explore how we can help you achieve them through our Finite
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
