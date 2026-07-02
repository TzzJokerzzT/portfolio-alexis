import { motion } from "motion/react";
import type { PersonalInformationListResponse } from "@/app/shared/api/types";
import { fadeInLeft, smoothTransition } from "@/app/shared/lib";

type PreTitleProps = {
  basic?: PersonalInformationListResponse["basic"];
};

export const PreTitle = ({ basic }: PreTitleProps) => {
  return (
    <motion.div
      variants={fadeInLeft}
      initial="hidden"
      animate="visible"
      transition={{ ...smoothTransition, delay: 0.2 }}
      className="mb-4"
    >
      <span className="inline-block px-4 py-2 bg-p5-red text-white font-mono text-sm tracking-wider skew-x-[-5deg]">
        <span className="skew-x-[5deg] inline-block">
          {basic?.label.toUpperCase()}
        </span>
      </span>
    </motion.div>
  );
};
