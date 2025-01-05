"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  ChevronDown,
  Briefcase,
  Code,
  PenTool,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
    title: "Consulting",
    description: "Expert advice for your business",
    icon: Briefcase,
    href: "/services/consulting",
  },
  {
    title: "Development",
    description: "Custom software solutions",
    icon: Code,
    href: "/services/development",
  },
  {
    title: "Design",
    description: "Creative and intuitive designs",
    icon: PenTool,
    href: "/services/design",
  },
  {
    title: "Marketing",
    description: "Reach your target audience",
    icon: Megaphone,
    href: "/services/marketing",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 shadow-2xl shadow-black/10 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 py-2">
      <div className="container mx-auto px-6 flex h-16 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button>
              <Link href="/contact" passHref>
                Contact us
              </Link>
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
      <Link href="/" className="mr-6 flex items-center space-x-2">
       <Image src="/logo-bg.png" width={200} height={40} alt="Pantazi Software Logo" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-9 gap-3 p-6">
                <div className="col-span-4">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none aspect-square flex-col justify-end rounded-md bg-zinc-100 no-underline outline-none focus:shadow-md"
                      href="https://orderflow.ro?ref=pantazisoft">
                      <Image
                        src="/orderflow.jpeg"
                        width={100}
                        height={100}
                        alt="Service Ad"
                        className="w-full object-cover rounded-md"
                      />
                      <div className="pt-2 flex flex-col">
                        <span className="font-medium text-lg">OrderFlow.ro</span>
                        <span className="text-sm text-zinc-500">Order Management System</span>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </div>
                <ul className="col-span-5 flex flex-col space-y-4">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                      icon={service.icon}>
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
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
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={() => {}}>
          <Image src="/logo-bg.png" width={200} height={40} alt="Logo" />
        </MobileLink>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <MobileLink href="/about-us" onOpenChange={() => {}}>
              About
            </MobileLink>
            <div className="flex flex-col space-y-2">
              <span className="font-medium">Services</span>
              {services.map((service) => (
                <MobileLink
                  key={service.title}
                  href={service.href}
                  onOpenChange={() => {}}
                  className="pl-6 inline-flex space-x-2 items-center">
                  <service.icon className="mr-2 h-4 w-4" />
                  <span>{service.title}</span>
                </MobileLink>
              ))}
            </div>
            <MobileLink href="/contact" onOpenChange={() => {}}>
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
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="flex items-start space-x-2">
            <Icon className="mr-2 h-6 w-6 flex-shrink-0" />
            <div>
              <div className="text-base font-medium tracking-tight leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
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
