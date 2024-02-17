import rubeeksImg from "@/public/rubeeks.png";
import queuecallerImg from "@/public/queuecaller.png";
import sisbrewImg from "@/public/sisbrew.jpg";
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
    title: "Front-end Developer",
    location: "Upwork",
    description:
      "I'm now working as a freelancer of a startup company. My stack includes React, Next.js, TypeScript, Tailwind, and Supabase. I'm open to full-time opportunities.",
    icon: React.createElement(SiNextdotjs),
    date: "2023 - Present",
  },
  {
    title: "Tier 2 Technical Support",
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
  },
  {
    title: "Queue caller",
    description:
      "A simple audio callout application that annouce an order number and other public notifications.",
    tags: ["React", "Tailwind"],
    imageUrl: queuecallerImg,
  },
  {
    title: "SisBrew Coffee and Tea",
    description: "A coffee shop page of our family business.",
    tags: ["React", "Next.js", "Tailwind", "Framer", "Resend"],
    imageUrl: sisbrewImg,
  },
] as const;

export const skillsData = [
  "Next.js",
  "React",
  "Node.js",
  "Tailwind",
  "TypeScript",
  "JavaScript",
  "Git",
  "HTML",
  "CSS",
  "Routing and switching protocols",
  "WAN/LAN technologies",
] as const;
