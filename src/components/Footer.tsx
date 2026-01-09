import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Twitter, ShieldCheck, Zap, Globe, Clock } from 'lucide-react';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }));

  // Live Clock for Vadodara
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#000] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Visual background "Grid" Flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">

          {/* 01: BRAND IDENTITY */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-[0.2em] uppercase">
              NIDHI <span className="text-blue-600 font-light">THAKORE</span>
            </h2>
            <p className="text-neutral-500 text-[11px] leading-relaxed font-mono uppercase tracking-widest max-w-[250px]">
              Defining the digital skyline through AWS Architecture & Intelligent Cloud Systems.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-blue-600" />
              <span className="text-[10px] font-mono text-blue-500 uppercase tracking-tighter animate-pulse">Available for Global Innovation</span>
            </div>
          </div>

          {/* 02: LIVE COORDINATES (VADODARA) */}
          <div className="space-y-6 border-l border-white/5 pl-8">
            <span className="text-[10px] font-mono text-neutral-700 uppercase tracking-[0.4em]">Node_Location</span>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <Globe size={14} className="text-blue-500" />
                <span className="font-mono text-xs uppercase tracking-widest">Vadodara, GJ // IN</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Clock size={14} className="text-blue-500" />
                <span className="font-mono text-xs tracking-widest uppercase">{time} IST</span>
              </div>
              <div className="text-[9px] font-mono text-neutral-600">COORDS: 22.3072° N, 73.1812° E</div>
            </div>
          </div>

          {/* 03: SYSTEM INTEGRITY */}
          <div className="space-y-6 border-l border-white/5 pl-8">
            <span className="text-[10px] font-mono text-neutral-700 uppercase tracking-[0.4em]">Integrity_Check</span>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-neutral-500">AWS_UPTIME</span>
                <span className="text-emerald-500">99.99%</span>
              </div>
              <div className="w-full h-[2px] bg-neutral-900 overflow-hidden">
                <div className="w-[99%] h-full bg-blue-600 animate-progress" />
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono pt-2">
                <span className="text-neutral-500">VERSION</span>
                <span className="text-white tracking-widest">V2.0.4-LATEST</span>
              </div>
            </div>
          </div>

          {/* 04: NEURAL LINK (SOCIALS) */}
          <div className="space-y-6 border-l border-white/5 pl-8">
            <span className="text-[10px] font-mono text-neutral-700 uppercase tracking-[0.4em]">Social_Protocol</span>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'GitHub', icon: Github, link: 'https://github.com/tech-nidhi' },
                { label: 'LinkedIn', icon: Linkedin, link: 'https://www.linkedin.com/in/nidhi-thakore-10b9b825b/' },
                { label: 'Twitter', icon: Twitter, link: '#' },
                { label: 'Email', icon: Mail, link: '#' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-white/[0.03] border border-white/5 text-neutral-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-500 group"
                >
                  <item.icon size={12} className="group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-mono uppercase tracking-tighter">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[9px] font-mono text-neutral-700 uppercase tracking-[0.2em]">
            <span>Designed for Global Impact</span>
            <div className="w-1 h-1 rounded-full bg-neutral-800" />
            <span>Ref: 2026_PORTFOLIO_UNIT</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
            <ShieldCheck size={14} className="text-emerald-900" />
            <span className="tracking-widest italic opacity-40">Root_Access_Granted</span>
          </div>

          <p className="text-[10px] font-mono text-neutral-700 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} NIDHI.THAKORE
          </p>
        </div>
      </div>

      {/* Removed style jsx block to fix React warning */}
    </footer>
  );
};

export default Footer;