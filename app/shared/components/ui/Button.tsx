"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import type { ReactNode } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-p5-red text-white hover:bg-p5-red/90 shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px]",
  secondary:
    "bg-p5-black text-white hover:bg-p5-black/90 shadow-[4px_4px_0_0_#ff0000] hover:shadow-[2px_2px_0_0_#ff0000] hover:translate-x-[2px] hover:translate-y-[2px]",
  outline:
    "border-2 border-p5-red text-p5-red hover:bg-p5-red hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        font-bold uppercase tracking-wider skew-x-[-3deg]
        transition-all duration-200 ease-out
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      <span className="skew-x-[3deg] inline-block">{children}</span>
    </motion.button>
  );
}
