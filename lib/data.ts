import xendinImg from "@/public/xendin.png";
import rubeeksImg from "@/public/rubeeks.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
import { SiNextdotjs } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Philippines",
    description:
      "Developed the company's landing page and invoicing application both front-end and back-end.",
    icon: React.createElement(SiNextdotjs),
    date: "2023 - Present",
  },
  {
    title: "Sr. Advisor II",
    location: "Davao City, Philippines",
    description:
      "Provides support for both customers and customer service representatives",
    icon: React.createElement(MdSupportAgent),
    date: "2018 - 2023",
  },
  {
    title: "Network Technical Support",
    location: "Dubai, UAE",
    description:
      "Implement solution and support for industrial communication projects across the UAE. During the career, I obtained the Cisco CCENT certification",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2016",
  },
  {
    title: "Associate's degree in Software Development",
    location: "General Santos City, Philippines",
    description: "Obtained the TESDA Programming NC IV certification.",
    icon: React.createElement(LuGraduationCap),
    date: "2012",
  },
] as const;

export const projectsData = [
  {
    title: "Rubeeks Web",
    description:
      "A landing for page for a startup company with newsletter subscription form.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind",
      "Flowbite",
      "Turborepo",
      "Resend",
    ],
    imageUrl: rubeeksImg,
    link: "https://rubeeks.com/",
  },
  {
    title: "Xendin Invoice App",
    description:
      "A simple audio callout application that annouce an order number and other public notifications.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind",
      "Flowbite",
      "Turborepo",
      "Storybook",
      "Nest.js",
      "TypeORM",
    ],
    imageUrl: xendinImg,
    link: "https://dev.xendin.com/",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Storybook",
  "Supabase",
  "TypeORM",
  "React Hook Form",
  "TanStack",
  "Express",
  "Turborepo",
  "React Native",
  "Git",
  "RestAPI",
  "TCP/IP",
  "WAN/LAN technologies",
  "Routing and switching protocols",
] as const;
