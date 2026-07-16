"use client";

import { motion } from "motion/react";
import { useSkills } from "@/app/shared/api/hooks/useSkill";
import { SkillItem } from "@/app/shared/components/SkillItems";
import { SectionTitle } from "@/app/shared/components/ui";
import { ErrorMsg } from "@/app/shared/components/ui/ErrorMessage";
import { LoadingSkeleton } from "@/app/shared/components/ui/LoadingSkeleton";
import { NotFound } from "@/app/shared/components/ui/NotFound";
import { fadeInUp, staggerContainer } from "@/app/shared/lib";
import { CATEGORY_STYLE, FALLBACK_STYLE } from "../utils/constants";
import { groupByCategory } from "../utils/groupByCategory";

export function SkillsSection() {
  const { data: skills, isLoading, isError, error } = useSkills();

  const categoryGroups = skills ? Object.values(groupByCategory(skills)) : [];

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            currentColor 10px,
            currentColor 11px
          )`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          align="center"
          subtitle="My arsenal of technologies and tools for crafting exceptional digital experiences."
        >
          Skills
        </SectionTitle>

        {isLoading && <LoadingSkeleton smGrid={"2"} lgGrid={"3"} length={6} />}

        {isError && (
          <ErrorMsg
            message="Failed to load skills!"
            errorMsg={error?.message}
          />
        )}

        {!isLoading && !isError && skills?.length === 0 && (
          <NotFound message="Not skill found!" />
        )}

        {!isLoading && !isError && categoryGroups.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-16"
          >
            {categoryGroups.map((group) => {
              const style = CATEGORY_STYLE[group.category] ?? FALLBACK_STYLE;

              return (
                <motion.div
                  key={group.category}
                  variants={fadeInUp}
                  className="relative"
                >
                  {/* Category Card */}
                  <div
                    className={`bg-white dark:bg-p5-black p-5 ${style.shadow} skew-x-[-2deg]`}
                  >
                    <div className="skew-x-[2deg]">
                      {/* Category Header */}
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className={`w-4 h-8 ${style.accent} skew-x-[-10deg]`}
                        />
                        <h3 className="text-lg font-black uppercase tracking-tight text-p5-black dark:text-white">
                          {group.category}
                        </h3>
                        <span className="ml-auto text-xs font-mono text-gray-400 dark:text-gray-500">
                          {group.skills.length}
                        </span>
                      </div>

                      {/* Skills */}
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-x-2 gap-y-1"
                      >
                        {group.skills.map((skill, index) => (
                          <SkillItem
                            key={skill.id}
                            name={skill.name}
                            icon={skill.icon}
                            index={index}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
