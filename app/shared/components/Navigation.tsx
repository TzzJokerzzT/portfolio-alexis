"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { NAV_ITEMS } from "../lib";

// Menu item colors for P5 style variety
const menuItemColors = [
  "from-red-600 to-red-500",
  "from-yellow-500 to-yellow-400",
  "from-pink-500 to-pink-400",
  "from-cyan-500 to-cyan-400",
  "from-green-500 to-green-400",
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Menu Button - Top Left Corner */}
      <div className="fixed top-0 left-0 z-[60] p-4 flex items-center gap-4">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 md:w-16 md:h-16 group flex-shrink-0"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {/* Button background - P5 angular style */}
          <div
            className="absolute inset-0 bg-p5-red transition-transform duration-300 group-hover:scale-105"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
            }}
          />
          {/* Hamburger icon */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-1.5">
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0,
                width: isOpen ? "20px" : "24px",
              }}
              transition={{ duration: 0.3 }}
              className="h-0.5 bg-white block origin-center"
              style={{ width: "24px" }}
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
                scaleX: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0,
                width: isOpen ? "20px" : "24px",
              }}
              transition={{ duration: 0.3 }}
              className="h-0.5 bg-white block origin-center"
              style={{ width: "24px" }}
            />
          </div>
        </motion.button>

        {/* Logo next to menu button */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Developer Logo"
            width={180}
            height={90}
            priority
            className="w-16 h-auto md:w-20 lg:w-24 object-contain"
          />
        </motion.a>
      </div>

      {/* Background overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-[45] backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* P5 Style Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <nav className="fixed top-0 left-0 z-[55] pt-24 pl-4">
            {/* Menu container with top decoration */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Top decorative element */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="w-64 h-3 bg-gradient-to-r from-p5-red to-red-400 mb-1 origin-left"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                }}
              />

              {/* Menu items */}
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -50, skewX: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      skewX: 0,
                      transition: {
                        duration: 0.4,
                        delay: 0.1 + index * 0.08,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    }}
                    exit={{
                      opacity: 0,
                      x: -30,
                      transition: {
                        duration: 0.2,
                        delay: (NAV_ITEMS.length - index) * 0.03,
                      },
                    }}
                    className="relative"
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative block"
                    >
                      {/* Menu item background */}
                      <div
                        className={`
                          relative overflow-hidden
                          bg-gradient-to-r ${menuItemColors[index % menuItemColors.length]}
                          transition-all duration-300
                          group-hover:translate-x-2 group-hover:scale-[1.02]
                        `}
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                          width: `${280 - index * 15}px`,
                        }}
                      >
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />

                        {/* Text content */}
                        <div className="relative px-6 py-3 flex items-center gap-3">
                          <span className="text-white/60 font-mono text-xs">
                            0{index + 1}
                          </span>
                          <span className="text-white font-black text-lg md:text-xl uppercase tracking-wide drop-shadow-lg">
                            {item.label}
                          </span>
                        </div>
                      </div>

                      {/* Shadow/3D effect */}
                      <div
                        className="absolute top-1 left-1 -z-10 bg-black/40"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                          width: `${280 - index * 15}px`,
                          height: "100%",
                        }}
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom decorative element */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="w-48 h-3 bg-gradient-to-r from-p5-red to-red-400 mt-1 origin-left"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                }}
              />

              {/* Decorative side accent */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -left-2 top-0 bottom-0 w-1 bg-p5-red origin-top"
              />
            </motion.div>
          </nav>
        )}
      </AnimatePresence>

      {/* Desktop Navigation - Optional horizontal bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed top-0 right-0 z-50 hidden lg:block p-4"
      >
        <ul className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative px-4 py-2 text-white font-bold uppercase text-sm tracking-wider hover:text-p5-red transition-colors duration-200 group"
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-p5-red
                  group-hover:w-full transition-all duration-300"
                />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
