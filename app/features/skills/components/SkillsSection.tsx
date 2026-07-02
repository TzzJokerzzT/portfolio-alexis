"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useSkills } from "@/app/shared/api/hooks/useSkill";
import type { SkillListResponse } from "@/app/shared/api/types";
import { SectionTitle } from "@/app/shared/components/ui";
import { fadeInUp, smoothTransition, staggerContainer } from "@/app/shared/lib";

const CATEGORY_STYLE: Record<string, { accent: string; shadow: string }> = {
  Frontend: {
    accent: "bg-p5-red",
    shadow: "shadow-[6px_6px_0_0_#ff0000]",
  },
  Styling: {
    accent: "bg-fuchsia-500",
    shadow: "shadow-[6px_6px_0_0_#d946ef]",
  },
  Backend: {
    accent: "bg-emerald-500",
    shadow: "shadow-[6px_6px_0_0_#10b981]",
  },
  Testing: {
    accent: "bg-amber-500",
    shadow: "shadow-[6px_6px_0_0_#f59e0b]",
  },
  Tools: {
    accent: "bg-blue-500",
    shadow: "shadow-[6px_6px_0_0_#3b82f6]",
  },
  "Package Manager": {
    accent: "bg-orange-500",
    shadow: "shadow-[6px_6px_0_0_#f97316]",
  },
  Mobile: {
    accent: "bg-violet-500",
    shadow: "shadow-[6px_6px_0_0_#8b5cf6]",
  },
  IDE: {
    accent: "bg-cyan-500",
    shadow: "shadow-[6px_6px_0_0_#06b6d4]",
  },
};

const FALLBACK_STYLE = {
  accent: "bg-p5-red",
  shadow: "shadow-[6px_6px_0_0_#ff0000]",
};

function groupByCategory(skills: SkillListResponse[]) {
  return skills.reduce<
    Record<string, { category: string; skills: SkillListResponse[] }>
  >((acc, skill) => {
    const cat = skill.category;
    if (!acc[cat]) {
      acc[cat] = { category: cat, skills: [] };
    }
    acc[cat].skills.push(skill);
    return acc;
  }, {});
}

interface SkillItemProps {
  name: string;
  icon?: string;
  index: number;
}

function SkillItem({ name, icon, index }: SkillItemProps) {
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

function LoadingSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-16">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-p5-black p-5 skew-x-[-2deg] animate-pulse"
        >
          <div className="skew-x-[2deg]">
            <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 mb-5" />
            {Array.from({ length: 4 }).map((_, j) => (
              <div
                key={j}
                className="h-6 w-full bg-gray-100 dark:bg-gray-800 mb-2"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

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

        {isLoading && <LoadingSkeleton />}

        {isError && (
          <div className="text-center py-12">
            <p className="text-p5-red font-bold text-lg">
              Failed to load skills
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              {error?.message ?? "Please check your connection and try again."}
            </p>
          </div>
        )}

        {!isLoading && !isError && categoryGroups.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            No skills found.
          </p>
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
