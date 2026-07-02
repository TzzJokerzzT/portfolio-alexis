import { motion } from "motion/react";
import { usePersonalInformation } from "@/app/shared/api/hooks/usePersonalInformation";
import { fadeInLeft, smoothTransition } from "@/app/shared/lib";
import { ContactDetails } from "./ContactDetails";
import { ContactText } from "./ContactText";
import { SocialLinks } from "./SocialLinks";

export const ContactInfo = () => {
  const { data } = usePersonalInformation();
  return (
    <motion.div
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={smoothTransition}
    >
      {/* Contact Text */}
      <ContactText />

      {/* Contact Details */}
      <ContactDetails basic={data?.basic} contact={data?.contact} />

      {/* Social Links */}
      <SocialLinks contact={data?.contact} />
    </motion.div>
  );
};
