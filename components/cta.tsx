"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";

const CTA = () => {
  // Animate the #website, #ecommerce, #webapps, and #visuals elements
  // when the component mounts
  // the elements will spin around the center of the screen not the center of the element

  return (
    <div className="text-center bg-white py-32  relative overflow-hidden">
      <div className="z-20 relative">
        <h1 className="text-8xl font-medium text-black mb-4 max-w-xl mx-auto">
          Innovate. Transform. Succeed.
        </h1>
        <p className="text-3xl text-zinc-500 tracking-wide  mb-6 max-w-2xl mx-auto">
          We provide top-notch software solutions to help your business grow and
          succeed in the competitive market.
        </p>
        <div className="flex justify-center space-x-6">
          <Button variant={"cta"} size={"cta"} className="text-xl">
            <Link href="/contact">Let's collaborate</Link>
          </Button>
        </div>
      </div>
      <div className="absolute z-10 top-0 left-0 right-0">
        <div
          id="website"
          className="bg-[#71FBEB] text-black inline-flex px-6 py-2.5 rounded-full font-medium absolute top-64 left-24">
          <p>websites</p>
        </div>
        <div
          id="ecommerce"
          className="bg-[#9EFFBD]  text-black inline-flex px-6 py-2.5 rounded-full font-medium absolute top-96 left-36">
          <p>e-commerce</p>
        </div>
        <div
          id="webapps"
          className="bg-[#FFF49E] text-black inline-flex px-6 py-2.5 rounded-full font-medium absolute top-32  right-24">
          <p>web apps</p>
        </div>
        <div
          id="visuals"
          className="bg-[#FC9EFF] text-black inline-flex px-6 py-2.5 rounded-full font-medium absolute top-72 right-48">
          <p>visuals</p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
