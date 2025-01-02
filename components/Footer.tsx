import React from "react";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-100">
      <div className="flex flex-col md:flex-row space-y-4 justify-between items-start container px-4 mx-auto py-12">
        <div id="logo" className="max-w-full">
          <img src="/logo-bg.png" alt="Logo" className="h-5" />
          <p className="uppercase text-black whitespace-nowrap font-medium pt-4">
            Pantazi Software LLC
          </p>
          <p className="text-zinc-600">Romania</p>
          <p className="text-zinc-600 pt-4">
            &copy; 2020 - 2024 Pantazi Software LLC.
            <br /> All rights reserved.
          </p>
          <a href="#" className="font-medium text-sm pt-2">
            Privacy Policy
          </a>
        </div>
        <div id="services">
          <h4 className="text-base font-medium pb-4">Services</h4>
          <div className="flex flex-col space-y-4">
            <Link
              href="/services"
              className="text-zinc-500 hover:underline hover:text-black tracking-wide underline-offset-4 whitespace-nowrap">
              Web Development
            </Link>
            <Link
              href="/services"
              className="text-zinc-500 hover:underline hover:text-black tracking-wide underline-offset-4 whitespace-nowrap">
              Mobile Development
            </Link>
            <Link
              href="/services"
              className="text-zinc-500 hover:underline hover:text-black tracking-wide underline-offset-4 whitespace-nowrap">
              UI/UX Design
            </Link>
            <Link
              href="/services"
              className="text-zinc-500 hover:underline hover:text-black tracking-wide underline-offset-4 whitespace-nowrap">
              SEO Optimization
            </Link>
          </div>
        </div>
        <div id="follow" className="justify-start w-72">
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
    </footer>
  );
};

export default Footer;
