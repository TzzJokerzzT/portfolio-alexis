"use client";

import { motion } from "motion/react";
import { data } from "motion/react-client";
import { useProject } from "@/app/shared/api/hooks/useProject";
import { Button, SectionTitle } from "@/app/shared/components/ui";
import { ErrorMsg } from "@/app/shared/components/ui/ErrorMessage";
import { LoadingSkeleton } from "@/app/shared/components/ui/LoadingSkeleton";
import { NotFound } from "@/app/shared/components/ui/NotFound";
import { staggerContainer } from "@/app/shared/lib";
import { ProjectCard } from "./ui/ProjectCard";

export function ProjectsSection() {
  const { data: projects, isLoading, isError, error } = useProject();

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-white dark:bg-p5-black overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-p5-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-p5-red/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle
          align="center"
          subtitle="Heists successfully executed. Each project represents a target whose heart was stolen through exceptional design and flawless execution."
        >
          Projects
        </SectionTitle>

        {isLoading && <LoadingSkeleton smGrid={"1"} lgGrid={"2"} length={6} />}

        {isError && (
          <ErrorMsg
            message="Failed to load project!"
            errorMsg={error?.message}
          />
        )}

        {!isLoading && !isError && projects?.length === 0 && (
          <NotFound message="Not projects found!" />
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-16"
        >
          {projects?.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button variant="secondary" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
