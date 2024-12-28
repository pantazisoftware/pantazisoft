"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <section className="min-h-screen bg-white text-black py-32">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-24">  
        <div id="left">
          <h1 className="text-7xl font-medium tracking-tight">Our Services</h1>
        </div>
        <div id="right">
          <Button variant={"secondary"}>Let's work together</Button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left side */}
        <div className="space-y-8">
        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4">
            <h1 className="text-[8rem] leading-none font-bold tracking-tighter">
              FRONT
              <br />
              END
            </h1>
          </motion.div>
        </div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {services.map((service, index) => (
              <AccordionItem key={service.title} value={`item-${index}`}>
                <AccordionTrigger className="text-xl hover:no-underline">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500">
                  {service.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "Performance optimization",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a odio eget massa semper rutrum nec eget neque. Vivamus in dolor sodales consectetur adipiscing elit.",
  },
  {
    title: "Animation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a odio eget massa semper rutrum nec eget neque. Vivamus in dolor sodales consectetur adipiscing elit.",
  },
  {
    title: "(Back End services)",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a odio eget massa semper rutrum nec eget neque. Vivamus in dolor sodales consectetur adipiscing elit.",
  },
  {
    title: "Back end structures",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a odio eget massa semper rutrum nec eget neque. Vivamus in dolor sodales consectetur adipiscing elit.",
  },
  {
    title: "Content management systems",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a odio eget massa semper rutrum nec eget neque. Vivamus in dolor sodales consectetur adipiscing elit.",
  },
  {
    title: "User authentication",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a odio eget massa semper rutrum nec eget neque. Vivamus in dolor sodales consectetur adipiscing elit.",
  },
  {
    title: "Remote updating",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a odio eget massa semper rutrum nec eget neque. Vivamus in dolor sodales consectetur adipiscing elit.",
  },
];
