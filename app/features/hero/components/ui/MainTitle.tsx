import { motion } from "motion/react";
import type { PersonalInformationListResponse } from "@/app/shared/api/types";
import { dramaticTransition, fadeInUp } from "@/app/shared/lib";

type MainTitleProps = {
  basic?: PersonalInformationListResponse["basic"];
};

export const MainTitle = ({ basic }: MainTitleProps) => {
  return (
    <motion.h1
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ ...dramaticTransition, delay: 0.4 }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-none mb-6"
    >
      <span className="block">{basic?.name.split(" ")[0]}</span>
      <span className="block text-p5-red [text-shadow:4px_4px_0_#000]">
        {basic?.name.split(" ")[2] || "Developer"}
      </span>
    </motion.h1>
  );
};
