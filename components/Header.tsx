import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="fixed bg-white/70 backdrop-blur-md top-0 left-0 right-0 z-30 shadow-sm">
      <div className="flex justify-between items-center container px-10 mx-auto py-4">
        <div id="logo-links" className="flex flex-row space-x-4 items-center">
          <div id="logo">
            <Link href="/">
              <img src="/logo-bg.png" alt="Logo" className="h-6" />
            </Link>
          </div>
          <div
            id="menu"
            className="hidden md:flex flex-row items-center space-x-2 md:space-x-3 pl-4">
            <Link
              href="/about-us"
              className={buttonVariants({ variant: "link" })}>
              About us
            </Link>
            <Link
              href="/services"
              className={buttonVariants({ variant: "link" })}>
              Services
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "link" })}>
              Contact
            </Link>
          </div>
        </div>
        <div id="social" className="hidden md:flex">
          <Link
            href="https://dribbble.com/pantazisoft"
            className={buttonVariants({ variant: "link" })}>
            dribbble
          </Link>
          <Link
            href="https://www.facebook.com/pantazisoftware"
            className={buttonVariants({ variant: "link" })}>
            facebook
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
