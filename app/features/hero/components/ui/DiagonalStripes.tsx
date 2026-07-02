import { motion } from "motion/react";

export const DiagonalStripes = () => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="absolute inset-0"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => (
          <div
            key={`stripe-${num}`}
            className="absolute h-full w-[20%] bg-p5-red/10 skew-x-[-20deg]"
            style={{ left: `${i * 15 - 10}%` }}
          />
        ))}
      </div>
    </motion.div>
  );
};
