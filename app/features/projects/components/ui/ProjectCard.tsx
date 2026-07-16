import { motion } from "motion/react";
import Image from "next/image";
import type { ProjectListResponse } from "@/app/shared/api/types";
import { fadeInUp, smoothTransition } from "@/app/shared/lib";

interface ProjectCardProps {
  project: ProjectListResponse;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={fadeInUp}
      transition={{ ...smoothTransition, delay: index * 0.15 }}
      className={`group ${isEven ? "md:pr-8" : "md:pl-8"} relative`}
    >
      <div className="relative cursor-pointer overflow-hidden bg-white shadow-[8px_8px_0_0_#000] transition duration-100 ease-in-out hover:-translate-3.5 dark:bg-p5-black dark:shadow-[8px_8px_0_0_#ff0000]">
        {/* Project Image Placeholder */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 md:h-64">
          {/* Placeholder pattern */}
          <div className="absolute inset-0 opacity-20">
            <Image
              className="h-full w-full"
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
            className="absolute inset-0 flex items-center justify-center gap-4 bg-p5-red/90 transition-opacity"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-4 py-2 text-sm font-bold text-p5-black uppercase transition-colors hover:bg-p5-black hover:text-white"
              >
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white px-4 py-2 text-sm font-bold text-white uppercase transition-colors hover:bg-white hover:text-p5-black"
              >
                GitHub
              </a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-2 text-xl font-black text-p5-black uppercase transition-colors group-hover:text-p5-red dark:text-white">
            {project.title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tag) => (
              <span
                key={tag}
                className="skew-x-[-3deg] bg-gray-100 px-2 py-1 font-mono text-xs text-p5-red dark:bg-gray-800"
              >
                <span className="inline-block skew-x-[3deg]">{tag}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 h-0 w-0 border-t-[30px] border-l-[30px] border-t-p5-red border-l-transparent" />
      </div>
    </motion.div>
  );
}
