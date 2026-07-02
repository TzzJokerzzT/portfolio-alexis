"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeInUp, smoothTransition } from "../../lib/animations";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({
  children,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={smoothTransition}
      className={`mb-12 ${alignClass[align]}`}
    >
      <h2 className="relative inline-block">
        <span
          className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight
          text-p5-black dark:text-white
          [text-shadow:4px_4px_0_#ff0000,-1px_-1px_0_#ff0000,1px_-1px_0_#ff0000,-1px_1px_0_#ff0000]"
        >
          {children}
        </span>
        {/* P5 style underline accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="absolute -bottom-2 left-0 right-0 h-2 bg-p5-red origin-left skew-x-[-12deg]"
        />
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
