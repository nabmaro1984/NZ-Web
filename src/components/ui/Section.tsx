"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  gradient?: boolean;
}

export default function Section({
  children,
  className,
  id,
  title,
  subtitle,
  gradient,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-32 overflow-hidden",
        gradient && "bg-gradient-to-b from-nz-bg via-nz-bg-2/30 to-nz-bg",
        className
      )}
    >
      {gradient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-nz-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-nz-purple/5 rounded-full blur-3xl" />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-16 md:mb-20">
            {subtitle && (
              <motion.p
                className="text-nz-primary font-semibold text-lg mb-4 tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {subtitle}
              </motion.p>
            )}
            {title && (
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-nz-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {title}
              </motion.h2>
            )}
            <div className="w-24 h-1 bg-glow-gradient rounded-full mx-auto mt-6" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
