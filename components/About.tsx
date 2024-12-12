"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        With over a year of Web Development experience and a degree in Software
        Development, I’ve honed my skills in front-end and back-end development.
        My background includes skills in network technologies and technical
        support.
      </p>
    </motion.section>
  );
}
