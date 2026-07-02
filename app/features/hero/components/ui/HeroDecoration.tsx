import { motion } from "motion/react";
import Image from "next/image";

export const HeroDecoration = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative order-2 lg:order-2 flex justify-center lg:justify-end"
    >
      {/* Image container with P5 style frame */}
      <div className="relative">
        {/* Background decoration */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute -inset-4 bg-p5-red/20 skew-x-[-5deg] skew-y-[2deg]"
        />

        {/* Secondary frame */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute -inset-2 border-2 border-p5-red/50 skew-x-[3deg]"
        />

        {/* Main image */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Image
            src="/banner.png"
            alt="Phantom Developer - Pixel art character coding with laptop"
            width={500}
            height={500}
            priority
            className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-contain drop-shadow-[0_0_30px_rgba(255,0,0,0.3)]"
          />
        </motion.div>

        {/* Decorative elements around image */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-6 -right-6 w-12 h-12 border-2 border-p5-red"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-4 -left-4 w-8 h-8 bg-p5-red"
        />

        {/* Code brackets decoration */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute -left-8 top-1/2 -translate-y-1/2 text-p5-red text-6xl font-mono opacity-30 hidden md:block"
        >
          {"<"}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute -right-8 top-1/2 -translate-y-1/2 text-p5-red text-6xl font-mono opacity-30 hidden md:block"
        >
          {"/>"}
        </motion.div>
      </div>
    </motion.div>
  );
};
