"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  DEVELOPER_INFO,
  fadeInUp,
  NAV_ITEMS,
  SOCIAL_LINKS,
  staggerContainer,
} from "../lib";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-p5-black border-t-4 border-p5-red overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 10px,
              #ff0000 10px,
              #ff0000 11px
            )`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 py-16 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp}>
            <a href="#home" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Developer Logo"
                width={150}
                height={75}
                className="w-28 h-auto md:w-32 object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {DEVELOPER_INFO.bio}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-p5-red transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-p5-red flex items-center justify-center text-white transition-colors skew-x-[-5deg]"
                  aria-label={link.platform}
                >
                  <span className="skew-x-[5deg] text-sm font-bold">
                    {link.platform.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-4 text-gray-400 text-sm">{DEVELOPER_INFO.email}</p>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} {DEVELOPER_INFO.name}. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Inspired by{" "}
              <span className="text-p5-red font-bold">Persona 5</span>{" "}
              aesthetics
            </p>
          </div>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[128px] border-b-p5-red/20 border-l-[128px] border-l-transparent" />
      </div>
    </footer>
  );
}
