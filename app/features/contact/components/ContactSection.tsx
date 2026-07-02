"use client";

import { SectionTitle } from "@/app/shared/components/ui";
import { BackgroundDecoration } from "./ui/BackgroundDecoration";
import { ContactForm } from "./ui/ContactForm";
import { ContactInfo } from "./ui/ContactInfo";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-p5-black py-24 md:py-32"
    >
      {/* Background decorations */}
      <BackgroundDecoration />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <SectionTitle
          align="center"
          subtitle="Ready to steal hearts together? Let's collaborate on your next project."
        >
          Contact
        </SectionTitle>

        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:gap-20">
          {/* Contact Info */}
          <ContactInfo />

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
