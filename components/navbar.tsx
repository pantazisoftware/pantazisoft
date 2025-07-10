"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Briefcase, Code, PenTool, Megaphone, FolderCode, Blocks, PencilRuler, MessageSquareText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
	{
		title: "Back-End Development",
		description: "APIs, databases, and server-side logic",
		icon: FolderCode,
		href: "/services#backend",
	},
	{
		title: "Front-End Development",
		description: "User interfaces and client-side logic",
		icon: Blocks,
		href: "/services#frontend",
	},
	{
		title: "Visuals & Branding",
		description: "Designs, logos, and branding",
		icon: PencilRuler,
		href: "/services#visuals",
	},
	{
		title: "IT&C Consulting",
		description: "Advice and guidance on IT&C",
		icon: MessageSquareText,
		href: "/services#consulting",
	},
];

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full bg-white/40 shadow-xl backdrop-blur-xl">
			<div className="container px-4 flex h-16 mx-auto items-center">
				<MainNav />
				<MobileNav />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-2">
						<Button asChild>
							<Link href="/contact">Contact Us</Link>
						</Button>
					</nav>
				</div>
			</div>
		</header>
	);
}

function MainNav() {
	return (
		<div className="mr-4 hidden md:flex">
			<Link
				href="/"
				className="mr-6 flex items-center space-x-2">
				<Image
					src="/logo-bg.png"
					width={150}
					height={40}
					className="h-6 w-full aspect-auto"
					alt="Logo"
				/>
			</Link>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link
							href="/about-us"
							legacyBehavior
							passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								About us
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							href="/work"
							legacyBehavior
							passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Our Work
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Services</NavigationMenuTrigger>
						<NavigationMenuContent>
							<div className="w-[800px] rounded-md bg-popover p-4 shadow-lg">
								<div className="grid grid-cols-5 gap-4">
									<div className="col-span-2">
										<div className="relative aspect-square overflow-hidden rounded-lg">
											<Image
												src="/orderflow.jpeg"
												alt="Services"
												fill
												className="object-cover"
											/>
										</div>
									</div>
									<div className="col-span-3 flex flex-col space-y-4">
										{services.map((service) => (
											<ListItem
												key={service.title}
												title={service.title}
												href={service.href}
												icon={service.icon}>
												{service.description}
											</ListItem>
										))}
									</div>
								</div>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent
				side="left"
				className="pr-0">
				<SheetTitle className="hidden">Mobile Nav</SheetTitle>
				<MobileLink
					href="/"
					className="flex items-center"
					onOpenChange={() => {}}>
					<Image
						src="/logo-bg.png"
						width={140}
						height={25}
						alt="Logo"
					/>
				</MobileLink>
				<div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
					<div className="flex flex-col space-y-3">
						<MobileLink
							href="/about-us"
							onOpenChange={() => {}}>
							About
						</MobileLink>
						<MobileLink
							href="/work"
							onOpenChange={() => {}}>
							Our work
						</MobileLink>
						<div className="flex flex-col space-y-2">
							<span className="font-medium">Services</span>
							{services.map((service) => (
								<MobileLink
									key={service.title}
									href={service.href}
									onOpenChange={() => {}}
									className="inline-flex items-center space-x-2 pl-6">
									<service.icon className="mr-2 h-4 w-4" />
									<span>{service.title}</span>
								</MobileLink>
							))}
						</div>
						<MobileLink
							href="/contact"
							onOpenChange={() => {}}>
							Contact
						</MobileLink>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
	return (
		<NavigationMenuLink asChild>
			<a
				ref={ref}
				className={cn(
					"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
					className
				)}
				{...props}>
				<div className="flex items-start space-x-2">
					<Icon className="h-6 w-6 flex-shrink-0" />
					<div>
						<div className="text-base font-medium leading-none tracking-tight">
							{title}
						</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
							{children}
						</p>
					</div>
				</div>
			</a>
		</NavigationMenuLink>
	);
});
ListItem.displayName = "ListItem";

interface MobileLinkProps {
	href: string;
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
}

function MobileLink({
	href,
	onOpenChange,
	className,
	children,
	...props
}: MobileLinkProps) {
	return (
		<Link
			href={href}
			onClick={() => {
				onOpenChange?.(false);
			}}
			className={cn(className)}
			{...props}>
			{children}
		</Link>
	);
}
