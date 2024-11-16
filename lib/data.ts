import queuecallerImg from "@/public/queuecaller.png";
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
    location: "Full Remote",
    description:
      "I'm now working as a full-stack developer of a startup company. My stack includes React, Next.js, Nest.js, TypeScript, Tailwind, Storybook and Supabase.",
    icon: React.createElement(SiNextdotjs),
    date: "2023 - Present",
  },
  {
    title: "Sr. Advisor II",
    location: "Davao City, Philippines",
    description:
      "I work as a level 2 customer service representative for residential router and other gaming/productivity devices",
    icon: React.createElement(MdSupportAgent),
    date: "2018 - 2023",
  },
  {
    title: "Network Technical Support",
    location: "Dubai, UAE",
    description:
      "I worked both post and pre-sales support for industrial grade router, switch and wireless technologies. During my career, I successfully obtained my Cisco CCENT certification",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2016",
  },
  {
    title: "Associate's degree in Software Development",
    location: "General Santos City, Philippines",
    description:
      "I studied a two-year software development course provided by AMA Computer Learning College.",
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
    title: "Queue caller",
    description:
      "A simple audio callout application that annouce an order number and other public notifications.",
    tags: ["React", "Tailwind"],
    imageUrl: queuecallerImg,
    link: "https://queue-soundboard.vercel.app/",
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
  "Git",
  "RestAPI",
  "TCP/IP",
  "WAN/LAN technologies",
  "Routing and switching protocols",
] as const;
