"use client";

import { motion } from "motion/react";
import { useExperience } from "@/app/shared/api/hooks/useExperience";
import { SectionTitle } from "@/app/shared/components/ui";
import { ErrorMsg } from "@/app/shared/components/ui/ErrorMessage";
import { LoadingSkeleton } from "@/app/shared/components/ui/LoadingSkeleton";
import { NotFound } from "@/app/shared/components/ui/NotFound";
import { staggerContainer } from "@/app/shared/lib";
import { ExperienceCard } from "./ui/ExperienceCard";

export function ExperienceSection() {
  const { data: experience, isLoading, isError, error } = useExperience();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gray-50 py-24 md:py-32 dark:bg-gray-900"
    >
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

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <SectionTitle
          align="left"
          subtitle="My arsenal of technologies and tools for crafting exceptional digital experiences."
        >
          Experience
        </SectionTitle>

        {isLoading && <LoadingSkeleton smGrid={"1"} lgGrid={"2"} length={6} />}

        {isError && (
          <ErrorMsg
            message="Failed to load experience!"
            errorMsg={error?.message}
          />
        )}

        {!isLoading && !isError && experience?.length === 0 && (
          <NotFound message="Not experience found!" />
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid w-auto gap-6 sm:grid-cols-1 lg:gap-8 xl:grid-cols-2"
        >
          {experience?.map((companies) => (
            <ExperienceCard
              key={companies.id}
              company={companies.company}
              location={companies.location}
              description={companies.description}
              title={companies.title}
              endDate={companies.endDate}
              startDate={companies.startDate}
              techStack={companies.techStack}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
