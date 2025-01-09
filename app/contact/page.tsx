import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Map, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
		<main className="px-4 relative">
			<div className="max-w-4xl mx-auto py-24 space-y-16">
				{/* Header Section */}
				<div className="space-y-4 z-20">
					<h1 className="title">Contact us</h1>
					<p className="text-xl text-muted-foreground">
						If you have any questions or need further information, please don't
						hesitate to reach out to us. We're here to help!
					</p>
				</div>

				{/* Company Details and Social Links */}
				<div className="grid md:grid-cols-2 gap-12">
					<div className="space-y-6">
						<div className="border border-indigo-100 items-start rounded-xl p-6">
							<h2 className="subtitle">Company Details</h2>
							<div className="space-y-2">
								<p className="font-bold">PANTAZI SOFTWARE LLC</p>
								<p className="text-zinc-500">
									Bucharest Street, 47, Poeni, 147270, Teleorman County, Romania
								</p>
								<p className="text-zinc-500">
									Fiscal Number: 42731715 (Romania)
								</p>
								<p className="text-zinc-500">Reg No.: ROONRC.J34/308/2020</p>
							</div>
						</div>

						<div className="flex gap-4">
							<Button
								variant="outline"
								size="icon"
								asChild>
								<a
									href="https://www.facebook.com/pantazisoftware"
									aria-label="Facebook">
									<Facebook className="h-4 w-4" />
								</a>
							</Button>
							<Button
								variant="outline"
								size="icon"
								asChild>
								<a
									href="https://www.linkedin.com/company/pantazisoftware"
									aria-label="Facebook">
									<Linkedin className="h-4 w-4" />
								</a>
							</Button>
							<Button
								variant="outline"
								size="icon"
								asChild>
								<a
									href="https://dribbble.com/pantazisoft"
									aria-label="Dribbble">
									<svg
										className="h-4 w-4"
										fill="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.203 10.203 0 0 1 2.312 6.406c-.344-.063-3.782-.719-7.25-.313-.063-.156-.156-.344-.25-.5-.25-.563-.469-1.125-.719-1.688 4.032-1.656 5.907-4 5.907-4.093zM12 1.75c2.625 0 5.063.969 6.938 2.563-.063.093-1.75 2.343-5.594 3.718A54.255 54.255 0 0 0 9.28 2.75c.875-.219 1.781-.313 2.719-.313zM7.375 3.5a54.047 54.047 0 0 1 4.094 5.219c-5.156 1.375-9.719 1.344-10.188 1.344.719-3.438 3.094-6.281 6.094-6.563zM1.75 12v-.375c.469 0 5.719.063 11.25-1.563.313.625.594 1.25.875 1.875-.156.031-.281.094-.438.156-5.688 1.844-8.719 6.844-8.719 6.844A10.203 10.203 0 0 1 1.75 12zm10.25 10.25c-2.406 0-4.625-.813-6.406-2.188.188-.25 2.375-4.563 8.469-6.656.031-.031.031-.031.063-.031 1.5 3.906 2.156 7.188 2.313 8.125a10.39 10.39 0 0 1-4.439.75zm6.406-2.031c-.125-.75-.781-4.031-2.188-7.844 3.313-.531 6.188.344 6.563.438a10.287 10.287 0 0 1-4.375 7.406z" />
									</svg>
								</a>
							</Button>
							<Button
								variant="outline"
								size="icon"
								asChild>
								<a
									href="https://www.instagram.com/pantazisoftware/"
									aria-label="Instagram">
									<Instagram className="h-4 w-4" />
								</a>
							</Button>
						</div>
					</div>

					<div>
						<h2 className="subtitle">Send us a message</h2>
						<ContactForm />
					</div>
				</div>
			</div>
		</main>
	);
}
