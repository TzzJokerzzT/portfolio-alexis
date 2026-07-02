import { motion } from "motion/react";
import type { PersonalInformationListResponse } from "@/app/shared/api/types";
import { fadeInUp, staggerContainer } from "@/app/shared/lib";
import { socialIcons } from "../../helper/socialIcons";

type SocialLinksProps = {
  contact?: PersonalInformationListResponse["contact"];
};

export const SocialLinks = ({ contact }: SocialLinksProps) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex gap-4"
    >
      {contact?.map((link) => (
        <motion.a
          key={link.id}
          variants={fadeInUp}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 skew-x-[-5deg] items-center justify-center bg-white/10 text-white transition-colors hover:bg-p5-red"
          aria-label={link.name}
        >
          <span className="skew-x-[5deg]">{socialIcons[link.icon]}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};
