import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Database, Globe, Server, Blocks, Cpu } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = [
    "Python", "SQL", "Spark", "AWS", "Kafka", "Docker", "Airflow"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
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

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Name Section */}
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 pb-2">
              Nidhi Thakore
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>

          {/* Role Description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Data Engineering Student crafting elegant solutions for complex data challenges
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
            <a
              href="#projects"
              className="group px-8 py-4 rounded-xl bg-white text-purple-900 font-semibold
                       hover:bg-purple-100 transition-all transform hover:scale-105 hover:shadow-lg
                       flex items-center justify-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 rounded-xl border-2 border-white/50 text-white
                       hover:border-white hover:bg-white/10 transition-all transform hover:scale-105
                       flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Connect</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;