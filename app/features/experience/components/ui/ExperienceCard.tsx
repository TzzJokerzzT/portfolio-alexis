import { motion } from "motion/react";
import type { LocationType } from "@/app/shared/api/types";
import { staggerContainer } from "@/app/shared/lib";
import { Description } from "./Description";
import { Header } from "./Header";
import { Skills } from "./Skills";

export function ExperienceCard({
  title,
  company,
  description,
  endDate,
  startDate,
  techStack,
}: {
  title: string;
  company: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  techStack: string[];
  location: LocationType;
}) {
  return (
    <div
      className={`skew-x-[-2deg] cursor-pointer bg-p5-red bg-white p-5 shadow-[6px_6px_0_0_#ff0000] transition duration-100 ease-in-out hover:-translate-3.5 dark:bg-p5-black`}
    >
      <div className="skew-x-[2deg]">
        {/* Category Header */}
        <Header
          company={company}
          title={title}
          endDate={endDate}
          startDate={startDate}
        />

        <div>
          {description.map((des) => (
            <Description key={des} description={des} />
          ))}
        </div>

        {/* Skills */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {techStack.map((skill) => (
            <Skills key={skill} skill={skill} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
