"use client";

import { useTheme } from "@/context/Theme-context";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="transistion-all fixed right-5 top-6 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] hover:scale-110 active:scale-105 dark:bg-stone-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
}
