import { dude, socialLinks } from "@/lib/data";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              &lt;VictorBenedict /&gt;
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building modern web applications with passion and precision.
              Let&apos;s create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(
                        item.toLowerCase(),
                      );
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg transition-all hover:scale-110 hover:border-blue-500/50 group"
                >
                  <Image
                    width={20}
                    height={20}
                    alt={social.name}
                    src={social.src}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              ))}
            </div>
            <p className="text-slate-400 text-sm">
              <a
                href={`mailto:${dude.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                {dude.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm flex items-center gap-1">
              © {currentYear} {dude.name}
            </p>
            <p className="text-slate-500 text-xs">Built by {dude.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
