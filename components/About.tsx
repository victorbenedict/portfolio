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
        As a Front-End Developer, I want to represent simplicity, adaptability,
        and effectiveness as core values. My journey began with a degree in
        Software Development, specializing in desktop applications. I earned my
        skills through years of experience in network technologies and technical
        support, earning my Cisco certification along the way.
      </p>

      <p>
        Driven by curiosity for web development, I committed myself to know its
        fundamentals and frameworks. Now, I&apos;m eager to explore the inner
        workings of the web development industry.
      </p>
    </motion.section>
  );
}
