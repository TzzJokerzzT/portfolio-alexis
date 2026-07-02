import { motion } from "motion/react";
import type { PersonalInformationListResponse } from "@/app/shared/api/types";
import { fadeInUp, smoothTransition } from "@/app/shared/lib";

type TaglineProps = {
  basic?: PersonalInformationListResponse["basic"];
};

export const Tagline = ({ basic }: TaglineProps) => {
  return (
    <motion.p
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ ...smoothTransition, delay: 0.6 }}
      className="text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed"
    >
      {basic?.summary}
    </motion.p>
  );
};
