import Link from "next/link";

export function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Info
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Text Content */}
        <div className="mx-auto space-y-6 text-center max-w-2xl">
          <p className="text-lg text-slate-300 leading-relaxed">
            I am a <strong>web developer</strong> from the Philippines and
            co-founder of{" "}
            <Link
              href={"https://www.rubeeks.com/"}
              target="_blank"
              className="text-indigo-100 hover:underline underline-offset-2"
            >
              Rubeeks Technologies
            </Link>
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Over <strong>8 years</strong> in the Information Technology
            profession, I have gained versatile experience across different
            paths including{" "}
            <span className="text-blue-400">web development</span>,{" "}
            <span className="text-red-400">networking</span> (including
            routing/switching,{" "}
            <span className="text-orange-400">industrial communication</span>,
            and LAN/WAN configuration), and{" "}
            <span className="text-green-400">technical support</span>.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Let’s get in touch if your team needs a <strong>developer</strong>{" "}
            focused on building solutions for web applications using{" "}
            <span className="text-blue-400 font-medium">React</span> and{" "}
            <span className="text-red-400 font-medium">NestJS</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
