import { experiences } from "@/lib/data";
import { Calendar, Code, EthernetPort, Headset } from "lucide-react";
import Link from "next/link";

export function Experience() {
  const icons = [Code, Headset, EthernetPort];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-400 via-purple-500 to-blue-400" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-linear-to-r from-blue-400 to-purple-500 rounded-full border-4 border-slate-950" />

                  {/* Content Card */}
                  <div className="md:w-1/2">
                    <div className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:border-blue-500/50 transition-all group">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white">
                            {exp.title}
                          </h3>
                          <Link
                            href={exp.companyUrl}
                            target="_blank"
                            className="text-blue-400 font-medium hover:underline underline-offset-2"
                          >
                            {exp.company}
                          </Link>
                          <div className="mt-1 flex items-center gap-2 text-slate-400 text-sm ">
                            <Calendar className="w-4 h-4" />
                            {exp.startDate} - {exp.endDate}
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-slate-300 text-sm flex items-start gap-2"
                          >
                            <span className="text-blue-400">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
