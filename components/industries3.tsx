"use client";

import { motion } from "framer-motion";
import {
  Database,
  ShoppingCart,
  Home,
  Truck,
  Building2,
  Briefcase,
  Factory,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";

const industries = [
  {
    name: "Data Management",
    description:
      "Efficient handling of complex data structures and analytics for informed decision-making.",
    icon: Database,
    color: "text-blue-600",
  },
  {
    name: "E-Commerce",
    description:
      "Scalable online retail solutions and digital marketplaces to boost your digital presence and sales.",
    icon: ShoppingCart,
    color: "text-green-600",
  },
  {
    name: "Real Estate",
    description:
      "Smart property management and rental platforms to streamline operations and enhance user experience.",
    icon: Home,
    color: "text-purple-600",
  },
  {
    name: "Logistics",
    description:
      "Optimized supply chain and delivery management systems for improved efficiency and tracking.",
    icon: Truck,
    color: "text-orange-600",
  },
  {
    name: "Construction",
    description:
      "Digital solutions for property development and management to streamline projects and reduce costs.",
    icon: Building2,
    color: "text-pink-600",
  },
  {
    name: "Corporate",
    description:
      "Enterprise-level business management applications to enhance productivity and decision-making.",
    icon: Briefcase,
    color: "text-yellow-600",
  },
  {
    name: "Manufacturing",
    description:
      "Smart factory and production management tools to optimize processes and increase output quality.",
    icon: Factory,
    color: "text-teal-600",
  },
  {
    name: "Innovation",
    description:
      "Cutting-edge solutions for emerging industries, fostering growth and technological advancement.",
    icon: Lightbulb,
    color: "text-indigo-600",
  },
];

export default function Industries() {
 
  return (
    <section className="relative  bg-white py-24 px-4 overflow-hidden font-sans">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20">
          <h2 className="text-xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 max-w-2xl">
            Industries
          </h2>
          <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-3xl">
            Focus and dedication in every industry for outstanding results
          </p>
        </motion.div>

        {/* Tabs View */}

        <Tabs defaultValue="logistics" className="">
  <TabsList>
    <TabsTrigger value="logistics">Logistics</TabsTrigger>
                      <TabsTrigger value="rental">Rental</TabsTrigger>
                      
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>


        {/* Asymmetric decorative elements */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-green-50 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob"></div>
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
