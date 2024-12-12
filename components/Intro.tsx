"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsFillEnvelopeFill, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/103329136?v=4"
              alt="Victor Benedict"
              width="192"
              height="192"
              quality="80"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl dark:border-black/15"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div>
      <motion.h1
        className=" mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] text-stone-900 dark:text-stone-200 sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p>
          <span className="font-bold"> Victor Benedict - Web developer</span>{" "}
        </p>
        <p>
          <span className="underline">React</span>{" "}
          <span className="font-bold ">Next.js</span>
        </p>
      </motion.h1>
      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-stone-700 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-stone-800 focus:scale-110 active:scale-105 dark:bg-stone-900 dark:hover:bg-stone-800"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me
          <BsFillEnvelopeFill className="transition group-hover:scale-110" />{" "}
        </Link>
        <a
          className="dark:hover:text-stone-20 group flex cursor-pointer items-center gap-2 rounded-full border-black/10 bg-white p-7 py-3 text-stone-900 outline-none transition hover:scale-110 hover:bg-stone-100 hover:text-stone-950 focus:scale-110 active:scale-105 active:bg-stone-200 dark:bg-black/30 dark:text-stone-100 dark:hover:bg-black/20"
          href="/Victor Benedict Bulaong Resume.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="transition group-hover:scale-110 " />
        </a>
        <a
          className="flex cursor-pointer items-center gap-2 rounded-full border-black/10 bg-white p-4 text-[1.35rem] text-stone-800 transition hover:scale-[1.15] hover:bg-stone-100 hover:text-stone-950 focus:scale-[1.15] active:scale-110 active:bg-stone-200 dark:bg-black/40 dark:text-stone-100 dark:hover:bg-black/30"
          href="https://www.linkedin.com/in/victorbenedictb/"
          target="blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex cursor-pointer items-center  gap-2 rounded-full border-black/10 bg-white p-4 text-[1.35rem] text-stone-800 transition hover:scale-[1.15] hover:bg-stone-100 hover:text-stone-950 focus:scale-[1.15] active:bg-stone-200 first-line:active:scale-110 dark:bg-black/40 dark:text-stone-100 dark:hover:bg-black/30"
          href="https://github.com/victorbenedict"
          target="blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
