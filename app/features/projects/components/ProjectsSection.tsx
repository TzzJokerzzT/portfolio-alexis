"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useProject } from "@/app/shared/api/hooks/useProject";
import type { ProjectListResponse } from "@/app/shared/api/types";
import { Button, SectionTitle } from "@/app/shared/components/ui";
import { fadeInUp, smoothTransition, staggerContainer } from "@/app/shared/lib";

interface ProjectCardProps {
  project: ProjectListResponse;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeInUp}
      transition={{ ...smoothTransition, delay: index * 0.15 }}
      className={`group relative ${isEven ? "md:pr-8" : "md:pl-8"}`}
    >
      <div className="relative bg-white dark:bg-p5-black overflow-hidden shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#ff0000]">
        {/* Project Image Placeholder */}
        <div className="relative h-48 md:h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
          {/* Placeholder pattern */}
          <div className="absolute inset-0 opacity-20">
            {/* <div */}
            {/*   className="w-full h-full" */}
            {/*   style={{ */}
            {/*     backgroundImage: `linear-gradient(45deg, #ff0000 25%, transparent 25%), */}
            {/*       linear-gradient(-45deg, #ff0000 25%, transparent 25%), */}
            {/*       linear-gradient(45deg, transparent 75%, #ff0000 75%), */}
            {/*       linear-gradient(-45deg, transparent 75%, #ff0000 75%)`, */}
            {/*     backgroundSize: "20px 20px", */}
            {/*     backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px", */}
            {/*   }} */}
            {/* /> */}
            <Image
              className="w-full h-full"
              width={240}
              height={240}
              src={project.imageUrl}
              alt={`${project.title} image`}
            />
          </div>

          {/* Project number */}
          <div className="absolute top-4 left-4 text-6xl font-black text-white/10">
            0{index + 1}
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-p5-red/90 flex items-center justify-center gap-4 transition-opacity"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-p5-black font-bold uppercase text-sm hover:bg-p5-black hover:text-white transition-colors"
              >
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-white text-white font-bold uppercase text-sm hover:bg-white hover:text-p5-black transition-colors"
              >
                GitHub
              </a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-black uppercase text-p5-black dark:text-white mb-2 group-hover:text-p5-red transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 text-p5-red skew-x-[-3deg]"
              >
                <span className="skew-x-[3deg] inline-block">{tag}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-p5-red border-l-[30px] border-l-transparent" />
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const { data: projects } = useProject();

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
