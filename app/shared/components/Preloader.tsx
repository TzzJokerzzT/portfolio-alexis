"use client";

import { useIsFetching } from "@tanstack/react-query";
import { AnimatePresence, motion } from "motion/react";

export function Preloader() {
  const fetchingCount = useIsFetching();

  return (
    <AnimatePresence>
      {fetchingCount && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[100] bg-p5-black flex items-center justify-center"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              {[1, 2, 3, 4, 5].map((num, i) => (
                <div
                  key={`loader-stripe-${num}`}
                  className="absolute h-full w-[30%] bg-p5-red/5 skew-x-[-20deg]"
                  style={{ left: `${i * 25}%` }}
                />
              ))}
            </motion.div>
          </div>

          {/* Main loader content */}
          <div className="relative">
            {/* Spinning mask/logo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-24 h-24 md:w-32 md:h-32 relative"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <title>Loading spinner</title>
                {/* Outer ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeDasharray="70 30"
                />
                {/* Inner ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeDasharray="50 50"
                  className="opacity-50"
                />
              </svg>
            </motion.div>

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-p5-red text-3xl md:text-4xl font-black">
                  &lt;/&gt;
                </span>
              </motion.div>
            </div>
          </div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2"
          >
            <motion.p
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-sm uppercase tracking-[0.3em] font-mono"
            >
              Loading
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              >
                .
              </motion.span>
            </motion.p>
          </motion.div>

          {/* Decorative corners */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-p5-red" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-p5-red" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-p5-red" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-p5-red" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
