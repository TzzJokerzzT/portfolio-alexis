import { motion } from "motion/react";
import type {
  IntroductionListResponse,
  PersonalInformationListResponse,
  SkillListResponse,
} from "@/app/shared/api/types";
import { fadeInRight, smoothTransition } from "@/app/shared/lib";
import { Stats } from "./Stats";

type ContentSectionProps = {
  personalInformation?: PersonalInformationListResponse;
  introduction?: IntroductionListResponse;
  skill: SkillListResponse[];
};

export const ContentSection = ({
  personalInformation,
  introduction,
  skill,
}: ContentSectionProps) => {
  return (
    <motion.div
      variants={fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={smoothTransition}
    >
      <h3 className="mb-6 text-2xl font-bold text-p5-black md:text-3xl dark:text-white">
        I&apos;m {personalInformation?.basic.name}, a{" "}
        <span className="text-p5-red">{personalInformation?.basic.label}</span>
      </h3>

      <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
        {personalInformation?.basic.summary}
      </p>

      {/* Stats */}
      <Stats experienceYears={introduction?.experienceYears} skill={skill} />
    </motion.div>
  );
};
