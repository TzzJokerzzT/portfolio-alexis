import { motion } from "motion/react";

export const BackgroundDecoration = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 h-full w-[150%] -translate-x-1/2 skew-x-[-20deg] bg-p5-red/5" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 h-64 w-64 rounded-full border border-p5-red/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 h-48 w-48 border border-p5-red/20"
      />
    </div>
  );
};
