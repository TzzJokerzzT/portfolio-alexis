"use client";

import { MainContent } from "./MainContent";
import { BackgroundDecoration } from "./ui/BackgroundDecoration";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 md:py-32 dark:bg-p5-black"
    >
      {/* Background decorations */}
      <BackgroundDecoration />

      {/* Main Content */}
      <MainContent />
    </section>
  );
}
