import React from "react";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
		<footer className="border-t border-zinc-100">
			<div className="flex flex-col md:flex-row space-y-4 justify-between items-start container px-4 mx-auto py-12">
				<div
					id="details"
					className="w-full lg:w-1/2 mr-12 mb-4">
					<Image
						src="/logo-bg.png"
            alt="Logo"
            width={150}
            height={15}
						className="h-5 aspect-auto"
					/>

					<div className="flex space-x-4 bg-zinc-100 rounded-xl overflow-hidden mt-2">
						<div id="image">
							<Image
								src="/orderflow.jpeg"
								width={500}
								height={500}
								className="aspect-square h-full w-24 object-cover"
								alt="OrderFlow"
							/>
						</div>
						<div
							id="content"
							className="p-2">
							<h3 className="font-medium">OrderFlow</h3>
							<p className="text-zinc-500 text-sm">Order Management System</p>
							<Link
								href="https://www.orderflow.ro"
								className="inline-flex pt-2 text-sm font-medium space-x-2 items-center group hover:text-indigo-600 hover:underline underline-offset-2">
								Learn more
								<ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200" />
							</Link>
						</div>
					</div>

					<p className="text-zinc-600 pt-4">
						Made with ❤️ in 🇷🇴 Romania. All rights reserved.
					</p>
					<a
						href="#"
						className="font-medium py-4">
						Privacy Policy
					</a>
				</div>
				<div className="flex flex-row justify-between place-content-between items-start mx-auto w-full">
					<div id="services">
						<h4 className="text-base font-medium pb-4">Services</h4>
						<div className="flex flex-col space-y-4">
							<Link
								href="/services"
								className="text-zinc-500 hover:underline hover:text-black tracking-wide underline-offset-4 whitespace-nowrap">
								Backend & API Dev
							</Link>
							<Link
								href="/services"
								className="text-zinc-500 hover:underline hover:text-black tracking-wide underline-offset-4 whitespace-nowrap">
								Frontend Dev
							</Link>
							<Link
								href="/services"
								className="text-zinc-500 hover:underline hover:text-black tracking-wide underline-offset-4 whitespace-nowrap">
								UI/UX Design
							</Link>
							<Link
								href="/services"
								className="text-zinc-500 hover:underline hover:text-black tracking-wide underline-offset-4 whitespace-nowrap">
								Consulation
							</Link>
						</div>
					</div>
					<div
						id="follow"
						className="justify-start w-72">
						<h4 className="text-base font-medium pb-4">Follow us</h4>
						<div className="flex flex-col space-y-4">
							<Link
								href="https://dribbble.com/pantazisoft"
								className="text-zinc-500 hover:underline hover:text-black tracking-wide whitespace-nowrap underline-offset-4">
								Dribbble
							</Link>
							<Link
								href="https://www.linkedin.com/company/pantazisoftware"
								className="text-zinc-500 hover:underline hover:text-black tracking-wide whitespace-nowrap underline-offset-4">
								LinkedIn
							</Link>
							<Link
								href="https://www.instagram.com/pantazisoftware/"
								className="text-zinc-500 hover:underline hover:text-black tracking-wide whitespace-nowrap underline-offset-4">
								Instagram
							</Link>
							<Link
								href="https://www.facebook.com/pantazisoftware"
								className="text-zinc-500 hover:underline hover:text-black tracking-wide whitespace-nowrap underline-offset-4">
								Facebook
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
