import { skills } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Dev Skills and Tools
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Skill */}
        <div className="mb-16">
          <div className="mx-auto flex flex-wrap justify-center gap-6 max-w-5xl">
            {skills.map((s, index) => (
              <Link
                key={index}
                href={s.url}
                target="_blank"
                className="group p-2.5 flex flex-col items-center gap-2 rounded drop-shadow-xs hover:drop-shadow-slate-400/50"
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    width={64}
                    height={64}
                    alt={s.alt}
                    src={s.src}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-slate-300 pointer-events-none group-hover:text-white">
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
