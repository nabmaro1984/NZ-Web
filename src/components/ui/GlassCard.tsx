"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: "cyan" | "purple" | "green" | "none";
  hover?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className,
  glow = "none",
  hover = true,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6",
        glow === "cyan" && "hover:glow-cyan",
        glow === "purple" && "hover:glow-purple",
        glow === "green" && "hover:glow-green",
        hover && "glass-hover",
        className
      )}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
