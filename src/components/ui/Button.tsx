"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  target,
  rel,
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 font-cairo";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-nz-primary text-white hover:bg-nz-primary/90 shadow-lg shadow-nz-primary/25 hover:shadow-nz-primary/40",
    secondary:
      "glass glass-hover text-nz-text",
    outline:
      "border border-nz-primary/50 text-nz-primary hover:bg-nz-primary/10 hover:border-nz-primary",
    ghost:
      "text-nz-muted hover:text-nz-text hover:bg-white/5",
    gradient:
      "animated-gradient text-white font-bold shadow-lg shadow-nz-primary/25 hover:shadow-nz-primary/40",
  };

  const combined = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={combined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
