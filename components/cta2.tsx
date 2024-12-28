"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Floating Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute inset-0">
        <motion.span
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-[20%] rounded-full px-4 py-2 bg-[#B4FFE2] text-black font-medium">
          websites
        </motion.span>
        <motion.span
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[20%] bottom-[30%] rounded-full px-4 py-2 bg-[#98FF98] text-black font-medium">
          e-commerce
        </motion.span>
        <motion.span
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[15%] top-[25%] rounded-full px-4 py-2 bg-[#FFF5BA] text-black font-medium">
          web apps
        </motion.span>
        <motion.span
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[20%] bottom-[35%] rounded-full px-4 py-2 bg-[#FFB8E7] text-black font-medium">
          visuals
        </motion.span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="block">
              Innovate.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="block">
              Transform.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="block">
              Succeed.
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto text-xl text-muted-foreground">
            We provide top-notch software solutions to help your business grow
            and succeed in the competitive market.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="pt-8">
            <Button
              size="lg"
              className="group relative px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
              Let&apos;s collaborate
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
    </div>
  );
}
