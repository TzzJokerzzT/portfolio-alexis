import { motion } from "motion/react";
import { Button } from "@/app/shared/components/ui";
import { fadeInRight, smoothTransition } from "@/app/shared/lib";

export const ContactForm = () => {
  return (
    <motion.div
      variants={fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={smoothTransition}
    >
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-bold tracking-wider text-gray-400 uppercase"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full skew-x-[-2deg] border-2 border-gray-700 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-p5-red focus:outline-none"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold tracking-wider text-gray-400 uppercase"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full skew-x-[-2deg] border-2 border-gray-700 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-p5-red focus:outline-none"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-bold tracking-wider text-gray-400 uppercase"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full skew-x-[-2deg] resize-none border-2 border-gray-700 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-p5-red focus:outline-none"
            placeholder="Your message..."
          />
        </div>

        <Button variant="primary" size="lg" className="w-full">
          Send Message
        </Button>
      </form>
    </motion.div>
  );
};
