import { motion } from "motion/react";

export const FloatingShapes = () => {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-64 h-64 border-4 border-p5-red/30 skew-x-[-10deg] hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-40 left-10 w-40 h-40 bg-p5-red/20 skew-x-[15deg]"
      />
    </>
  );
};
