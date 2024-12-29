import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Database, Globe, Server, Blocks, Cpu, ArrowDownToLine, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = [
    "Python", "SQL", "Spark", "Kafka", "Docker", "Java", "Django"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-1/4 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl bottom-1/4 -right-48 animate-pulse delay-700" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Code className="w-12 h-12 text-purple-400/60" />
        </div>
        <div className="absolute top-2/3 right-1/3 animate-float-delayed">
          <Database className="w-14 h-14 text-blue-400/60" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float">
          <Globe className="w-16 h-16 text-teal-400/60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <Server className="w-12 h-12 text-pink-400/60" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-float">
          <Blocks className="w-14 h-14 text-orange-400/60" />
        </div>
        <div className="absolute top-1/2 left-1/3 animate-float-delayed">
          <Cpu className="w-10 h-10 text-green-400/60" />
        </div>
      </div>
{/* Main Hero Content */}
<div className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Name and Title */}
          <div className="space-y-4">
            <div className="relative inline-block">
              <h1 className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-sky-200">
                Nidhi Thakore
              </h1>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            </div>
            <p className="text-xl md:text-2xl text-white/80">
              Data Engineering Student
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Transforming complex data challenges into elegant, scalable solutions
          </p>


          {/* Technology Tags */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {technologies.map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm backdrop-blur-sm
                         hover:bg-white/20 transition-all transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <button
              className="group px-8 py-4 rounded-xl bg-white font-medium text-slate-900
                       hover:bg-white/90 transition-all flex items-center justify-center gap-2"
            >
              <ArrowDownToLine className="w-5 h-5" />
              <span>Download Resume</span>
            </button>

            <button
              className="group px-8 py-4 rounded-xl border border-white/20 text-white/90
                       hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <span>Connect</span>
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;