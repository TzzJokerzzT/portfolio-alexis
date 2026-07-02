import { motion } from "motion/react";
import { Button } from "@/app/shared/components/ui";
import { fadeInUp, smoothTransition } from "@/app/shared/lib";

export const CTAButtons = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ ...smoothTransition, delay: 0.8 }}
      className="flex flex-wrap gap-4"
    >
      <Button variant="primary" size="lg">
        View Projects
      </Button>
      <Button variant="outline" size="lg">
        Contact Me
      </Button>
    </motion.div>
  );
};
