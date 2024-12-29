import React from 'react';
import { ArrowDownToLine, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const technologies = [
    "Python", "SQL", "Spark", "AWS", "Kafka", "Docker", "Airflow"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse delay-1000" />
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

          {/* Technologies */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto pt-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 text-white/80 backdrop-blur-sm
                         border border-white/10 hover:bg-white/10 hover:border-white/20 
                         transition-all duration-300"
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
    </div>
  );
};

export default Hero;