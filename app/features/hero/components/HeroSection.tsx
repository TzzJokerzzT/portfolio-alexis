"use client";

import { useEffect, useState } from "react";
import { MainContent } from "./MainContent";
import { AnimatedBackground } from "./ui/AnimatedBackground";
import { DecorativeCornerElement } from "./ui/DecorativeCornerElement";
import { ScrollIndicator } from "./ui/ScrollIndicator";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-p5-black"
    >
      {/* Animated Background Pattern */}
      <AnimatedBackground />

      {/* Main Content - Two Column Layout */}
      <MainContent />

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Decorative corner elements */}
      <DecorativeCornerElement />
    </section>
  );
}
