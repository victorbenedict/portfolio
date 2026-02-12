"use client";
import { projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>
        <Swiper
          autoHeight={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          className="max-w-4xl mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="group">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden backdrop-blur-sm hover:border-blue-500/50 transition-all ">
                  {/* Project Image */}
                  <div className="relative left-0 lg:left-8 h-64 sm:h-80 group-hover:scale-110 transition-transform duration-700">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain scale-200 md:object-cover md:scale-100"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-700/30 border border-slate-600/30 rounded-full text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 rounded-lg text-slate-300 hover:text-white transition-all hover:scale-105"
                        >
                          <Image
                            src={"/logos/github.svg"}
                            alt={"Github Logo"}
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain"
                          />
                          Code
                        </a>
                      )}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
