import { dude, socialLinks } from "@/lib/data";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            {dude.name}
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6">
          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {dude.title}
          </span>
        </h2>

        {/* Subtitle */}
        <div className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          <p>
            Specializing in{" "}
            <span className="text-blue-400 font-medium">React</span> &{" "}
            <span className="text-red-400 font-medium">NestJS</span>
          </p>

          <p>Building fast and scalable web applications</p>
        </div>

        {/* Social Links */}

        <div className="flex items-center justify-center gap-4 mb-10">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg transition-all hover:scale-110 hover:border-blue-500/50"
            >
              <Image
                src={s.src}
                alt={s.name}
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
          >
            Contact
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 rounded-lg font-medium transition-all hover:scale-105"
          >
            View Projects
          </button>
          <a
            href="/Victor Benedict Bulaong Resume.pdf"
            download
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full p-1">
          <div className="w-1.5 h-3 bg-blue-400 rounded-full animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
}
