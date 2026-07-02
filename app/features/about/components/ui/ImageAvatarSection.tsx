import { motion } from "motion/react";
import { fadeInLeft, smoothTransition } from "@/app/shared/lib";

export const ImageAvatarSection = () => {
  return (
    <motion.div
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={smoothTransition}
      className="relative"
    >
      {/* Stylized frame */}
      <div className="relative mx-auto aspect-square max-w-md">
        {/* Background shape */}
        <div className="absolute inset-4 skew-x-[-5deg] skew-y-[2deg] bg-p5-red" />

        {/* Main image container */}
        <div className="relative skew-x-[-3deg] bg-p5-black p-2">
          <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            {/* Placeholder avatar - P5 style mask silhouette */}
            <svg
              viewBox="0 0 100 100"
              className="h-3/4 w-3/4 text-p5-red"
              fill="currentColor"
              role="img"
              aria-label="Developer avatar silhouette"
            >
              <title>Developer Avatar</title>
              <path d="M50 10 C30 10 15 30 15 50 C15 70 30 90 50 90 C70 90 85 70 85 50 C85 30 70 10 50 10 Z M35 40 C35 35 40 32 45 35 L50 40 L55 35 C60 32 65 35 65 40 C65 45 55 55 50 60 C45 55 35 45 35 40 Z" />
            </svg>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -right-4 h-16 w-16 border-4 border-p5-red"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-4 -left-4 h-12 w-12 bg-p5-red"
        />
      </div>
    </motion.div>
  );
};
