import type { Transition, Variants } from "motion/react";

// Persona 5 style dramatic entrance animations
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

// P5 signature diagonal slash animation
export const slashReveal: Variants = {
  hidden: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Menu item animation (P5 style)
export const menuItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    skewX: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
  },
};

// Card hover animation
export const cardHover: Variants = {
  rest: {
    scale: 1,
    rotateY: 0,
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// Transitions
export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
};

export const smoothTransition: Transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const dramaticTransition: Transition = {
  duration: 0.8,
  ease: [0.6, 0.01, 0.05, 0.95],
};
