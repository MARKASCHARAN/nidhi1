import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Code,
  Database,
  Globe,
  Server,
  Blocks,
  Cpu,
  ArrowDownToLine,
  Mail,
  ChevronDown,
} from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const technologies = ["Python", "SQL", "Spark", "Kafka", "Docker", "Java"];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl top-1/4 -left-12 md:w-96 md:h-96 animate-pulse" />
        <div className="absolute w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl bottom-1/4 -right-12 md:w-96 md:h-96 animate-pulse delay-700" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] animate-float">
          <Code className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400/60" />
        </div>
        <div className="absolute top-[70%] right-[20%] animate-float-delayed">
          <Database className="w-10 h-10 sm:w-14 sm:h-14 text-blue-400/60" />
        </div>
        <div className="absolute bottom-[30%] left-[15%] animate-float">
          <Globe className="w-8 h-8 sm:w-12 sm:h-12 text-teal-400/60" />
        </div>
        <div className="absolute top-[30%] right-[15%] animate-float-delayed">
          <Server className="w-8 h-8 sm:w-12 sm:h-12 text-pink-400/60" />
        </div>
        <div className="absolute bottom-[10%] right-[10%] animate-float">
          <Blocks className="w-10 h-10 sm:w-14 sm:h-14 text-orange-400/60" />
        </div>
        <div className="absolute top-[50%] left-[20%] animate-float-delayed">
          <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-green-400/60" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {/* Name and Title */}
          <div className="space-y-2 sm:space-y-4">
            <div className="relative inline-block">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-sky-200">
                Nidhi Thakore
              </h1>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/80">
              Data Engineering Student
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Transforming complex data challenges into elegant, scalable solutions
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 text-white/90 text-xs sm:text-sm backdrop-blur-sm hover:bg-white/20 transition-all transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6 sm:pt-8">
          <a
  href="public/assets/pdf/NidhiThakore.pdf "
  download="Nidhi_Thakore_Resume.pdf"
  className="group px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white font-medium text-slate-900 hover:bg-white/90 transition-all flex items-center justify-center gap-2"
>
  <ArrowDownToLine className="w-4 h-4 sm:w-5 sm:h-5" />
  <span>Download Resume</span>
</a>

            <button
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <span>Connect</span>
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
