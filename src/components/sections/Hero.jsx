import React from 'react';
import { ArrowRight } from 'lucide-react';
import MeshBackground from '../ui/MeshBackground';
import FloatingIcons from '../ui/FloatingIcons';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <MeshBackground />
      <FloatingIcons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Nidhi Thakore
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
            Data Engineering Student passionate about transforming raw data into meaningful insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed">
            <a href="#projects" 
               className="inline-flex items-center px-6 py-3 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors">
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#contact"
               className="inline-flex items-center px-6 py-3 rounded-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 transition-colors">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;