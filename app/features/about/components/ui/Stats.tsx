import { motion } from "motion/react";
import type {
  IntroductionListResponse,
  SkillListResponse,
} from "@/app/shared/api/types";
import { fadeInUp, staggerContainer } from "@/app/shared/lib";

type StatsProps = {
  experienceYears?: IntroductionListResponse["experienceYears"];
  skill?: SkillListResponse[];
};

export const Stats = ({ experienceYears, skill }: StatsProps) => {
  const stats = [
    { label: "Years Experience", value: experienceYears },
    // { label: "Projects Completed", value: "50+" },
    // { label: "Happy Clients", value: "30+" },
    {
      label: "Technologies",
      value: skill && skill.length >= 20 ? "20+" : skill?.length.toString(),
    },
  ];
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-4 md:grid-cols-4"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={fadeInUp}
          className="skew-x-[-3deg] bg-p5-black p-4 text-center dark:bg-white/10"
        >
          <div className="skew-x-[3deg]">
            <span className="block text-3xl font-black text-p5-red">
              {stat.value}
            </span>
            <span className="text-xs tracking-wider text-gray-400 uppercase">
              {stat.label}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
