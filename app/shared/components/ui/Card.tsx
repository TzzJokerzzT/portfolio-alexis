"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import type { ReactNode } from "react";
import { cardHover } from "../../lib/animations";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  variant?: "default" | "red" | "dark";
  hover?: boolean;
}

const cardVariants = {
  default: "bg-white border-2 border-p5-black",
  red: "bg-p5-red border-2 border-p5-black text-white",
  dark: "bg-p5-black border-2 border-p5-red text-white",
};

export function Card({
  children,
  variant = "default",
  hover = true,
  className = "",
  ...props
}: CardProps) {
  return (
    <motion.div
      variants={hover ? cardHover : undefined}
      initial="rest"
      whileHover={hover ? "hover" : undefined}
      className={`
        relative p-6 shadow-[8px_8px_0_0_#000]
        transform skew-x-[-1deg]
        ${cardVariants[variant]}
        ${className}
      `}
      {...props}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-t-p5-red border-l-[20px] border-l-transparent" />
      <div className="skew-x-[1deg]">{children}</div>
    </motion.div>
  );
}
