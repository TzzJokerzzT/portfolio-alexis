import { motion } from "motion/react";
import Image from "next/image";
import { fadeInUp, smoothTransition } from "../lib";
import type { SkillItemProps } from "../types";

export function SkillItem({ name, icon, index }: SkillItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ ...smoothTransition, delay: index * 0.05 }}
      className="flex items-center gap-2 px-2 py-1.5 rounded-sm
                 hover:bg-black/5 dark:hover:bg-white/5 transition-colors
                 skew-x-[-1deg]"
    >
      {icon && (
        <Image
          width={240}
          height={240}
          src={`/${icon}`}
          alt={name}
          className="w-5 h-5 object-contain flex-shrink-0"
          loading="lazy"
        />
      )}
      <span className="text-xs font-bold uppercase tracking-wider text-p5-black dark:text-white truncate">
        {name}
      </span>
    </motion.div>
  );
}
